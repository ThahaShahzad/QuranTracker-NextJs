import { useMutation, useQueryClient } from 'react-query'
import { useAuth } from 'lib/contexts/auth'
import { AssignmentCreateObj, AssignmentStatus, ClassesDoc, StudentDoc } from 'lib/graphql/fixedGenerated'
import { useForm } from 'react-hook-form'
import { Button, NumberInput, Select, TextInput } from 'components/custom'
import { Surahs } from 'public/Surahs'
import { CreateStudentAssignments } from 'lib/api/dash/teacher/CreateStudentAssignments'
import { NewAssignmentType } from 'lib/models/dash/teacher/newAssignment'

interface props {
  currStudent: StudentDoc
  currClass: ClassesDoc
}

const NewAssignment = ({ currStudent, currClass }: props) => {
  const { user } = useAuth()
  const queryClient = useQueryClient()
  const { register, handleSubmit, setValue, watch } = useForm<NewAssignmentType>()
  const { mutateAsync, status } = useMutation(['studentAssignments', currStudent.ref['@ref'].id], CreateStudentAssignments, {
    onSettled: () => {
      queryClient.invalidateQueries(['studentAssignments', currStudent.ref['@ref'].id])
      queryClient.invalidateQueries(['GetClass', currClass.ref['@ref'].id])
    }
  })
  const date = new Date().toISOString()
  const subjectOptions = currClass?.data.subject.map((subject) => {
    return {
      label: subject,
      value: subject
    }
  })
  const mostRecentDate = new Date(
    Math.max.apply(
      null,
      currStudent.data.assignments.map((e): any => {
        return new Date(e.data.completedAt)
      })
    )
  )
  const mostRecentAssignment = currStudent.data.assignments.filter((e): any => {
    const d = new Date(e.data.completedAt)
    return d.getTime() == mostRecentDate.getTime()
  })[0]
  const selectedSurah = watch('surah')
  const selectedSurahLength = Surahs.find((surah) => surah.label === selectedSurah) as typeof Surahs[0]
  const startValue = mostRecentAssignment === undefined ? 1 : parseInt(mostRecentAssignment.data.end) + 1
  // const endValue = mostRecentAssignment === undefined ? selectedSurahLength?.length : parseInt(mostRecentAssignment.data.end)
  const onSubmit = async (formData: NewAssignmentType) => {
    try {
      const assignmentDoc: AssignmentCreateObj = {
        ...formData,
        start: formData.start?.toString() as string,
        end: formData.end?.toString() as string,
        student: currStudent.ref['@ref'].id,
        teacher: user.id,
        classRef: currClass.ref['@ref'].id,
        school: user.id,
        status: AssignmentStatus.New,
        grade: '',
        gradeNotes: '',
        createdAt: date,
        updatedAt: date,
        completedAt: date
      }
      const res = await mutateAsync(assignmentDoc)
    } catch (error: any) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='border-2 rounded-lg p-8'>
      <h4>New Assignment</h4>
      <div className='text-left'>
        {subjectOptions?.length > 1 ? (
          <Select options={subjectOptions} label='Subject' name='subject' register={register} />
        ) : (
          <TextInput type='text' name='subject' label='Subject' readOnly defaultValue={currClass.data.subject[0]} register={register} />
        )}
        <TextInput type='text' name='notes' label='notes' register={register} />
        <Select
          options={Surahs}
          label='Surah'
          name='surah'
          defaultValue={mostRecentAssignment ? mostRecentAssignment.data.surah : undefined}
          register={register}
        />
        <NumberInput
          label='Start'
          name='start'
          min={startValue}
          max={selectedSurahLength?.length - 1}
          defaultValue={startValue}
          register={register}
        />
        <NumberInput label='End' name='end' min={startValue} max={selectedSurahLength?.length} register={register} />
      </div>
      <Button submitType='submit'>Create</Button>
    </form>
  )
}

export default NewAssignment
