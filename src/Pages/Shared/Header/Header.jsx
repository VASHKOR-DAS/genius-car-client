import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
        localStorage.removeItem('genius-token');
    }

    const menuItems = <>
        {
            user?.email
            && <h2>Welcome, {user.email}</h2>
        }

        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/'>About</Link></li>
        <li className='font-semibold'><Link to='/'>Services</Link></li>
        {
            user?.email &&
            <li className='font-semibold'><Link to='/orders'>Orders</Link></li>
        }
        <li className='font-semibold'><Link to='/'>Blog</Link></li>
        <li className='font-semibold'><Link to='/'>Contact</Link></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/'>
                    <img className='object-cover h-11 md:h-12 lg:h-16' src={logo} alt="logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email
                        ? <button onClick={handleLogOut} className="mr-2 btn btn-secondary normal-case">Log out</button>
                        :
                        <a href='/login' className="mr-2 btn btn-secondary normal-case">Login</a>
                }

                <a href='/' className="btn btn-outline btn-secondary normal-case ">Appointment</a>
            </div>
        </div>
    );
};

export default Header;