import React, { useState } from "react";
import Input from "../components/UI/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ForgotPassword = () => {

  const [generatedOTP, setGeneratedOTP] = useState(null);
  const [otpSent, setOtpSent] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();


  const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOTP(otp);
    console.log("Generated OTP:", otp);
    alert("OTP Sent Successfully!");
    setOtpSent(true);
  };

  const onSubmit = (data) => {
    if (Number(data.OTP) === generatedOTP) {
      alert("OTP Verified Successfully!");
      console.log("Verified Data:", data);
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-center text-2xl mb-5">Forgot Password</h1>

      <Input
        type="email"
        label="Email"
        {...register("Email", {
          required: "Email is required"
        })}
        error={errors.Email}
      />

      <br />

      {otpSent && (
        <>
          <Input
            type="text"
            label="Enter OTP"
            {...register("OTP", {
              required: "OTP is required"
            })}
            error={errors.OTP}
          />
          <br />
        </>
      )}

      {!otpSent ? (
        <button
          type="button"
          onClick={generateOTP}
          className="mt-2 mb-2 p-4 justify-center block mx-auto bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Send OTP
        </button>
      ) : (
        <button
          type="submit"
          className="mt-2 mb-2 p-4 justify-center block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Verify OTP
        </button>
      )}

      <div className="text-center text-black mt-3 mb-3">
        <Link to="/">Go to Home</Link>
      </div>

    </form>
  );
};

export default ForgotPassword;