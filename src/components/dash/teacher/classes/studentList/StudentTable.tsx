import { Link } from 'components/custom'
import { AssignmentDoc, ClassesDoc } from 'lib/graphql/fixedGenerated'
import { useState } from 'react'
import { BsPencilSquare, BsPlus } from 'react-icons/bs'
import GradeModal from './GradeModal'
import NewAssignmentModal from './NewAssignmentModal'

interface props {
  currClass: ClassesDoc
  columns: string[]
  rows:
    | {
        ref: string
        studentId: string
        name: string
        grade: boolean
        next: boolean
      }[]
    | undefined
  asPath: string
  NewAssignments: (AssignmentDoc | undefined)[] | undefined
}

const StudentTable = ({ currClass, columns, rows, asPath, NewAssignments }: props) => {
  const [gradeModal, setGradeModal] = useState({ show: false, ref: '' })
  const [newAssignmentModal, setNewAssignmentModal] = useState({ show: false, ref: '' })
  return (
    <>
      <table className='whitespace-nowrap'>
        <thead className='border-2 border-primary'>
          <tr>
            {columns.map((column) => (
              <th key={column} className={`${column === 'Name' && 'text-left'} p-2`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows?.map(({ ref, studentId, name, grade, next }) => (
            <tr key={ref}>
              <td className='p-2 md:p-4 border-2 border-primary w-[1%]'>
                <Link key={ref} button type='primary' to={`${asPath}/${studentId}`}>
                  {name}
                </Link>
              </td>
              {grade ? (
                <td
                  onClick={() => setGradeModal({ ...gradeModal, show: !gradeModal.show, ref })}
                  className='cursor-pointer p-2 md:p-4 border-2 border-primary w-[1%]'
                >
                  <BsPencilSquare className='hover:scale-150 m-auto' />
                </td>
              ) : (
                <td className='p-2 md:p-4 border-2 border-primary w-[1%]'></td>
              )}
              {next ? (
                <td
                  onClick={() => setNewAssignmentModal({ ...newAssignmentModal, show: !newAssignmentModal.show, ref })}
                  className='cursor-pointer p-2 md:p-4 border-2 border-primary w-[1%]'
                >
                  <BsPlus className='hover:scale-150 m-auto' />
                </td>
              ) : (
                <td className='p-2 md:p-4 border-2 border-primary w-[1%]'></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {gradeModal.show && <GradeModal {...{ currClass, NewAssignments, gradeModal, setGradeModal }} />}
      {newAssignmentModal.show && <NewAssignmentModal {...{ currClass, newAssignmentModal, setNewAssignmentModal }} />}
    </>
  )
}

export default StudentTable
