import React from "react";
import { useForm } from "react-hook-form";
import Input from "../components/UI/Input";

const Contact = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

    console.log("data",data);
    alert("Form Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-2xl">Contact Us</h1>

      <Input
        type="text"
        label="First Name"
        {...register("FirstName", {
          required: "First name is required"
        })}
        error={errors.FirstName}
      />

      <br />

      <Input
        type="text"
        label="Last Name"
        {...register("LastName", {
          required: "Last name is required"
        })}
        error={errors.LastName}
      />

      <br />

      <Input
        type="email"
        label="Email"
        {...register("Email", {
          required: "Email is required"
        })}
        error={errors.Email}
      />

      <br />

      <Input
        type="tel"
        label="Mobile Number"
        {...register("Mobilenumber", {
          required: "Mobile number is required"
        })}
        error={errors.Mobilenumber}
      />

      <br />

      <Input
        type="text"
        label="Feedback"
        {...register("FeedBack", {
          required: "Feedback is required",
          minLength: {
            value: 10,
            message: "Feedback must be at least 10 characters"
          }
        })}
        error={errors.FeedBack}
      />

      <br />

      <button
        className="mt-2 mb-2 p-4 justify-center block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;