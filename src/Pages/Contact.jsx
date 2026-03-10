import React from "react";
import Input from "../components/UI/Input";



const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e)
};

const Contact = ({ register, errors }) => (

  <form onSubmit={handleSubmit}>
    <h1 className="text-center text-2xl">Contact Us.</h1>

    <Input
      type="text"
      label="FirstName"
      {...register("FirstName", {
        required: "First name is required",
        
      })}
      error={errors.FirstName}
    />

    <br />

    <Input
      type="text"
      label="LastName"
      {...register("LastName", {
        required: "Last name is required",
      })}
      error={errors.LastName}
    />

    <br />

    <Input
      type="email"
      label="Email"
      {...register("Email", {
        required: "Email is required",
      })}
      error={errors.Email}
    />
       
    <br />

    <Input
      type="Mobilenumber"
      label="Mobilenumber"
      {...register("Mobilenumber", {
        required: "Mobilenumber is required",
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
          message: "Feedback must be at least 10 characters",
        },
      })}
      error={errors.FeedBack}
    />

    <br />

    <button
      className="mt-2 mb-2 p-4 justify-center block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={handleSubmit}
      type="submit">
      submit
    </button>
  </form>
);

export default Contact;