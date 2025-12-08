import { useQuery } from '@tanstack/react-query'
import cartApi from '../../apis/cart.api'
import { Link } from 'react-router-dom'
import QuantityController from '../../components/QuantityController/QuantityController'
import { formatCurrency } from '../../ultils/ultil'

const IMAGE_BASE_URL = 'http://localhost:8080/api/images/view'

export default function Cart() {
  const { data: cartData } = useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.getAllCart()
  })

  const cart = cartData?.data?.data
  console.log('Cart data : ', cart)
  const totalPrice = cart?.total_price

  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container mx-auto'>
        <div className='overflow-auto'>
          <div className='min-w-[1000px]'>
            <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 capitalize text-gray-500 shadow'>
              <div className='col-span-6 '>
                <div className='flex items-center'>
                  <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                    <input type='checkbox' className='h-5 w-5' />
                  </div>
                  <div className='flex-grow text-black'>Sản phẩm</div>
                </div>
              </div>

              <div className='col-span-6'>
                <div className='grid grid-cols-5 text-center items-center'>
                  <div className='col-span-2'>Đơn giá</div>
                  <div className='col-span-1'>Số lượng</div>
                  <div className='col-span-1'>Số tiền</div>
                  <div className='col-span-1'>Thao tác</div>
                </div>
              </div>
            </div>

            <div className='my-3 rounded-sm bg-white p-5 shadow'>
              {cart?.cartItems.map((carts) => {
                return (
                  <div
                    key={carts.id}
                    className='first:mt-0 mb-5 grid grid-cols-12 text-center rounded-sm border border-gray-200 bg-white py-5 px-5 text-sm text-gray-500'
                  >
                    <div className='col-span-6'>
                      <div className='flex'>
                        <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                          <input type='checkbox' className='h-5 w-5' />
                        </div>

                        <div className='flex-grow '>
                          <div className='flex'>
                            <Link className='h-20 w-20 flex-shrink-0' to='/'>
                              <img
                                src={`${IMAGE_BASE_URL}/${carts.productVariant.thumbnailUrl}`}
                                alt={carts.productVariant?.name}
                              />
                            </Link>

                            <div className='flex-grow px-5 pt-1 pb-2'>
                              <Link to='/' className='ext-left line-clamp-2'>
                                {carts.productVariant.name}
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-span-6 mt-5'>
                      <div className='grid grid-cols-5 items-center text-center'>
                        <div className='col-span-2'>
                          <div className='flex items-center justify-center gap-3'>
                            <span className='text-gray-400 line-through text-[15px]'>999999.000₫</span>
                            <span className='text-gray-400  text-[15px]'>
                              {' '}
                              {formatCurrency(carts.productVariant.price)} ₫
                            </span>
                          </div>
                        </div>

                        <div className='col-span-1'>
                          <QuantityController max />
                        </div>

                        <div className='col-span-1'>
                          <span className='text-orange-500 text-[17px]'>{totalPrice}</span>
                        </div>

                        <div className='col-span-1 cursor-pointer'>
                          <button className='text-black transition-colors hover:text-orange-500 cursor-pointer'>
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div
          className='sticky bottom-0 z-10 mt-8 flex sm:items-center rounded-sm bg-white p-5 shadow border border-gray-100
        flex-col sm:flex-row
        '
        >
          <div className='flex items-center'>
            <div className='flex items-center'>
              <input type='checkbox' className='h-5 w-5 accent-orange' />
              <button className='ml-3 text-gray-700'>Chọn tất cả ({cart?.cartItems.length})</button>
              <button className='mx-5 text-gray-600 hover:text-orange-500 transition'>Xóa</button>
            </div>
          </div>

          <div className='ml-auto flex items-center'>
            <div className='text-right'>
              <div className='flex items-center justify-end'>
                <span className='text-gray-600'>Tổng thanh toán (0 sản phẩm):</span>
                <span className='ml-4 text-2xl text-orange-500'>789876</span>
              </div>
              <div className='mt-1 text-sm'>
                <span className='text-gray-500'>Tiết kiệm</span>
                <span className='ml-4 text-orange-500'>đ111</span>
              </div>
            </div>

            <button className='ml-8 rounded-sm bg-orange-500 px-10 py-3 text-white hover:bg-orange-600 transition uppercase font-medium'>
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
