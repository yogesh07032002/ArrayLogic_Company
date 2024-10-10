import banner from '../../public/Banner.png'

function Banner() {
  return (
   <>
    <div className="max-w-screen-2xl container max-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
    <div  className='w-full md:w-1/2 mt-12 md:mt-36' >
        <div className='space-y-6 mt-5'>
            <h1 className=' text-xl  md:text-4xl font-bold '>
        Accelerate your growth trajectory with <span className='text-orange-600'>LiftLogic’s</span> innovative <span className='text-orange-600'>IT Commandos.</span>
        </h1></div>
        <div className='mt-8'>
            <button className="btn bg-red-500 text-white ">Get In Touch</button>
        </div>
    </div>
    <div className='w-full md:w-1/2 ' >
    <img src={banner} className='w-92 h-92'  alt='Hey WE Are LiftLogic'></img>
    </div>
    </div>
   </>
  )
}

export default Banner;
