import React, { useState } from "react";
import Input from "./UI/Input";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Saved Data:", formData);
    alert("Data saved in localStorage");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 gap-2 text-center">
      <div className="container grid grid-two-cols">

        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

      </div>

      <button
        type="submit"
        className="mt-2 mb-2 p-4 justify-center block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Log In
      </button>
    </form>
  );
}

export default Login;