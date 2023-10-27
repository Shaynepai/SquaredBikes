import Squared from '../assets/skelecat.jpg'
// import User from '../assets/user.png'

export default function Card() {
  return (
    <>
     <div className='h-screen snap-y'>
     <div className='flex justify-center p-[0.4rem] invisible'>HIDDEN AREA</div>
     {/* Content */}
        <div className="grid grid-cols-1  justify-center">
           
           
           {/* Card */}
            <div className='mx-auto snap-start my-[1rem] shadow-md border rounded-2xl p-3'>
            <div className='flex gap-2 mb-2'>
               <div>
               <img className='object-cover rounded-full w-[3rem] h-[3rem]' src={Squared} alt="" />
               </div>
               <div className='my-auto font-semibold'>
                Shayne Meian Ejercito
               </div>
               
            </div>
            <div>
            <img className='object-cover aspect-square rounded-2xl w-[35rem]' src={Squared} alt="" />
            </div>
            <div>
            <div className='mt-3 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

            </div>
            <div className='font-semibold mb-1'>Comment</div>
          {/* Comments */}
           <div>
                <div className=' border h-[5rem] mb-1 rounded-2xl'></div>

           </div>
            <div className='flex gap-1'>
            <div >
            <img className='border border-black object-fill  rounded-full w-[2.4rem] h-[2rem] ' src={Squared} alt="" />
            </div>
            <input className='border w-full grow rounded-2xl' type="text" placeholder='Comment'/>
            <button className='rounded-full border p-1 cursor-pointer focus:ring-1 focus:ring-black delay-300 ease-in-out duration-150'>Send</button>
            </div>
            </div>
               

            </div>
            {/* End of card */}

 
          {/* Card */}
          <div className='mx-auto snap-start my-[1rem] shadow-md border rounded-2xl p-3'>
            <div className='flex gap-2 mb-2'>
               <div>
               <img className='object-cover rounded-full w-[3rem] h-[3rem]' src={Squared} alt="" />
               </div>
               <div className='my-auto font-semibold'>
                Shayne Meian Ejercito
               </div>
               
            </div>
            <div>
            <img className='object-cover aspect-square rounded-2xl w-[35rem]' src={Squared} alt="" />
            </div>
            <div>
            <div className='mt-3 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

            </div>
            <div className='font-semibold mb-1'>Comment</div>
          {/* Comments */}
           <div>
                <div className=' border h-[5rem] mb-1 rounded-2xl'></div>

           </div>
            <div className='flex gap-1'>
            <div >
            <img className='border border-black object-fill  rounded-full w-[2.4rem] h-[2rem] ' src={Squared} alt="" />
            </div>
            <input className='border w-full grow rounded-2xl' type="text" placeholder='Comment'/>
            <button className='rounded-full border p-1 cursor-pointer focus:ring-1 focus:ring-black delay-300 ease-in-out duration-150'>Send</button>
            </div>
            </div>
               

            </div>
            {/* End of card */}

         {/* Card */}
         <div className='mx-auto my-[1rem] shadow-md border rounded-2xl p-3'>
            <div className='flex gap-2 mb-2'>
               <div>
               <img className='object-cover rounded-full w-[3rem] h-[3rem]' src={Squared} alt="" />
               </div>
               <div className='my-auto font-semibold'>
                Shayne Meian Ejercito
               </div>
               
            </div>
            <div>
            <img className='object-cover aspect-square rounded-2xl w-[35rem]' src={Squared} alt="" />
            </div>
            <div>
            <div className='mt-3 ml-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

            </div>
            <div className='font-semibold mb-1'>Comment</div>
          {/* Comments */}
           <div>
                <div className=' border h-[5rem] mb-1 rounded-2xl'></div>

           </div>
            <div className='flex gap-1'>
            <div >
            <img className='border border-black object-fill  rounded-full w-[2.4rem] h-[2rem] ' src={Squared} alt="" />
            </div>
            <input className='border w-full grow rounded-2xl' type="text" placeholder='Comment'/>
            <button className='rounded-full border p-1 cursor-pointer focus:ring-1 focus:ring-black delay-300 ease-in-out duration-150'>Send</button>
            </div>
            </div>
               

            </div>
            {/* End of card */}



        </div>
        {/* End of Content */}
        <div className='flex justify-center p-[0.5rem] invisible'>HIDDEN AREA</div>
    </div>
   </>
  )
}
