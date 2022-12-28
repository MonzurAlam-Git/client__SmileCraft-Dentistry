import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Register = () => {
    const [signInWithGoogle, user_g, loading_g, error_g] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // formState: { errors },
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [updateProfile, updating, error_update] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, error_verify] = useSendEmailVerification(
        auth
    );

    const navigate = useNavigate('');

    const onSubmit = async (data) => {
        const { name, email, password } = data;
        console.log('User Data', data);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        const verifyEmail = await sendEmailVerification();
        if (verifyEmail) {
            console.log("email verification sent");
        }
        console.log("update done");
        await navigate('/appointment')
    }

    let signInError;

    if (user || user_g) {
        console.log(user)
    }
    if (error || error_g || error_update) {
        signInError = <p className='text-red-600 font-bold m-4'>{error?.message || error_g?.message} </p>

    }
    if (loading || loading_g || updating) {
        return <Loading></Loading>
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' font-bold text-4xl text-center text-red-600'>Sign Up</h1>
                <div className='grid justify-center items-center gap-1 mt-10'>
                    {/* Name field  */}

                    <label> Name</label>
                    <input autoComplete="on" type="text" placeholder="Type Your name" className="input input-bordered w-full max-w-xs"
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: 'Please provide Name '
                                }
                            }
                        )}
                    />
                    {/* Name Field error  */}
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='text-red-500 font-bold ml-8'>{errors.name.message}</span>}
                        {/* {errors.email?.type === 'pattern' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>
                        } */}
                    </label>

                    {/* email field  */}
                    <label> Email</label>
                    <input autoComplete="on" type="text" placeholder="Type Your Email" className="input input-bordered w-full max-w-xs"
                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: 'Please provide Email correctly '
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]/i,
                                    message: 'Please provide Email correctly '
                                }
                            }
                        )}
                    />
                    {/* email error  */}
                    <label className="label">
                        {errors.email?.type === 'required' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>}
                    </label>

                    {/* passsword field  */}
                    <label > Password</label>
                    <input autoComplete="on" {...register("password",

                        {
                            required: {
                                value: true, message: 'Please provide password correctly '
                            },
                            minLength: {
                                value: 6, message: "Must be 6 characters or longer"
                            }
                        }
                    )}
                        type="password" placeholder="Type Your Password" className="input input-bordered w-full max-w-xs" />

                    {/* password error  */}
                    <label className="label">
                        {errors.password?.type === 'required' && <span className='text-red-500 font-bold ml-8'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='text-red-500 font-bold ml-8'>{errors.password.message}</span>}
                    </label>
                    <Link className='m-2 text-red-600 font-bold' to=""> Forget Password</Link>
                    <p className='m-2'> Already Have An Account? Click on the <Link className='my-1 text-primary font-bold' to="/login"> Sign In</Link> </p>
                    {signInError}

                    < input className='btn btn-primary font-bold mx-auto w-80 ' type="submit" value="Sign Up" />
                </div>
            </form>
            <div className="divider w-96 mx-auto font-bold">OR</div>
            <div className='grid items-center justify-center'>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-80 font-bold "> Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;