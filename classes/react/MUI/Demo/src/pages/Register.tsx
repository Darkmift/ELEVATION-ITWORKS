import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';


const userSchema = z.object({
  email: z.string().email('Invalid email').min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
  phoneNumber: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(10)
    .refine((value) => /^[0-9]+$/.test(value ?? ""), 'Phone should contain only numbers')
    .optional(),
  country: z.string().min(1, 'Country is required'),
})

type RegisterFormData = z.infer<typeof userSchema>

const Register = () => {
  const {
    register,
    handleSubmit,
    // watch,

    formState: { errors, defaultValues },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      password: '',
      phoneNumber: '',
      country: '',
      email: '',
    },
  })
  console.log('🚀 ~ Register ~ errors:', errors)

  const onSubmit = (data: RegisterFormData) => console.log(data)

  if(!defaultValues) return <CircularProgress />

  return (
    <Grid container spacing={2}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" gutterBottom>
          Signup
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          defaultValue={defaultValues.email}
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          defaultValue={defaultValues.password}
          {...register('password')}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          defaultValue={defaultValues.phoneNumber}
          {...register('phoneNumber')}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message}
        />

        <FormControl fullWidth margin="normal" error={!!errors.country}>
          <InputLabel>Country</InputLabel>
          <Select
            label="Country"
            {...register('country')}
            defaultValue={defaultValues.country}
            sx={{ my: 1 }}
          >
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            {/* Add other countries as needed */}
          </Select>
          <FormHelperText>{errors.country?.message}</FormHelperText>
        </FormControl>

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Grid>
  )
}

export default Register
