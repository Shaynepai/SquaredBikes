import Profile from '../assets/user.png'
import Photo from '../assets/skelecat.jpg'
import { Link } from 'react-router-dom';



export default function UserProfileData() {
  return (
    <>
      <div className="h-screen px-[10rem]">
        {/* Hidden */}
        <div className="flex justify-center p-[1rem] invisible">
          HIDDEN AREA
        </div>
        {/* End of Hidden */}
        {/* Content */}
        <div className="grid grid-cols-1  justify-center"></div>


 

<div className="w-full h-[15rem]  border-b-2 ">
 <div className="flex justify-between mx-8 my-[4rem]">
 
 <div className='flex gap-2'>
 <div>
  <img className='w-[5rem] border-4 rounded-full border-black' src={Profile} alt="" />
 </div>
  <div className='my-auto text-3xl font-semibold'> Juan Dela Cruz </div>
  </div>

  <Link to="/LoginPage/Edit" className='flex cursor-pointer hover:shadow-lg hover:border-black border-2 h-fit p-3 rounded-2xl'>
    <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
</svg>
</div>
    <div className='text-2xl font-bold my-auto'>Edit</div>
  </Link>
 </div>
</div>


{/* Photo Grid */}

<div className='grid grid-cols-3'>
{/* Card */}
<div>
    <img className='object-cover object-center w-[50rem] border-white aspect-square rounded-2xl' src={Photo} alt="" />
</div>
{/* Card */}




</div>





        {/* End of Content */}
      </div>
       {/* Hidden */}
       <div className="flex justify-center p-[1rem] invisible">
          HIDDEN AREA
        </div>
        {/* End of Hidden */}
    </>
  );
}
