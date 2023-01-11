import SvG from '../Assets/MainSVG'

const Main = () => {
  return (
      <div className='w-[100vw] p-0 md:flex block bg-gradient-to-t from-[rgba(255,242,173,0.5)]'>
          <div className='md:w-1/2 w-full flex mt-[20%] justify-center'>
              <h1 className='font-aquire text-[3rem]'>Do it width style</h1>
          </div>

          <div className='md:w-1/2 w-full block'><SvG /></div>
    </div>
  )
}

export default Main