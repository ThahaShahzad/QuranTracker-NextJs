import { Dispatch, SetStateAction } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useAuth } from 'lib/contexts/auth'
import { AssignmentCreateObj, AssignmentStatus, ClassesDoc, StudentDoc } from 'lib/graphql/fixedGenerated'
import { useForm } from 'react-hook-form'
import { Button, NumberInput, Select, TextInput } from 'components/custom'
import { Surahs } from 'public/Surahs'
import { CreateStudentAssignments } from 'lib/api/dash/teacher/CreateStudentAssignments'
import { NewAssignmentType } from 'lib/models/dash/teacher/newAssignment'
import Modal from 'components/custom/Modal'

interface props {
  currClass: ClassesDoc
  newAssignmentModal: {
    show: boolean
    ref: string
  }
  setNewAssignmentModal: Dispatch<
    SetStateAction<{
      show: boolean
      ref: string
    }>
  >
}

const NewAssignmentModal = ({ currClass, newAssignmentModal, setNewAssignmentModal }: props) => {
  const { user } = useAuth()
  const queryClient = useQueryClient()
  const currStudent = currClass.data.students.find((student) => student.ref['@ref'].id === newAssignmentModal.ref) as StudentDoc
  console.log(currStudent)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewAssignmentType>()
  const { mutateAsync, status } = useMutation(['studentAssignments', currStudent?.ref['@ref'].id], CreateStudentAssignments, {
    onSettled: () => {
      queryClient.fetchQuery(['GetClass', currClass.ref['@ref'].id])
    }
  })
  const date = new Date().toISOString()
  const subjectOptions = currClass.data.subject.map((subject) => {
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
      }) as number[]
    )
  )
  console.log(errors)
  const mostRecentAssignment = currStudent?.data.assignments.filter((e): any => {
    const d = new Date(e.data.completedAt)
    return d.getTime() == mostRecentDate.getTime() && e.data.status === AssignmentStatus.Completed
  })[0]
  // const mostRecentAssignment = currStudent?.data.assignments.find((assignment) => assignment.data.status === AssignmentStatus.Completed)
  // console.log(mostRecentAssignment)
  // const selectedSurah = watch('surah')
  const selectedSurahLength = mostRecentAssignment && (Surahs.find((surah) => surah.label === mostRecentAssignment.data.surah) as typeof Surahs[0])
  const startValue = mostRecentAssignment === undefined ? 1 : parseInt(mostRecentAssignment.data.end) + 1
  // const endValue = mostRecentAssignment === undefined ? selectedSurahLength?.length : parseInt(mostRecentAssignment.data.end)
  const onSubmit = async (formData: NewAssignmentType) => {
    console.log('form submission', formData)
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
      // const res = await mutateAsync(assignmentDoc)
      setNewAssignmentModal({ ...newAssignmentModal, show: !newAssignmentModal.show })
    } catch (error: any) {
      console.error(error)
    }
  }
  return (
    <Modal isOpen={newAssignmentModal} setIsOpen={setNewAssignmentModal}>
      <h4>New Assignment</h4>
      <form onSubmit={handleSubmit(onSubmit)} className='border-2 rounded-lg p-8'>
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
    </Modal>
  )
}

export default NewAssignmentModal
