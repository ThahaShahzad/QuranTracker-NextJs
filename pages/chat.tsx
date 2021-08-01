import DashLayout from '@/components/layouts/DashLayout'
import { GetStaticProps } from 'next'

const Chat = () => {
  return (
    <main className='flex justify-center'>
      <h2>Chat</h2>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      data: null
    }
  }
}

Chat.getLayout = DashLayout

export default Chat
