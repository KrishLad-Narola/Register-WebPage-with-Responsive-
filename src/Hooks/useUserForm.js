import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { userRegistrationSchema } from '../Utils/ValidationSchems'

const useUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control, 
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(userRegistrationSchema), 
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      password:'',
      currectpassword:''
    },
  });

  return { register, handleSubmit, errors, control, watch, reset };
};

export default useUserForm;
