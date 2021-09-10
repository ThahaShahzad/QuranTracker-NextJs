import { GetStaticProps } from 'next'

const Students = () => {
  return <div>Students</div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  }
}

export default Students
