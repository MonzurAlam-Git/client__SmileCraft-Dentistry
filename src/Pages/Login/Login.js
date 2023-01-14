import React from 'react';
import { useForm } from "react-hook-form";

import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../src/firebase.init"
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import UseToken from '../Hooks/UseToken';


const Login = () => {

    const [signInWithGoogle, user_g, loading_g, error_g] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // const { email, password } = data;
        console.log('User Data', data);
        signInWithEmailAndPassword(data.email, data.password)
    }
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let signInError;

    const [token] = UseToken(user || user_g);

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (error || error_g) {
        signInError = <p className='text-red-600 font-bold m-4'>{error?.message || error_g?.message} </p>

    }
    if (loading || loading_g) {
        return <Loading></Loading>
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1 className=' font-bold text-4xl text-center text-red-600'>Sign In </h1>
                <div className='grid justify-center items-center gap-1 mt-10'>
                    {/* email field  */}
                    <label > Email</label>
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
                    <Link className='m-2 text-red-600 font-bold' to="/resetPassword"> Forget Password</Link>
                    <p className='m-2 '> New to Doctors Portal? <Link className='my-1 text-primary font-bold' to="/register"> Create new account</Link> </p>
                    {signInError}

                    < input className='btn btn-primary font-bold mx-auto w-80 ' type="submit" value="Sign In" />
                </div>
            </form>
            <div className="divider w-96 mx-auto font-bold">OR</div>
            <div className='grid items-center justify-center'>
                <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-primary w-80 font-bold "> Google Sign In</button>
            </div>

        </div>


        // <div className='grid items-center justify-center mt-10'>
        //     <div className="hero h-max bg-base-200">
        //         <div className="hero-content flex-col lg:flex-col p-16">
        //             <h1 className=" text-center text-5xl font-bold">Login now!</h1>
        //             {/* input form  */}
        //             <form onSubmit={handleSubmit(onSubmit)}>
        //                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        //                     <div className="card-body">
        //                         {/* email field  */}
        //                         <div className="form-control">
        //                             <label className="label">
        //                                 <span className="label-text">Email</span>
        //                             </label>
        // <input autoComplete="on" {...register("email", {
        //     required: {
        //         value: true,
        //         message: 'Please provide Email correctly '

        //     },
        //     pattern:
        //     {
        //         value: /[a-z0-9]+@[a-z]+\.[a-z]{2, 3}/i
        //     }
        // }
        //                             )}
        //                                 type="email"
        //                                 placeholder="email"
        //                                 className="input input-bordered" />
        //                             {/* error handle  */}
        //                             <label className="label">
        //                                 {errors.email?.type === 'required' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>}
        //                                 {errors.email?.type === 'pattern' && <span className='text-red-500 font-bold ml-8'>{errors.email.message}</span>}
        //                             </label>
        //                         </div>

        //                         {/* password field  */}
        //                         <div className="form-control">
        //                             <label className="label">
        //                                 <span className="label-text">Password</span>
        //                             </label>
        //                             <input autoComplete="on" {...register("password", {
        //                                 required: {
        //                                     value: true,
        //                                     message: 'Please provide password correctly '
        //                                 },

        //                                 minLength: {
        //                                     value: 6,
        //                                     message: "Must be 6 characters or longer"
        //                                 }
        //                             }
        //                             )}

        //                                 type="password"
        //                                 placeholder="password"
        //                                 className="input input-bordered" />
        //                             {/* error handle  */}
        //                             <label className="label">
        //                                 {errors.password?.type === 'required' && <p className='text-red-500 font-bold ml-8' role="alert">{errors.password.message}</p>}
        //                                 {errors.password?.type === 'minLength' && <p className='text-red-500 font-bold ml-8' role="alert">{errors.password.message}</p>}
        //                             </label>
        //                         </div>
        //                         {signInError}

        //                     </div>
        //                 </div>
        //                 <button type="submit">Login</button>
        //                 {/* <input autoComplete="on" className="form-control mt-6 btn btn-primary" value="Login" type="submit" /> */}
        //             </form>
        //         </div>
        //     </div>
        //     <div className="divider">OR</div>
        //     <button onClick={() => signInWithGoogle()} className="btn mx-auto btn-outline btn-primary w-80 font-bold"> Google Sign In</button>
        // </div>


    );
};

export default Login;