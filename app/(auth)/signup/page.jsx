"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OperatingHours from '@/app/(components)/(global)/OperatingHours'
import { useRouter } from 'next/navigation'

const Signup = () => {

    const startingUser = {
      fullname: "",
      email: "",
      address: "",
      number: "",
      sex: "",
      password: "",
      cpass: "",
      role: "Client"
    };

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    
    const passError = (<p className='flex gap-2 items-center font-semibold text-red-400 text-sm'> Passowrd and Confirm Password DID NOT MATCH! </p>)
    const passLength = (<p className='flex gap-2 items-center font-semibold text-red-400 text-sm'> Passowrd must be at least 8 characters! </p>)

    const [formData, setFormData] = useState(startingUser);
    const [errorPass, setErrorPass] = useState(false);
    const [errorLength, setPassLength] = useState(false);
    const route = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(formData.password.length >= 8){
            console.log(formData.password, " RUN ", formData.cpass);
            if(formData.password === formData.cpass){
              try {
          
                await fetch("/api/Signup", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ formData }),
                });
      
                console.log("SUBMITTED");
                  
              } catch (error) {
                  throw new Error("FAILED!");
              }
              
              route.refresh();
              route.push("/login");

              setErrorPass(false);
            } else {
              setErrorPass(true);
            }
            setPassLength(false);
        }
        else {
          setPassLength(true);
        }
    }

  return (
    <div className='lg:flex px-10 md:px-20'>
      <div className="bg-white bg-opacity-90 xl:w-1/3 lg:w-1/2 shadow-md rounded-b-3xl h-full">
        {/* blue container */}
        <div className="bg-gradient-to-b from-teal-600 to-blue-700 flex justify-center items-center py-8 rounded-b-[70%]">
            <Image 
                src="/logo.png"
                alt="DentFix Logo"
                width={200}
                height={200}
                className='mix-blend-screen'
            />
        </div>
        {/* login form */}
          <div className="py-5 px-8">
            <form className='' method = "POST" onSubmit={handleSubmit}>
              <div className='mb-4' >
              <label for="" className='flex gap-2 items-center font-semibold text-gray-400 text-sm'>
                Full Name
              </label>
              <input type="text" name="fullname" id="name" className='focus:outline-blue-700 mb-3 mt-2 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400' placeholder='Enter your full name' value = {formData.fullname} onChange={handleChange} required/>
              
              <label for="" className='flex gap-2 items-center font-semibold text-gray-400 text-sm'>
                Email Address
              </label>
              <input type="email" name="email" id="email" className='focus:outline-blue-700 mb-3 mt-2 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400' placeholder='Enter your email address' value = {formData.email} onChange={handleChange} required/>

              <label for="" className='flex gap-2 items-center font-semibold text-gray-400 text-sm'>
                Address
              </label>
              <input type="text" name="address" id="address" className='focus:outline-blue-700 mb-3 mt-2 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400' placeholder='Enter your email address' value = {formData.address} onChange={handleChange} required/>

              <label for="" className='flex gap-2 items-center font-semibold text-gray-400 text-sm'>
                Mobile Number
              </label>
              <input type="text" name="number" id="mnum" className='focus:outline-blue-700 mb-3 mt-2 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400' placeholder='Enter your mobile number' value = {formData.number} onChange={handleChange} required/>

              <div className="flex items-center mb-4">
                <label for="" className='flex gap-2 items-center font-semibold text-gray-400 text-sm'>
                  Sex
                </label>
                <div className="mb-[0.125rem] mr-4 flex items-center min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_0px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-blue-700 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.65em] checked:after:w-[0.65em] checked:after:rounded-full checked:after:border-blue-700 checked:after:bg-blue-700 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_10px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_10px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-700 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_10px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="radio"
                    name="sex"
                    id="sex1"
                    value= "Male" onChange={handleChange} checked={formData.sex == "Male"} required/>
                  <label
                    className="mt-px text-sm text-gray-400 inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="sex1"
                    >Male</label>
                </div>
                
                <div className="mb-[0.125rem] mr-4 flex items-center min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left ml-[1.5rem] mr-1 mt-0.5 h-4 w-4 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-3 before:w-3 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_0px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-3 after:w-3 after:rounded-full after:content-[''] checked:border-blue-700 checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.65em] checked:after:w-[0.65em] checked:after:rounded-full checked:after:border-blue-700 checked:after:bg-blue-700 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_10px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_10px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-blue-700 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_10px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                    type="radio"
                    name="sex"
                    id="sex2"
                    value="Female" onChange={handleChange} checked={formData.sex == "Female"}/>
                  <label
                    className="mt-px text-sm text-gray-400 inline-block pl-[0.15rem] hover:cursor-pointer"
                    for="sex2"
                    >Female</label>
                </div>
              </div>


              <div className="grid grid-cols-2 gap-4">
                <div>
                <label for="" className='flex gap-2 items-center font-semibold text-gray-400 text-sm'>
                  Password
                </label>
                <input type="password" name="password" id="pass" className='focus:outline-blue-700  mb-3 mt-1 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400' placeholder='••••••••' value = {formData.password} onChange={handleChange} error={errorLength ? true : false} required/>
                {errorLength && passLength}
                </div>
                <div>
                <label for="" className='flex gap-2 items-center font-semibold text-gray-400 text-sm'>
                  Confirm Password
                </label>
                <input type="password" name="cpass" id="cpass" className='focus:outline-blue-700  mb-3 mt-1 border border-slate-300 w-full bg-transparent py-2 px-3 rounded-md text-sm placeholder:text-slate-400' placeholder='••••••••' value = {formData.cpass} onChange={handleChange} error={errorPass ? true : false} required/>
                {errorPass && passError}
                </div>
              </div>
              </div>

              <div className="flex items-center mb-2">
                <input
                  className="mr-[6px] mt-[0.15rem] h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-700 checked:bg-blue-700 checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent "
                  type="checkbox"
                  value=""
                  id="checkbox" />
                <label
                  className="inline-block pl-[0.15rem] text-[0.8em] hover:cursor-pointer text-gray-400"
                  for="checkboxDefault">
                  I agree to the <Link href="/"><span className='text-blue-700 hover:underline'>Terms & Conditions</span></Link>
                </label>
              </div>

              <hr className='mb-2'/>
              <div className='flex justify-between items-center'>
                <Link href="/login" className='text-gray-400 text-[0.8em]'>Already have an account?<span className='text-blue-700 hover:underline ml-1'>Login Here!</span></Link>
                <input type="submit" value = "Submit" className='text-white px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-800'/>
              </div>
            </form>
            <hr className='my-4'/>
          </div>
      </div>
      <div className="lg:w-1/2 xl:p-20 lg:p-15 p-10 text-white border-opacity-20">
        <OperatingHours/>
      </div>
    </div>
  )
}

export default Signup

