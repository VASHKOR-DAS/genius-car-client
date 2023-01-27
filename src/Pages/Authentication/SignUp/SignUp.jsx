import React from 'react';
import { Link } from 'react-router-dom';
import loginSVG from '../../../assets/images/login/login.svg'
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }

    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row">

                <div className="">
                    <img src={loginSVG} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="mb-5 text-5xl font-bold text-center">Sign Up</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your email" className="input input-bordered" required/>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required/>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white normal-case">Sign Up</button>
                        </div>
                    </form>

                    <div className='text-center mb-10'>
                        <p className="mb-5 font-bold">Or Sign In with</p>
                        <div className="mb-5 flex gap-x-3 justify-center text-5xl">

                            <RiFacebookFill className='cursor-pointer hover:bg-base-300 text-blue-600 rounded-full bg-gray-100 p-2 md:p-3' />

                            <RiLinkedinFill className='cursor-pointer hover:bg-base-300 text-blue-500 rounded-full bg-gray-100 p-2 md:p-3' />

                            <FcGoogle className='cursor-pointer hover:bg-base-300 text-blue-500 rounded-full bg-gray-100 p-2 md:p-3' />
                        </div>

                        <span className="font-bold text-gray-500">
                            Already have an account? <Link className='text-secondary' to='/login'>Login</Link>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;