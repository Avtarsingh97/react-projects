import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";


function SignIn({ users }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChanges = (e) => {
    const { name, value } = e.target;

    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const user = users.find((user) => user.email === credentials.email && user.password === credentials.password);

    if (user) {
      localStorage.setItem('username', user.fullName);
      localStorage.setItem('isLoggedIn', 'true');
      toast.success("Sign in Successful!");

      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password.");
    }

    setCredentials({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

  };

  return (
    <>
      <div className='h-screen flex items-center justify-center'>
        <div className='bg-white rounded-xl p-6 w-150'>
          <div className='bg-white rounded-2xl p-6 w-96 border'>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className='flex flex-col items-center gap-2'
            >
              <h1 className='text-3xl font-bold mb-4'>SignIn Form</h1>

              <input
                className='border rounded-lg border-lime-600 px-3 py-3 text-xl w-full'
                type='email'
                placeholder='Enter your email'
                name='email'
                value={credentials.email}
                onChange={handleChanges}
                required
              />

              <input
                className='border rounded-lg border-lime-600 px-3 py-3 text-xl w-full'
                type='password'
                placeholder='Enter your password'
                name='password'
                value={credentials.password}
                onChange={handleChanges}
                required
              />

              <button className='text-xl text-white px-4 py-2 rounded-xl bg-emerald-600 font-semibold mt-5 w-full'>Submit</button>

              <p className='text-sm text-center text-stone-700'>
                By registering, you agree to our{" "}
                <a
                  href=''
                  className='text-blue-800'
                >
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a
                  href=''
                  className='text-blue-800'
                >
                  Privacy Policy
                </a>
              </p>
              <p className='text-blue-800'>
                <Link to='/signup'>Create New Account</Link>
              </p>
              <p className='text-neutral-600 text-right w-full'><Link to="/">Back to Home</Link></p>
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
