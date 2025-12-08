import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/Input/Input'
import { schema } from '../../ultils/rules'
import authApi from '../../apis/auth.api'
import { useMutation } from '@tanstack/react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { setAccessToken } from '../../ultils/auth'

function Login() {
  const { setIsAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const loginSchema = schema.pick(['username', 'password'])
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const loginMutation = useMutation({
    mutationFn: (body) => authApi.loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginMutation.mutate(data, {
      onSuccess: (response) => {
        const token = response.data.data.token
        setAccessToken(token)

        setIsAuthenticated(true)
        navigate('/')
      },
      onError: (error) => {
        const code = error.response?.data?.code

        if (code === 1004 || code === 1005) {
          setError('username', { message: 'Tài khoản hoặc mật khẩu không đúng' })
          setError('password', { message: '' })
        } else {
          toast.error('Đăng nhập thất bại')
        }
      }
    })
  })

  return (
    <div className='bg-blue-600'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-15 lg:pr-10 py-12'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form class='p-10 rounded shadow-sm bg-white' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='mt-3 '>
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
              </div>

              <div className='mt-3'>
                <button
                  type='submit'
                  disabled={loginMutation.isPending}
                  className=' w-full py-4 px-2 uppercase bg-blue-500 text-white text-sm hover:bg-blue-600 cursor-pointer
                  flex justify-center items-center rounded
                  '
                >
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn chưa có tải khoản ?</span>
                <Link className='text-blue-500 ml-1' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
