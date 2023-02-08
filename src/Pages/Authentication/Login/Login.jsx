import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginSVG from '../../../assets/images/login/login.svg'
import './Login.css'
import { RiFacebookFill, RiLinkedinFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();

    // right route setup
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;

                // for jwt
                const currentUser = {
                    email: user.email
                }
                console.log(currentUser);

                // get jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        /*
                        ata backend a hit kore kina tar console a dekhbo
                        Genius car service running on 5000
                        { email: 'web@ph.com' } 
                        */
                       console.log(data); // ai data er moddhe 2ta property ase email, token. akhon ai token ta localStorage a set korbo
                       localStorage.setItem('genius-token', data.token);


                    })





                // reset from after login
                form.reset();
                //user successfully login hoye gele take / route a niye jabe
                // navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })

    }


    return (
        <div className="hero mt-10">
            <div className="hero-content flex-col lg:flex-row">

                <div className="">
                    <img src={loginSVG} alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="mb-5 text-5xl font-bold text-center">Login</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Your email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Your password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-error text-white normal-case">Login</button>
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
                            New on user? <Link className='text-secondary' to='/signup'>Sign Up</Link>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;