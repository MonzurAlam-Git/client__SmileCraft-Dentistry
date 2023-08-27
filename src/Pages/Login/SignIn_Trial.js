import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignIn = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-flow-row justify-center items-center bg-white-500 p-12 m-24">
          <p className="text-center text-xl font-bold">Log In</p>
          <div className="grid grid-flow-row">
            {/* email input  */}
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Email?</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered input-md w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please provide email correctly",
                  },

                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i,
                    message: "Please provide email correctly ",
                  },
                })}
              />
              {/* error handle  */}
              <label className="label">
                {errors.email?.type === "required" && (
                  <p className="text-red-500 font-bold ml-8" role="alert">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "minLength" && (
                  <p className="text-red-500 font-bold ml-8" role="alert">
                    {errors.email.message}
                  </p>
                )}
              </label>
            </div>
            {/* password input */}
            <div className="form-control  ">
              <label className="label">
                <span className="label-text">Password?</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please provide password correctly ",
                  },

                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Type here"
                className="input input-bordered w-80 "
              />
              {/* error handle  */}
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-bold ml-8" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 font-bold ml-8" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            <Link className="m-2 text-red-600" to="">
              {" "}
              Forget Password
            </Link>
            <p className="m-2">
              {" "}
              New to SmileCraft Dentistry ?{" "}
              <Link className="my-1 text-primary" to="">
                {" "}
                Create new account
              </Link>{" "}
            </p>
            <input className="btn my-4" type="submit" value="Submit" />
          </div>
        </div>
      </form>
      <div className="divider">OR</div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn mx-auto btn-outline btn-primary w-80 font-bold"
      >
        {" "}
        Google Sign In
      </button>
    </div>
  );
};

export default SignIn;
