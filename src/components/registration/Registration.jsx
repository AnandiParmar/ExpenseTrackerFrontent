import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { registerUser } from "@/store/features/user/userActions";

function Registration() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const password = watch("password");

  const onSubmit = (data) => {
    dispatch(registerUser(data)).then((res) =>
      res?.payload?.status != 400 ? reset() : ""
    );
  };
  return (
    <form
      className="flex flex-col gap-3 p-4 py-[10px] card mb-[10%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          type="name"
          id="name"
          className="border rounded p-2"
          {...register("name", {
            required: "Name is Required",
            minLength: {
              value: 3,
              message: "Name Must be Greater Then 3 character",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
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
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <input
          type="number"
          id="phone"
          className="border rounded p-2"
          {...register("phone", {
            required: "Phone Number Is Required",
            minLength: { value: 10, message: "Phone no Must be 10 Digit" },
            maxLength: { value: 10, message: "Phone no Must be 10 Digit" },
          })}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
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
      <div className="flex flex-col gap-2">
        <label htmlFor="confirm-password" className="text-sm font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          className="border rounded p-2"
          {...register("confirm_password", {
            required: "Confirm Password is Required",
            validate: (value) =>
              value === password
                ? null
                : "Confirm Password Must Be Same as Password",
          })}
        />
        {errors["confirm_password"] && (
          <p className="text-red-500 text-sm">
            {errors["confirm-password"].message}
          </p>
        )}
      </div>

      <button type="submit" className="bg-purple-900 text-white  py-2 rounded">
        Registration
      </button>
    </form>
  );
}

export default Registration;
