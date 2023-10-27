export default function ProfileEdit() {
  return (
    <>
      <div>
      <div className="text-center mt-5 text-2xl font-bold">Edit Profile</div>
        <div className="grid py-5 text-2xl font-medium grid-cols-1 border text-center justify-around rounded-2xl mt-[3rem] max-w-2xl m-auto">
          <div>First Name</div>
          <input className="border p-3 rounded-2xl mx-[5rem]" type="text" autoComplete="no" />
          <div>Last Name</div>
          <input className="border p-3 rounded-2xl mx-[5rem]" type="text" autoComplete="no" />
          <div>Age</div>
          <input className="border p-3 rounded-2xl mx-[5rem]" type="text" autoComplete="no" />
          <div>4</div>
          <input className="border p-3 rounded-2xl mx-[5rem]" type="text" autoComplete="no" />
          <div>5</div>
          <input className="border p-3 rounded-2xl mx-[5rem]" type="text" autoComplete="no" />
          <button className="border my-5 p-3 rounded-2xl mx-[5rem]">Save</button>
        </div>
      </div>
    </>
  );
}
