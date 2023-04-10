import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main className='p-20'>
      <div className='bg-stone-100 w-2/3 m-auto font-mono text-center border border-b-4 border-r-4 border-stone-800 rounded-lg'>
        <div className='my-10 p-20'>
          <p className='text-stone-800 text-2xl py-1'>Hi, I am Tyson!</p>
          <span className='my-1 hover:text-stone-600'><a href='https://github.com/tysonwu' target='blank'>Find me on GitHub</a></span>
        </div>
      </div>
    </main>
  )
}

export default Home
