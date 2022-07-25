import { Button } from 'components/custom'
import { ClassesType, StudentAccountType } from 'lib/models/auth/accountCreation'

interface props {
  tableName: string
  classHeaders: string[]
  tableData: ClassesType
  studentArray: StudentAccountType[]
}
const ClassTable = ({ tableName, classHeaders, tableData, studentArray }: props) => {
  const parsedStudentArray: StudentAccountType[] = []

  studentArray.forEach((studentObject) => {
    if (tableData.Students.indexOf(studentObject['Student ID']) !== -1) {
      parsedStudentArray.push(studentObject)
    }
  })

  return (
    <div>
      <div className='flex items-center'>
        <h3 className='text-left'>{tableName}</h3>
        <p> - {tableData["Teacher's email"]}</p>
      </div>
      <table className='border-2 w-full my-4 table-fixed'>
        <thead>
          <tr>
            {Object.keys(studentArray[0]).map((name, i) => (
              <th key={i} className='text-left'>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {parsedStudentArray.map((student) => (
            <tr key={student['Student ID']}>
              {Object.values(student).map((val: any, i: number) => (
                <td key={i} className='text-left'>
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ClassTable
