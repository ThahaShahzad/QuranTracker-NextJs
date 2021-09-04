import { GetStaticProps } from 'next'
import { Box, Button, Heading } from '@chakra-ui/react'
import { Link } from '@/components/custom/index'
import { Select } from '@chakra-ui/react'
import { useMyColors } from 'styles/colors'

const NewAssignment = () => {
  const { bgLight } = useMyColors()
  return (
    <Box
      as='section'
      bg={bgLight}
      shadow='2xl'
      rounded='xl'
      className='hidden sm:block text-center mr-2 ml-5 mb-5 p-1 sm:p-2'
    >
      <Heading className='md:text-4xl'>New Assignment</Heading>
      <form className='flex flex-col items-start gap-4 p-5'>
        <div>
          <label className='mr-2'>Class :</label>
          <Select placeholder='Select option'>
            <option value='volvo'>class 1</option>
            <option value='saab'>class 2</option>
            <option value='mercedes'>class 3</option>
            <option value='audi'>class 4</option>
          </Select>
        </div>
        <div>
          <label className='mr-2'>Student :</label>
          <Select placeholder='Select option'>
            <option value='volvo'>class 1</option>
            <option value='saab'>class 2</option>
            <option value='mercedes'>class 3</option>
            <option value='audi'>class 4</option>
          </Select>
        </div>
        <Link to={'/'} button>
          <Button>Add Assignment</Button>
        </Link>
      </form>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  }
}

export default NewAssignment
