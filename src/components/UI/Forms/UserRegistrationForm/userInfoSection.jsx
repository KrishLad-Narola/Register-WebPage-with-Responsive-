import React from 'react';
import Input from '../../../../components/UI/Input'


const UserInfoSection = ({ register, errors }) => (
  <section>
    <h2 className='text-center'>Personal Information</h2>
    <Input
      type="Text"
      label="First Name"
      {...register('firstName')}
      error={errors.firstName}
    />
    < br />
    <Input
      type="Text"
      label="Last Name"
      {...register('lastName')}
      error={errors.lastName}
    />

    < br />

    <Input

      label="Email"
      type="email"
      {...register('email')}
      error={errors.email}
    />
    
    <br />

    <Input

      label="Password"
      type="Passwrod"
      {...register('password')}
      error={errors.password}
    />
    
    <br/>

      <Input

      label="CurrectPassword"
      type="CurrectPassword"
      {...register('currectpassword')}
      error={errors.currectpassword}
    />

    <br />

     </section>
);

export default UserInfoSection;
