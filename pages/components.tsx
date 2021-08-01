import Head from 'next/head'
import { BiArrowBack } from 'react-icons/bi'
import { Badge, Button } from '../components/custom'
import { Link } from '../components/custom'

const Components = () => {
  return (
    <div className='dark bg-normal p-8 h-screen w-screen'>
      <div className='flex flex-col p-4 bg-inverse h-full overflow-auto'>
        <Head>
          <title>Css</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Link to='/'>
          <a>
            <BiArrowBack className='text-inverse hover:scale-150 m-2 transform transition duration-200 absolute left-0 top-0 w-8 h-8' />
          </a>
        </Link>
        <div className='flex flex-col gap-4 border-4 w-full p-5'>
          <h1 className='text-center'>Colors</h1>
          <hr className='mb-4' />
          <div className='flex justify-evenly'>
            <div>
              <h3>Light Mode (default)</h3>
              <p>
                Primary : #00b3ad <Badge color='bg-primary' />
              </p>
              <p>
                Font Color : #121212 <Badge color='bg-normal' />
              </p>
              <p>
                Background Color : #fcfcfc <small>the background</small>
              </p>
            </div>
            <div>
              <h3>Dark Mode</h3>
              <p>
                Primary : #1afff7 <Badge color='bg-primary-d' />
              </p>
              <p>
                Font Color : #fcfcfc <small>the background</small>
              </p>
              <p>
                Background Color : #121212 <Badge color='bg-normal' />
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-4 border-4 w-full p-5'>
          <h1 className='text-center'>Typography</h1>
          <hr className='mb-4' />
          <h1>
            QuranTracker<Badge>h1</Badge>
          </h1>
          <h2>
            QuranTracker<Badge>h2</Badge>
          </h2>
          <h3>
            QuranTracker<Badge>h3</Badge>
          </h3>
          <h4>
            QuranTracker<Badge>h4</Badge>
          </h4>
          <div>
            QuranTracker<Badge>div</Badge>
          </div>
          <p>
            QuranTracker<Badge>p</Badge>
          </p>
          <strong>
            QuranTracker<Badge>strong</Badge>
          </strong>
          <p>
            <small>QuranTracker</small>
            <Badge>small</Badge>
          </p>
        </div>
        <div className='flex flex-col gap-4 border-4 w-full p-5'>
          <div className='flex justify-around'>
            <h1 className='text-center'>Buttons</h1>
            <div className='flex flex-col gap-2 rounded-lg p-2 bg-gray-400'>
              <p className='text-center mb-2'>Props</p>
              <code>
                type?: &apos;primary&apos; | &apos;primary-d&apos; | &apos;primary-i&apos; | &apos;primary-i-d&apos;
              </code>
              <code>shape?: &apos;sqaure&apos; | &apos;round&apos; | &apos;circle&apos;</code>
              <code>size?: &apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;</code>
            </div>
            <div className='flex flex-col gap-2 rounded-lg p-2 bg-gray-400'>
              <p className='text-center mb-2'>Default</p>
              <code> type = &apos;primary&apos;</code>
              <code>size = &apos;md&apos;</code>
              <code>shape = &apos;round&apos;</code>
            </div>
          </div>

          <hr className='mb-4' />
          <div className='flex justify-start gap-4 p-5'>
            <div className='flex flex-col gap-4 items-center'>
              {[1, 2, 3].map((i) => (
                <Button key={i} size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary
                </Button>
              ))}
            </div>
            <div className='flex flex-col gap-4 items-center'>
              {[1, 2, 3].map((i) => (
                <Button key={i} shape='sqaure' size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary
                </Button>
              ))}
            </div>
            <div className='flex flex-col gap-4 items-center'>
              {[1, 2, 3].map((i) => (
                <Button key={i} shape='circle' size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary
                </Button>
              ))}
            </div>
            <div className='flex flex-col gap-4 items-center ml-4'>
              {[1, 2, 3].map((i) => (
                <Button key={i} type='primary-d' size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary-d
                </Button>
              ))}
            </div>
            <div className='flex flex-col gap-3 items-center'>
              {[1, 2, 3].map((i) => (
                <Button key={i} type='primary-i' size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary-i
                </Button>
              ))}
            </div>
            <div className='flex flex-col gap-3 items-center'>
              {[1, 2, 3].map((i) => (
                <Button key={i} type='primary-i-d' size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary-i-d
                </Button>
              ))}
            </div>
          </div>
        </div>
        badge Dropdowns List group
        <div className='flex flex-col gap-4 border-4 w-full p-5'>
          <h1 className='text-center'>Links</h1>
          <hr className='mb-4' />
          <div className='flex justify-start gap-4 p-5'>
            <div className='flex flex-col gap-4 items-center'>
              {[1, 2, 3].map((i) => (
                <Link to='/components' key={i} size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary
                </Link>
              ))}
            </div>
            <div className='flex flex-col gap-4 items-center'>
              {[1, 2, 3].map((i) => (
                <Link to='/components' type='primary-nl' key={i} size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary
                </Link>
              ))}
            </div>
            <div className='flex flex-col gap-4 items-center'>
              {[1, 2, 3].map((i) => (
                <Link to='/components' type='primary-i' key={i} size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary
                </Link>
              ))}
            </div>
            <div className='flex flex-col gap-4 items-center'>
              {[1, 2, 3].map((i) => (
                <Link to='/components' type='primary-i-nl' key={i} size={i === 1 ? 'sm' : i === 2 ? 'md' : 'lg'}>
                  Primary
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components
