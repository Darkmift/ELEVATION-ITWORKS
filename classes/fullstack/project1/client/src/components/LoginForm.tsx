import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginThunk } from '../store/thunks/auth.thunk';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useAppDispatch();
  const adminFirstName = useAppSelector((state) => state.authReducer.admin.firstName);
  const adminLastname = useAppSelector((state) => state.authReducer.admin.lastName);

  useEffect(() => {
    if (adminFirstName && adminLastname) {
      navigate('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [adminFirstName, adminLastname]);

  const onSubmit = (data: { username: string; password: string }) => {
    dispatch(loginThunk(data));
  };


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            {...register('username', {
              required: 'Username is required',
              minLength: { value: 3, message: 'Username must be at least 3 characters' },
            })}
            className={`w-full px-3 py-2 border ${
              errors.username ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.username ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 5, message: 'Password must be at least 5 characters' },
            })}
            className={`w-full px-3 py-2 border ${
              errors.password ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.password ? 'focus:ring-red-500' : 'focus:ring-blue-500'
            }`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
