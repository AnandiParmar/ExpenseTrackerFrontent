import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

function Form({ formFields, setFormData, setIsFormSubmit, formData }) {
  const { register, handleSubmit } = useForm({
    defaultValues: formData,
  });

  function onSubmit(data) {
    setIsFormSubmit(true);
    setFormData(data);
  }
  return (
    <form
      action=""
      className="max-w-md mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {formFields.map((field, i) => (
        <Fragment key={i}>
          <div className="relative z-0 w-full mb-5 group" key={field.id}>
            {field.type == "number" ? (
              <input
                type={field.type}
                id={field.id}
                placeholder=""
                {...register(`${field.name}`, {
                  min: {
                    value: field?.min,
                    message: "Minimum Value Must be 1",
                  },
                  max: {
                    value: field?.max,
                    message: "Maximum Value Must be 12",
                  },
                })}
                name={field.name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                required
              />
            ) : field.type == "date" ? (
              <input
                type={field.type}
                placeholder=""
                {...register(`${field.name}`)}
                id={field.id}
                name={field.name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                required
              />
            ) : field.type == "button" ? (
              <button className="text-white bg-gradient-to-br from-purple-900 to-purple-500 hover:bg-gradient-to-bl rounded focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium  text-sm px-5 py-2.5 text-center ">
                {field.value}
              </button>
            ) : (
              <input
                type={field.type}
                placeholder=""
                {...register(`${field.name}`)}
                id={field.id}
                name={field.name}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent  border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purple-500 focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                required
              />
            )}
            <label
              htmlFor={field.id}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-purple-600 peer-focus:dark:text-purple-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {field.label}
            </label>
          </div>
        </Fragment>
      ))}
    </form>
  );
}

export default Form;
