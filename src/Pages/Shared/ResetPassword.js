import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';
import Alert from './Alert';


const ResetPassword = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handlePassReset = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const success = await sendPasswordResetEmail(email);
        <Alert></Alert>
        if (success) {
            console.log('reset email sent');
            // <Alert></Alert>;
        }
    }

    return (
        <div className='grid justify-center items-center'>

            <h1 className='text-xl font-bold text-center text-red-600 bg-black p-5 mt-2'> Reset Password </h1>
            <form onSubmit={handlePassReset} className='grid justify-center items-center mt-4'>
                <label className='text-center mb-2'> Type Your Email</label>
                <input name='email' type="text" placeholder="Type your email" className="input input-bordered  input-info w-full max-w-xs" />
                <input className='btn btn-primary w-40 mx-auto mt-2' type="submit" value="Reset Password" />
            </form>

        </div>
    );
};

export default ResetPassword;