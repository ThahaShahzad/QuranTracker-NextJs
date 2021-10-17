import { useRouter } from 'next/router'
import { Link } from '../../custom/Link'

const ClassBox = () => {
  const { pathname } = useRouter()
  const classes = [
    {
      id: 123,
      name: 'class 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 345,
      name: 'class 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 768,
      name: 'class 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 890,
      name: 'class 4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]

  return (
    <>
      {classes.map((clas) => (
        <Link key={clas.id} type='primary-nl' to={`${pathname}/${clas.id}`}>
          <div className='bg-bg shadow-xl rounded-2xl flex flex-col items-center p-2'>
            <h3>{clas.name}</h3>
            <small>{clas.description}</small>
          </div>
        </Link>
      ))}
    </>
  )
}

export default ClassBox
