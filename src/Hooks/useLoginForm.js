import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPasswordSchema } from '../Utils/PasswordSchema'


const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control, 
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(ForgotPasswordSchema), 
    defaultValues: {
      email: ''
    },
  });

  return { register, handleSubmit, errors, control, watch, reset };
};

export default useLoginForm;
