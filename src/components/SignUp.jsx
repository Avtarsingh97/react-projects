import React, { useState, useEffect } from "react";
import {ToastContainer, toast} from 'react-toastify';
import { Link } from 'react-router-dom';


function SignUp({users, setUsers}) {
    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    
    
    const [error, setError] = useState('')
    
    
    const handleChanges = (e)=>{
        const {name,value} = e.target
        
        
        setFormData((prevData)=>({
          ...prevData,
          [name]:value
        }))
        
        
    }

    useEffect(() => {
        console.log("Updated Users: ", users);
        
      }, [users]);
    
    
    const submitHandler = (e)=>{
        e.preventDefault();
        
        if(formData.password.length < 8){
          setError('Password must be 8 characters long')
          return;
        };
        if(formData.password !== formData.confirmPassword){
          setError('Password & Confirm Password must be same')
          return;
        };
        if(!/[!@#$%^&*()<>,."]/.test(formData.password)){
          setError('Must contain any special character (!@#$%^&*()<>,.")');
          return;
        };
        if(!/[A-Z]/.test(formData.password)){
          setError('Must contain atleast one capital letter');
          return;
        };
    
        setUsers((prevUser)=>[...prevUser,{
            fullName:formData.fullName,
            email:formData.email,
            password:formData.password
          }]
        
        );
    
        setError('');
        setFormData({
          fullName:'',
          email:'',
          password:'',
          confirmPassword:''
        });
        
        toast.success('Login Successful!', {
            autoClose: 5000,
          });

        
    }


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
              <h1 className='text-3xl font-bold mb-4'>SignUp Form</h1>

              <input
                className='border rounded-lg border-lime-600 px-3 py-3 text-xl w-full'
                type='text'
                placeholder='Enter name here'
                name='fullName'
                value={formData.fullName}
                onChange={handleChanges}
                required
              />

              <input
                className='border rounded-lg border-lime-600 px-3 py-3 text-xl w-full'
                type='email'
                placeholder='Enter your email'
                name='email'
                value={formData.email}
                onChange={handleChanges}
                required
              />

              <input
                className='border rounded-lg border-lime-600 px-3 py-3 text-xl w-full'
                type='password'
                placeholder='Enter your password'
                name='password'
                value={formData.password}
                onChange={handleChanges}
                required
              />

              <input
                className='border rounded-lg border-lime-600 px-3 py-3 text-xl w-full'
                type='password'
                placeholder='Confirm password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChanges}
                required
              />

              {error && <p className='text-red-600 text-sm w-full'>*{error}</p>}

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
              <p className='text-blue-800'><Link to="/signin">Login Now</Link></p>
              <p className='text-neutral-600 text-right w-full'><Link to="/">Back to Home</Link></p>
            </form>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
