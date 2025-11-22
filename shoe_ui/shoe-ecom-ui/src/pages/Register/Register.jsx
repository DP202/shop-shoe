import Input from '../../components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../ultils/rules'
import authApi from '../../apis/auth.api'
import { toast } from 'react-toastify'

export default function Register() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit'
  })

  const registerMutation = useMutation({
    mutationFn: (body) => authApi.registerAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    const formatDOB = {
      ...data,
      dob: data.dob ? new Date(data.dob).toISOString().split('T')[0] : null
    }

    registerMutation.mutate(formatDOB, {
      // eslint-disable-next-line no-unused-vars
      onSuccess: (response) => {
        navigate('/login')
      },
      onError: (error) => {
        if (error.response?.status === 400 || error.response?.status === 422) {
          const msg = error.response?.data?.message
          if (msg === 'Username is already existed') {
            setError('username', { message: 'Tên đăng nhập đã tồn tại', type: 'manual' })
          } else {
            toast.error(msg || 'Đăng ký thất bại, vui lòng thử lại!')
          }
        }
      }
    })
  })

  return (
    <div className='bg-orange-600 min-h-screen'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-20'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='p-10 rounded-lg shadow-lg bg-white' onSubmit={onSubmit} noValidate>
              <h2 className='text-2xl font-semibold mb-6'>Đăng ký</h2>

              <Input
                name='username'
                register={register}
                placeholder='Tên đăng nhập'
                type='text'
                errorMessage={errors.username?.message}
              />
              <Input
                name='password'
                register={register}
                placeholder='Mật khẩu'
                type='password'
                autoComplete='on'
                errorMessage={errors.password?.message}
              />
              <Input
                name='passwordConfirm'
                register={register}
                placeholder='Nhập lại mật khẩu'
                type='password'
                autoComplete='on'
                errorMessage={errors.passwordConfirm?.message}
              />
              <Input
                name='email'
                register={register}
                placeholder='Email'
                type='email'
                errorMessage={errors.email?.message}
              />
              <div className='flex gap-3'>
                <Input name='firstName' register={register} placeholder='Họ' errorMessage={errors.firstName?.message} />
                <Input name='lastName' register={register} placeholder='Tên' errorMessage={errors.lastName?.message} />
              </div>
              <Input type='date' name='dob' register={register} errorMessage={errors.dob?.message} />

              <button
                type='submit'
                className='w-full mt-4 py-4 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition disabled:opacity-70 disabled:cursor-not-allowed'
              >
                Đăng ký
              </button>

              <div className='mt-6 text-center'>
                <span className='text-gray-600'>Đã có tài khoản? </span>
                <Link to='/login' className='text-red-500 font-medium hover:underline'>
                  Đăng nhập ngay
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
