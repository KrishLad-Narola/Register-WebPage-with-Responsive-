import React from 'react';

const Input = (({ label, error,  ref ,    ...props }) => (
 <div className=" mx-auto max-w-sm  gap-5 grid-cols-2 grid items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-white border-black text-black-800">

    <label>{label}</label>
    <input className='border ' ref={ref} {...props} />
    {error && <p style={{ color: 'red' }}>{error.message}</p>}
  </div>
));

export default Input;
