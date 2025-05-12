import { loginUser } from "@/store/features/user/userActions";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data)).then((res) => {
      if (res?.payload?.status == 200) {
        reset();
        navigate("/");
      }
    });
  };

  return (
    <form
      className="flex flex-col gap-4 py-[10%] px-4 card"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border rounded p-2"
          {...register("email", {
            required: "Email is Required",
            pattern: {
              value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
              message: "Enter Valid Email Address",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border rounded p-2"
          {...register("password", {
            required: "Password is Required",
            minLength: {
              value: 6,
              message: "Password Must be Atleast 6 Chacater",
            },
            maxLength: {
              value: 20,
              message: "Password Must be less then 20 Character",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>
      <button type="submit" className="bg-purple-900 text-white  py-2 rounded">
        Login
      </button>
    </form>
  );
}

export default Login;
