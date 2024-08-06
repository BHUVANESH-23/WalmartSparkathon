import React from 'react';
import logo from '../assets/walmartLogo.png';
import './NewUser.css';

const NewUser = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center pt-11">
                <img src={logo} alt="Walmart Logo" className="max-w-full h-auto pb-5" />
                <div className="max-w-full h-auto">
                    <p className="font-semibold text-lg pb-9">Sign in or create your account</p>
                </div>
                <div className="max-w-full h-auto">
                    <p className="fontWeight">Not sure if you have an account?</p>
                </div>
                <div className="max-w-full h-auto">
                    <p className="fontWeight pb-8">Enter your email and we'll check for you.</p>
                </div>
            </div>
            <div className="max-w-full h-auto mx-auto my-0 text-center w-80">
                <p className='-ml-64 font-bold text-sm pb-1'>Email Address</p>
                <div className='bg-white shadow-inner border border-gray-400 flex relative h-12 rounded -ml-5'>
                    <input
                        type='email'
                        autoComplete='email'
                        name='email address'
                        required
                        className="block mx-auto inputBox border-black-300 p-3 hover:border-gray-400 focus:border-gray-800 focus:border-5"
                    />
                </div>
            </div>
            <div className="max-w-full h-auto mx-auto my-0 text-center w-[340px]">
                <button className='mt-5 w-full background-blue border-black h-10 rounded-full -ml-5'>
                    <p className='text-white font-medium'>Continue</p>
                </button>
            </div>
            <div className='flex flex-col mt-5 -ml-5'>
                <p className='fontWeight mx-auto my-0 text-center '>Securing your personal information is our priority.</p>
                <p className='fontWeight mx-auto my-0 text-left float-left '>See our privacy measures.</p>
            </div>
        </>
    );
}

export default NewUser;
