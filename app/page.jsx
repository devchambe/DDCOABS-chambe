import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-teal-600 to-blue-700 h-screen lg:px-16 px-10 py-5'>
      <div className="flex justify-between items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={120}
          className='mix-blend-screen'
        />
        <div className="flex items-center justify-center gap-4">
          <Link href="/signup" className="text-white text-sm hover:bg-slate-50 hover:bg-opacity-20 rounded-md px-2 py-1">Sign Up</Link>
          <Link href="/login" className="text-white text-sm hover:bg-slate-50 hover:bg-opacity-20 rounded-md px-2 py-1">Login</Link>
        </div>
      </div>

      <div className="w-full overflow-y-auto py-2 lg:flex lg:items-center justify-between">
      <div className="lg:flex-1 p-4">
        <h1 className="text-white text-[4em] leading-[1.2em] font-extrabold">Your best life begins with a smile.</h1> 
      </div>      


      </div>
      <div className="absolute left-0 bottom-0 w-screen">
        {/* <Footer/> */}
        <div className="bg-black bg-opacity-20 w-full py-6 lg:px-16 px-10 text-white border-t-3 border-slate-50 ">
          <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 max-lg:h-[8em] max-lg:overflow-y-auto">
            <div className="col-span-1 px-4 max-lg:py-3">
              <Image src="/dentFixLogo.png" alt="icons" width={30} height={30} className='max-lg:hidden mb-3'/>
              <h1 className='text-white font-extrabold text-[0.9em] lg:text-[1.2em]'>Lorem Ipsum</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repudiandae saepe dolor at tenetur, repellat libero est, corporis rerum similique laudantium ut architecto qui. Ratione voluptate excepturi sed harum expedita.
              </p>
            </div>
            <div className="col-span-1 lg:border-l px-4 border-slate-50 max-lg:border-t max-lg:py-3">
              <Image src="/dentFixLogo.png" alt="icons" width={30} height={30} className='max-lg:hidden mb-3'/>
              <h1 className='text-white font-extrabold text-[0.9em] lg:text-[1.2em]'>Lorem Ipsum</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repudiandae saepe dolor at tenetur, repellat libero est, corporis rerum similique laudantium ut architecto qui. Ratione voluptate excepturi sed harum expedita.
              </p>
            </div>
            <div className="col-span-1 lg:border-l px-4 border-slate-50 max-lg:border-t max-lg:py-3">
              <Image src="/dentFixLogo.png" alt="icons" width={30} height={30} className='max-lg:hidden mb-3'/>
              <h1 className='text-white font-extrabold text-[0.9em] lg:text-[1.2em]'>Lorem Ipsum</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repudiandae saepe dolor at tenetur, repellat libero est, corporis rerum similique laudantium ut architecto qui. Ratione voluptate excepturi sed harum expedita.
              </p>
            </div>
            <div className="col-span-1 lg:border-l px-4 border-slate-50 max-lg:border-t max-lg:py-3">
              <Image src="/dentFixLogo.png" alt="icons" width={30} height={30} className='max-lg:hidden mb-3'/>
              <h1 className='text-white font-extrabold text-[0.9em] lg:text-[1.2em]'>Lorem Ipsum</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repudiandae saepe dolor at tenetur, repellat libero est, corporis rerum similique laudantium ut architecto qui. Ratione voluptate excepturi sed harum expedita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;