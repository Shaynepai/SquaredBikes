/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const [userForm, setUserForm] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    if (userForm.Password !== userForm.ConfirmPassword){
      alert("Password does not match.");
      return;
    }
  }


  return (
    <>
      <div className="grid grid-cols-1 text-center mt-[10rem]">
        <h1 className="-mt-[5rem] text-4xl font-bold">Sign Up</h1>

        <div className="justify-around p-5 w-[28rem] h-[45rem] border rounded-2xl mx-auto text-xl font-semibold shadow-md">
          <h1 className="mt-[1rem] mb-3">First name</h1>
          <input
            className=" rounded-2xl border w-full p-3 hover:py-4 hover:px-4 hover:-mt-1 duration-300 ease-in-out focus:ring-0 focus:outline-rose-500 "
            type="text"
            placeholder="First Name"
            name="Firstname"
            onChange={handleInputChange}
            required
          />

          <h1 className="mt-[1rem] mb-3">Last name</h1>
          <input
            className=" rounded-2xl border w-full p-3 hover:py-4 hover:px-4 hover:-mt-1 duration-300 ease-in-out focus:ring-0 focus:outline-rose-500 "
            type="text"
            placeholder="Last name"
            name="Lastname"
            onChange={handleInputChange}
            required
          />

          <h1 className="mt-[1rem] mb-3">Email</h1>
          <input
            className=" rounded-2xl border w-full p-3 hover:py-4 hover:px-4 hover:-mt-1 duration-300 ease-in-out focus:ring-0 focus:outline-rose-500 "
            type="email"
            placeholder="Email"
            name="Email"
            onChange={handleInputChange}
            required
          />

          <h1 className="mt-3 mb-3">Password</h1>
          <input
            className="mb-3 rounded-2xl border w-full p-3 hover:py-4 hover:px-4 hover:-mt-1 duration-300 ease-in-out focus:ring-0 focus:outline-rose-500 "
            type="password"
            placeholder="Password"
            name="Password"
            onChange={handleInputChange}
            required
          />

          <h1 className="mt-3 mb-3">Confirm password</h1>
          <input
            className="mb-3 rounded-2xl border w-full p-3 hover:py-4 hover:px-4 hover:-mt-1 duration-300 ease-in-out focus:ring-0 focus:outline-rose-500 "
            type="password"
            placeholder="Confirm password"
            name="ConfirmPassword"
            onChange={handleInputChange}
            required
          />

          <button
           onClick={handleSubmit}
            className="focus:outline mt-5 hover:mt-3 duration-300 ease-in-out hover:mb-2 hover:text-2xl rounded-2xl border w-full p-3 bg-rose-500 text-white hover:bg-rose-600"
          >
            <h1>Sign up</h1>
          </button>

          <div className="flex gap-1 justify-center mt-3">
            <div>
              <p>Already signed up? </p>
            </div>

            <Link
              to="/LoginPage"
              className="cursor-pointer duration-300 ease-in-out hover:font-bold underline hover:text-2xl hover:-mt-1"
            >
              Login now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
