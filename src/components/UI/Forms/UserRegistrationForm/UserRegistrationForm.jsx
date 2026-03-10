import React from 'react';
import useUserForm from '../../../../Hooks/useUserForm';
import UserInfoSection from './userInfoSection';
import Input from '../../../../components/UI/Input'
import { Link } from 'react-router-dom';

const UserRegistrationForm = () => {
  const { register, handleSubmit, errors, watch, reset } = useUserForm();

  const onSubmit = (data) => {
    console.log('Form Submitted', data);
    reset();
  };

  const passwordvalue = watch('password');
  console.log('errors', errors)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className='text-center bg-amber-200'>Create Account</h1>

      <UserInfoSection register={register} errors={errors} />

      <Input
        label="Address"
        {...register('address')}
        error={errors.address}
      />

      <p> {passwordvalue}</p>
      <br />

      <div className="p-10 text-center mx-auto text-blue-600">
        <Link to="/ForgotPassword">
          ForgetPassword
        </Link>
      </div>

      <div className="text-center">
        <button type="submit" className="mt-2 mb-2 p-4 justify-center block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>



      <div className="p-10 mx-auto text-purple-600">
        <Link to="/Home">
          🔙 Go to Home Page
        </Link>
      </div>


      {/* <button className='mt-5 p-10px bg-red-500 ' type="Back">Back</button> */}

    </form>
  );
};

export default UserRegistrationForm;
