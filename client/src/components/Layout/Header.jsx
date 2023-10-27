import Squaredbikes from '/src/assets/Squaredbikes.png'


export default function Header() {
  return (
<>
<div className="flex fixed grow w-full bg-white justify-between h-[3rem] border-b ">

{/* Left side */}
<div className="my-auto ml-5">
<div>
<img className='w-[5.1rem]' src={Squaredbikes} alt="" />
</div>
</div>
{/* End of Left side */}


{/* Right side */}
<div className="flex gap-1 my-auto mr-5">
    
    <div className="border rounded-3xl p-1 my-auto">Dark mode</div>

    <div className="border border-black rounded-3xl p-1 my-auto">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
</svg>

      </div>
    </div>
</div>
{/* End of Right side */}


</div>
</>
  )
}
