import React from 'react';
import Input from '../../UI/Input'

const AddressInfo = ({ register, errors }) => (
    <section>
        <h3>Addrress Information</h3>
        <Input
            type="Text"
            label="Address"
            {...register('Address')}
            error={errors.Address}
        />
        < br />

        {/* <Input
            type="number"
            label="PinCode"
            {...register('PinCode')}
            error={errors.PinCode}
        />

        < br /> */}

    </section>

);

export default AddressInfo;