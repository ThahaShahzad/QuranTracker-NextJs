import { GetStaticProps } from 'next'

const Grading = () => {
  return <div>Grading</div>
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  }
}

export default Grading
