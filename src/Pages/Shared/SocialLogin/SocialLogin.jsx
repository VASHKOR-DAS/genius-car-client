import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { setAuthToken } from '../../../Jwt token/auth';

const SocialLogin = () => {

    const { signInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                // jwt token
                setAuthToken(user);
            })
            .catch(err => console.error(err));
    }


    return (
        <div>
            <FcGoogle onClick={handleGoogleSignIn} className='cursor-pointer hover:bg-base-300 text-blue-500 rounded-full bg-gray-100 p-2 md:p-3' />
        </div>
    );
};

export default SocialLogin;