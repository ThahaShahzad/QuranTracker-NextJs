import { Dispatch, SetStateAction } from 'react'
import Modal from 'components/custom/Modal'
import { Button, NumberInput, Select, TextInput } from 'components/custom'
import { useForm } from 'react-hook-form'
import { Surahs } from 'public/Surahs'
import { GradeType } from 'lib/models/dash/teacher/grade'
import { AssignmentDoc, AssignmentStatus, AssignmentUpdateObj, StudentDoc } from 'lib/graphql/fixedGenerated'
import { useMutation, useQueryClient } from 'react-query'
import { GradeAssignment } from 'lib/api/dash/teacher/GradeAssignment'

interface props {
  newAssignment: AssignmentDoc | undefined
}

const Grade = ({ newAssignment }: props) => {
  const queryClient = useQueryClient()
  // const newAssignment = NewAssignments?.find((assignment) => assignment?.data.student['@ref'].id === currStudent.ref['@ref'].id)
  const { register, handleSubmit, setValue, watch } = useForm<GradeType>()
  const selectedSurahLength = Surahs.find((surah) => surah.label === newAssignment?.data.surah) as typeof Surahs[0]
  const { mutateAsync, status } = useMutation(['studentAssignments', newAssignment?.data.student['@ref'].id], GradeAssignment, {
    onSettled: () => {
      queryClient.invalidateQueries(['studentAssignments', newAssignment?.data.student['@ref'].id])
      queryClient.invalidateQueries(['GetClass', newAssignment?.data.classRef['@ref'].id])
    }
  })
  const date = new Date().toISOString()
  const onSubmit = async (formData: GradeType) => {
    try {
      console.log(formData)
      const UpdateAssignment: AssignmentUpdateObj = {
        assignmentId: newAssignment?.ref['@ref'].id as string,
        data: {
          ...formData,
          start: formData.start?.toString() as string,
          end: formData.end?.toString() as string,
          status: AssignmentStatus.Completed,
          updatedAt: date,
          completedAt: date
        }
      }
      const res = await mutateAsync(UpdateAssignment)
    } catch (error: any) {
      console.error(error)
    }
  }
  const gradeOptions = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C'].map((value) => {
    return {
      label: value,
      value: value
    }
  })
  const startValue = parseInt(newAssignment?.data.start as string)
  const endValue = parseInt(newAssignment?.data.end as string)
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='border-2 rounded-lg p-8'>
      <h4>Grade</h4>
      <div className='text-left space-y-2 mb-4'>
        <TextInput type='text' name='subject' label='Subject' readOnly defaultValue={newAssignment?.data.subject} register={register} />
        <TextInput type='text' name='notes' label='Original notes' readOnly defaultValue={newAssignment?.data.notes} register={register} />
        <Select options={Surahs} label='Surah' name='surah' defaultValue={newAssignment?.data.surah} register={register} />
        <NumberInput
          label='Start'
          name='start'
          readOnly
          // min={startValue}
          // max={selectedSurahLength?.length - 1}
          defaultValue={startValue}
          register={register}
        />
        <NumberInput label='End' name='end' min={startValue} max={selectedSurahLength?.length} defaultValue={endValue} register={register} />
        <Select options={gradeOptions} label='Grade' name='grade' register={register} />
        <TextInput type='text' name='gradeNotes' label='Grade notes' placeholder='Good Job' register={register} />
      </div>
      <Button submitType='submit'>Grade</Button>
    </form>
  )
}

export default Grade
