import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import Popover from '../Popover'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/app.context'
import authApi from '../../apis/auth.api'
import { formatCurrency, useQueryConfig } from '../../ultils/ultil'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from '../../ultils/rules'
import cartApi from '../../apis/cart.api'
import noProduct from '../../../assets/images/no-product.png'

const searchNameSchema = schema.pick(['name'])
const IMAGE_BASE_URL = 'http://localhost:8080/api/images/view'
const MAX_PRODUCT_CART = 5

export default function MainHeader() {
  const queryConfig = useQueryConfig()
  const { name } = queryConfig
  // console.log('QueryConfig : ', name)
  const queryClient = useQueryClient()

  const { setIsAuthenticated, isAuthenticated } = useContext(AppContext)
  const navigate = useNavigate()

  const logOutMutation = useMutation({
    mutationFn: () => authApi.logoutAccount(),
    onSuccess: () => {
      setIsAuthenticated(false)
      // navigate('/login')
      queryClient.removeQueries({ queryKey: ['cart'] })
    }
  })

  const { data: cartData } = useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.getAllCart(),
    enabled: isAuthenticated, // chỉ khi đăng nhập
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000
  })

  const cart = cartData?.data?.data
  // console.log('Cart data : ', cart)
  // const sortedCartItems = cart?.cartItems?.sort((a, b) => b.id.localeCompare(a.id))

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name: ''
    },
    resolver: yupResolver(searchNameSchema)
  })

  useEffect(() => {
    setValue('name', name || '')
  }, [name, setValue])

  const handleLogout = () => {
    logOutMutation.mutate(undefined, {
      onSuccess: () => {
        setIsAuthenticated(false)
        // navigate('/login')
        queryClient.invalidateQueries(['cart']) // Xóa cache cart sau khi logout
      }
    })
  }
  const handleSubmitSearch = handleSubmit((data) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        name: data.name,
        page: '1'
      }).toString()
    })
  })

  return (
    <div className='pb-5 pt-2 bg-gradient-to-b from-blue-500 to-blue-500 text-white'>
      <div className='container mx-auto '>
        <div className='flex justify-end items-center space-x-6'>
          <Popover
            className='flex items-center py-1 hover:text-white/70 cursor-pointer'
            renderPopover={
              <div className='bg-white relative shadow-md rounded-sm border border-gray-200'>
                <div className='flex flex-col py-2 pr-25 pl-3'>
                  <button className='py-2 px-3 hover:text-orange-500 cursor-pointer text-black'>Tiếng Việt</button>
                  <button className='py-2 px-3 hover:text-orange-500 mt-2 cursor-pointer text-black'>Tiếng Anh</button>
                </div>
              </div>
            }
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418'
              />
            </svg>
            <span className='mx-1'>Tiếng việt</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
            </svg>
          </Popover>

          {isAuthenticated && (
            <Popover
              className='ml-6 flex items-center py-1 hover:text-gray-300 cursor-pointer'
              renderPopover={
                <div>
                  <Link
                    to='/profile'
                    className='text-left text-black w-full block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500'
                  >
                    Tài khoản của tôi
                  </Link>
                  <Link
                    to='/'
                    className='text-left w-full  text-black block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500'
                  >
                    Đơn mua
                  </Link>
                  <button
                    type='button'
                    onClick={handleLogout}
                    className='cursor-pointer text-black text-left w-full block py-3 px-4 hover:bg-slate-100 bg-white hover:text-cyan-500'
                  >
                    Đăng xuất
                  </button>
                </div>
              }
            >
              <div className='w-6 h-6 flex-shrink-0 mr-4'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPrTBPxjgQtxbR_H3BQ_QhM0DVz9eaHSoVv-WGiklBOS2X4heHr1WqAawX2RTqv2J2SNI&usqp=CAU'
                  alt='avatar'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <div>
                <div>PhamNgocDong</div>
              </div>
            </Popover>
          )}

          {!isAuthenticated && (
            <div className='flex items-center'>
              <Link to='/register' className='mx-3 capitalize hover:text-white/70'>
                Đăng ký
              </Link>
              <div className='border-r-[1px] border-r-white/80  h-4'></div>
              <Link to='/login' className='mx-3 capitalize hover:text-white/70'>
                Đăng nhập
              </Link>
            </div>
          )}
        </div>

        <div className='grid grid-cols-12 gap-4 mt-4 items-end'>
          <Link to='/' className='col-span-2 inline-block text-center'>
            <h2 className='text-2xl font-bold'>ĐÔNG TUẤN STORE</h2>
          </Link>

          <form className='col-span-9' onClick={handleSubmitSearch}>
            <div className='bg-white rounded-sm p-1 flex'>
              <input
                type='text'
                placeholder='Free ship Đơn Từ 0 Đồng'
                className='text-black px-3 py-2 flex-grow border-none outline-none bg-transparent'
                {...register('name')}
              />
              <button className='cursor-pointer rounded-sm py-2 px-6 shrink-0 bg-blue-500 hover:opacity-90 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                  />
                </svg>
              </button>
            </div>
          </form>

          <div className='col-span-1 justify-self-end'>
            <Popover
              renderPopover={
                <div className='shadow-md rounded-sm border border-gray-200 cursor-pointer text-sm max-w-[400px] text-left w-full block py-3 px-2 hover:bg-slate-100 bg-white'>
                  {cart && cart.cartItems && cart.cartItems.length > 0 ? (
                    <div className='p-2'>
                      <div className='text-gray-400 capitalize'>Sản phẩm mới thêm</div>
                      <div className='mt-5'>
                        {cart.cartItems.slice(0, MAX_PRODUCT_CART).map((carts) => (
                          <div className='mt-2 p-1 flex hover:bg-gray-200' key={carts.id}>
                            <div className='flex-shrink-0'>
                              <img
                                src={`${IMAGE_BASE_URL}/${carts.productVariant.thumbnailUrl}`}
                                alt={carts.productVariant?.name}
                                className='w-11 h-11 object-cover'
                              />
                            </div>
                            <div className='grow ml-2 overflow-hidden flex flex-col '>
                              <div className='truncate text-black text-[15px]'>{carts.productVariant.name}</div>
                              <div className='ml-2 shrink-0 flex'>
                                <span className='text-blue-700'>{formatCurrency(carts.productVariant.price)}</span>
                                <span className='text-blue-700 text-[18px] ml-1'>₫</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className='flex mt-6 items-center justify-between'>
                        <div className='capitalize text-xs text-gray-500'>
                          {cart.cartItems.length > MAX_PRODUCT_CART ? cart.cartItems.length - MAX_PRODUCT_CART : ''}{' '}
                          Thêm hàng vào giỏ
                        </div>
                        <button className='capitalize bg-blue-700 hover:bg-blue-500/80 px-4 py-2 rounded-sm text-white cursor-pointer'>
                          Xem giỏ hàng
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className='p-2 w-[300px] h-[300px] flex items-center justify-center flex-wrap flex-col'>
                      <img src={noProduct} alt='no cart' className='h-24 w-24' />
                      <div className='mt-3 capitalize'>Chưa có sản phẩm</div>
                    </div>
                  )}
                </div>
              }
            >
              <Link to='/' className='relative'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                  />
                </svg>
                {cart && (
                  <span className='absolute top-[-5px] left-[17px] rounded-full px-2 py-1 bg-gray-100  text-xs px-[9px] text-blue-800 py-[1px]'>
                    {cart.cartItems.length}
                  </span>
                )}
              </Link>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  )
}
