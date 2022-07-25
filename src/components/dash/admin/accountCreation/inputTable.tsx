import { ChangeEvent, useState } from 'react'
import csv from 'csvtojson'
import { useAccountCreationContext } from 'lib/contexts/accountCreation'
import {
  ParentAccountSchema,
  StudentAccountSchema,
  TeacherAccountSchema,
  ClassesSchema,
  ParentAccountType,
  ClassesType
} from 'lib/models/auth/accountCreation'
import { BsCheck, BsX, BsChevronDown, BsChevronUp } from 'react-icons/bs'

interface props {
  name: 'Parents' | 'Students' | 'Teachers' | 'Classes'
  headers: string[]
}

const InputTable = ({ name, headers }: props) => {
  const { form, setForm } = useAccountCreationContext()
  const [collapsed, setCollapsed] = useState(false)
  const [fileData, setFileData] = useState<any>()
  const [fileError, setFileError] = useState(false)
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && (e.target.files[0] as any)
    const reader = new FileReader()
    reader.onload = async (e) => {
      const text = e.target && e.target.result
      const jsonArray = (await csv().fromString(text as string)) as any
      switch (name) {
        case 'Parents':
          try {
            const parentsJson = jsonArray as ParentAccountType[]
            const parsedParentJson = parentsJson.map((parentObject) => {
              const childrenIdArr = parentObject['Child(ren)'].split(',')
              const parseChildrenIdArr = childrenIdArr.map((childId: string) => {
                return childId.trim()
              })
              parentObject['Child(ren)'] = parseChildrenIdArr
              return parentObject
            })
            const json = await ParentAccountSchema.validateAsync(parsedParentJson)
            setFileError(false)
            setFileData(json)
            setForm({ ...form, [name]: json })
          } catch (error: any) {
            setFileError(error)
          }
          break
        case 'Students':
          try {
            await StudentAccountSchema.validateAsync(jsonArray)
            setFileError(false)
            setFileData(jsonArray)
            setForm({ ...form, [name]: jsonArray })
          } catch (error: any) {
            setFileError(error)
          }
          break
        case 'Teachers':
          try {
            await TeacherAccountSchema.validateAsync(jsonArray)
            setFileError(false)
            setFileData(jsonArray)
            setForm({ ...form, [name]: jsonArray })
          } catch (error: any) {
            setFileError(error)
          }
          break
        case 'Classes':
          try {
            const classesJson = jsonArray as ClassesType[]
            const parsedClassesJson = classesJson.map((classObject) => {
              const studentIdArr = classObject.Students.split(',')
              const parsestudentIdArr = studentIdArr.map((studentId: string) => {
                return studentId.trim()
              })
              const subjectArr = classObject.Subjects.split(',')
              const parseSubjectsArr = studentIdArr.map((studentId: string) => {
                return studentId.trim()
              })
              classObject.Students = parsestudentIdArr
              return classObject
            })
            const json = await ClassesSchema.validateAsync(parsedClassesJson)
            setFileError(false)
            setFileData(parsedClassesJson)
            setForm({ ...form, [name]: json })
          } catch (error: any) {
            setFileError(error)
          }
          break
      }
    }
    reader.readAsText(file)
  }
  return (
    <>
      <h3 className='text-left'>{name}</h3>
      <table className='border-2 w-full my-4'>
        <thead>
          <tr>
            <th onClick={() => setCollapsed(!collapsed)}>{collapsed ? <BsChevronUp /> : <BsChevronDown />}</th>
            {headers.map((name: any) => (
              <th key={name}>{name}</th>
            ))}
            <th>
              <input type='file' accept='.csv' onChange={handleFile} />
            </th>
            <th>
              {fileError && <BsX />}
              {fileData && !fileError && <BsCheck />}
            </th>
            <th
              onClick={() => {
                setFileData(null)
                setForm({ ...form, [name]: null })
              }}
            >
              Remove
            </th>
          </tr>
        </thead>

        {fileData && !collapsed && (
          <tbody>
            {fileData.map((row: any, index: number) => (
              <tr key={index}>
                <td></td>
                {Object.values(row).map((val: any, i: number) => (
                  <td key={i}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </>
  )
}

export default InputTable
