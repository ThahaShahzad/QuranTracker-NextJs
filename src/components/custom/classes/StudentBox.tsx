import { useRouter } from 'next/router'
import { Link } from '../Link'

const StudentBox = () => {
  const { asPath } = useRouter()
  const students = [
    {
      id: 1,
      name: 'student 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      name: 'student 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 3,
      name: 'student 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 4,
      name: 'student 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  return (
    <>
      {students.map((student) => (
        <Link key={student.id} button type='primary-nl' to={`${asPath}/${student.id}`}>
          <div className='bg-bg shadow-xl rounded-2xl flex flex-col items-center p-2'>
            <h4>{student.name}</h4>
            {/* <small>{student.description}</small> */}
          </div>
        </Link>
      ))}
    </>
  )
}

export default StudentBox
