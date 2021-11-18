// import { GetStaticProps } from 'next'
import { Button, Link } from 'components/custom/index'

const NewAssignment = () => {
  return (
    <section className='hidden sm:block text-center bg-bg shadow-xl rounded-2xl mr-2 ml-5 mb-5 p-1 sm:p-2'>
      <h4 className='md:text-4xl p-4'>New Assignment</h4>
      <form className='flex flex-col items-start gap-4 p-5'>
        <div>
          <label className='mr-2'>Class :</label>
          <select name='classes' id='classes'>
            <option value='volvo'>class 1</option>
            <option value='saab'>class 2</option>
            <option value='mercedes'>class 3</option>
            <option value='audi'>class 4</option>
          </select>
        </div>
        <div>
          <label className='mr-2'>Student :</label>
          <select name='classes' id='classes'>
            <option value='volvo'>class 1</option>
            <option value='saab'>class 2</option>
            <option value='mercedes'>class 3</option>
            <option value='audi'>class 4</option>
          </select>
        </div>
        <Link to={'/'} button>
          <Button className='self-center'>Add Assignment</Button>
        </Link>
      </form>
    </section>
  )
}

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   return {
//     props: {
//       data: null
//     }
//   }
// }

export default NewAssignment
