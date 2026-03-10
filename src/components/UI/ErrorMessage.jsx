import React from "react";



const ErrorMessage = ({ errors }) => {
    <div>
        <div>
            {errors.firstName && errors.type.firstName === "required"(
                <p className='errormessage'>Fill this fild</p>
            )}
        </div>

        <div>
            {errors.lastName && errors.type.lastName === "required"(
                <p className='errormessage'>Fill this fild</p>
            )}
        </div>

        <div>
            {errors.email && errors.type.email === "required"(
                <p className='errormessage'>Enter tyhe valid Email</p>
            )}
        </div>
       
         <div>
            {errors.Address && errors.type.Address === "required"(
                <p className='errormessage'>please Enter your Address</p>
            )}
        </div>

        <div>
            {errors.password && errors.type.currectpassword === "required"(
                <p className='errormessage'>please Enter your Password</p>
            )}
        </div>

        <div>
            {errors.currentcpassword && errors.type.currentpassword === "required"(
                <p className='errormessage'>please Enter a CurrectPassword</p>
            )}
        </div>
       

         <div>
            {errors.FirstName && errors.type.FirstName === "required"(
                <p className='errormessage'>please Enter a FirstName</p>
            )}
        </div>

         <div>
            {errors.LastName && errors.type.LastName === "required"(
                <p className='errormessage'>please Enter a LastName</p>
            )}
        </div>

         <div>
            {errors.Email && errors.type.Email === "required"(
                <p className='errormessage'>please Enter a valid Email</p>
            )}
        </div>

        <div>
            {errors.MobileNumber && errors.type.MobileNumber === "required"(
                <p className='errormessage'>please Enter a valid MobileNumber</p>
            )}
        </div>

        <div>
            {errors.FeedBack && errors.type.FeedBack === "required"(
                <p className='errormessage'>please Enter a your FeedBack</p>
            )}
        </div>
    </div>
}


export default ErrorMessage;