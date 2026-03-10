import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/yup';

const FormSchema = zod.object().shape({
  password: zod.string().required("Required"),
  confirm_password: zod.string()
    .oneOf([zod.ref("password")], "Passwords do not match"), 
});
