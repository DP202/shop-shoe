/* eslint-disable react-hooks/set-state-in-effect */
import { useMutation, useQuery } from '@tanstack/react-query'
import cartApi from '../../apis/cart.api'
import { Link } from 'react-router-dom'
import QuantityController from '../../components/QuantityController/QuantityController'
import { formatCurrency } from '../../ultils/ultil'
import { useEffect, useState } from 'react'

const IMAGE_BASE_URL = 'http://localhost:8080/api/images/view'

export default function Cart() {
  const [extendedCart, setExtendedCart] = useState([])

  const { data: cartData, refetch } = useQuery({
    queryKey: ['cart'],
    queryFn: () => cartApi.getAllCart()
  })

  const updateCartMutation = useMutation({
    mutationFn: (body) => cartApi.updateCartItem(body),
    onSuccess: () => {
      refetch()
    },
    onError: (error) => {
      console.error('Update error:', error)
      refetch()
    }
  })

  const deleteCartMutation = useMutation({
    mutationFn: (cartItemIds) => cartApi.removeCart(cartItemIds),
    onSuccess: () => {
      refetch()
    }
  })

  const buyCartMutation = useMutation({
    mutationFn: (body) => cartApi.buyCart(body),
    onSuccess: () => {
      refetch()
    }
  })

  const cart = cartData?.data?.data
  // console.log('Cart data : ', cart)

  const isCheckedAll = extendedCart.every((item) => item.checked)
  console.log('extendedCart : ', extendedCart)

  //
  const checkedCount = extendedCart.filter((item) => item.checked).length
  const totalCheckedCartPrice = extendedCart
    .filter((item) => item.checked)
    .map((item) => item.productVariant.price * item.quantity)
    .reduce((a, b) => a + b, 0)

  // vừa vào useQuery gọi api-> sau đó dùng useEffect set lại state
  useEffect(() => {
    if (!cart?.cartItems) {
      setExtendedCart([])
      return
    }
    setExtendedCart((prev) => {
      const oldCheckedMap = Object.fromEntries(prev.map((item) => [item.id, item.checked]))

      return (
        cart?.cartItems?.map((item) => ({
          ...item,
          disabled: false,
          checked: !!oldCheckedMap[item.id]
        })) || []
      )
    })
  }, [cart?.cartItems])

  const handleChecked = (index, event) => {
    const checked = event.target.checked
    console.log(`[Cart] Index ${index} - checked = ${checked}`)
    setExtendedCart((prev) =>
      prev.map((item, i) => {
        return i === index ? { ...item, checked: checked } : item
      })
    )
  }

  const hendleCheckAll = () => {
    setExtendedCart((prev) =>
      prev.map((item) => ({
        ...item,
        checked: !isCheckedAll
      }))
    )
  }

  const handleTypeQuantity = (cartIndex, value) => {
    setExtendedCart((prev) => prev.map((item, i) => (i === cartIndex ? { ...item, quantity: value } : item)))
  }

  const handleQuantity = (cartIndex, newQuantity) => {
    if (newQuantity < 1) return

    const currentItem = extendedCart[cartIndex]
    console.log('currentItem : ', currentItem)

    if (!currentItem) return

    if (newQuantity === currentItem.quantity) return // số lượng không thay đổi thì bỏ qua

    setExtendedCart((prev) => {
      return prev.map((item, i) => {
        return i === cartIndex ? { ...item, disabled: true, quantity: newQuantity } : item
      })
    })

    updateCartMutation.mutate({
      sku: currentItem.productVariant.sku,
      quantity: newQuantity
    })
  }

  const handleDeleteItem = (cartIndex) => {
    const cartItemId = extendedCart[cartIndex].id
    deleteCartMutation.mutate(cartItemId)
  }

  const handleDeleteSelected = () => {
    // lấy item đang checked => lấy id của chúng
    const selectedIds = extendedCart.filter((item) => item.checked).map((item) => item.id)
    if (selectedIds.length === 0) return
    deleteCartMutation.mutate(selectedIds)
  }

  const handleBuyCart = () => {
    if (checkedCount === 0) {
      alert('Vui lòng chọn ít nhất 1 sản phẩm để mua')
      return
    }

    const checkedItems = extendedCart.filter((item) => item.checked)

    // SỬA CHÍNH TẠI ĐÂY: bọc trong orderItemRequests
    const body = {
      orderItemRequests: checkedItems.map((item) => ({
        productVariantId: item.productVariant.id, // chắc chắn là id (UUID), không phải sku
        quantity: item.quantity
      })),
      // Nếu backend bắt buộc phải có type, thì thêm vào:
      type: 'CASH_ON_DELIVERY' // hoặc giá trị mặc định phù hợp
    }

    console.log('Body gửi đi:', body) // Thêm log để kiểm tra

    buyCartMutation.mutate(body, {
      onSuccess: (res) => {
        console.log('Đặt hàng thành công:', res.data)
        alert('Đặt hàng thành công!')
        // refetch() sẽ tự chạy
      },
      onError: (err) => {
        console.error('Lỗi đặt hàng:', err)
        alert('Đặt hàng thất bại. Vui lòng thử lại!')
      }
    })
  }

  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container mx-auto'>
        <div className='overflow-auto'>
          <div className='min-w-[1000px]'>
            <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 capitalize text-gray-500 shadow'>
              <div className='col-span-6 '>
                <div className='flex items-center'>
                  <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                    <input type='checkbox' className='h-5 w-5' checked={isCheckedAll} onChange={hendleCheckAll} />
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
              {extendedCart?.map((carts, index) => {
                return (
                  <div
                    key={carts.id}
                    className='first:mt-0 mb-5 grid grid-cols-12 text-center rounded-sm border border-gray-200 bg-white py-5 px-5 text-sm text-gray-500'
                  >
                    <div className='col-span-6'>
                      <div className='flex'>
                        <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                          <input
                            type='checkbox'
                            className='h-5 w-5'
                            checked={carts.checked}
                            onChange={(e) => handleChecked(index, e)} // mỗi khi click cần biết index nó nằm vị trí nào
                          />
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
                      <div className='grid grid-cols-5 items-center'>
                        <div className='col-span-2'>
                          <div className='flex items-center justify-center'>
                            <span className='text-gray-400 line-through text-[15px]'>999.000₫</span>
                            <span className='text-gray-400  text-[15px]'>
                              {' '}
                              {formatCurrency(carts.productVariant.price)} ₫
                            </span>
                          </div>
                        </div>

                        <div className='col-span-1'>
                          <QuantityController
                            max={carts.quantity}
                            value={carts.quantity || 1}
                            onIncrease={() => handleQuantity(index, carts.quantity + 1)}
                            onDecrease={() => handleQuantity(index, carts.quantity - 1)}
                            onType={(value) => handleTypeQuantity(index, value)}
                            onFocusOut={(value) => handleQuantity(index, value)}
                            disabled={carts.disabled}
                          />
                        </div>

                        <div className='col-span-1'>
                          <span className='text-orange-500 text-[17px]'>
                            {formatCurrency(carts.productVariant.price * carts.quantity)}
                          </span>
                        </div>

                        <div className='col-span-1 cursor-pointer'>
                          <button
                            onClick={() => handleDeleteItem(index)}
                            className='text-black transition-colors hover:text-orange-500 cursor-pointer'
                          >
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
              <input type='checkbox' className='h-5 w-5' checked={isCheckedAll} onChange={hendleCheckAll} />
              <button className='ml-3 text-gray-700'>Chọn tất cả ({cart?.cartItems.length})</button>
              <button
                className='mx-5 text-gray-600 hover:text-orange-500 transition'
                onClick={() => handleDeleteSelected()}
              >
                Xóa
              </button>
            </div>
          </div>

          <div className='ml-auto flex items-center'>
            <div className='text-right'>
              <div className='flex items-center justify-end'>
                <span className='text-gray-600'>Tổng thanh toán ({checkedCount} sản phẩm):</span>
                <span className='ml-4 text-2xl text-orange-500'>₫{formatCurrency(totalCheckedCartPrice)}</span>
              </div>
              {/* <div className='mt-1 text-sm'>
                <span className='text-gray-500'>Tiết kiệm</span>
                <span className='ml-4 text-orange-500'>đ111</span>
              </div> */}
            </div>

            <button
              onClick={handleBuyCart}
              className='ml-8 rounded-sm bg-orange-500 px-10 py-3 text-white hover:bg-orange-600 transition uppercase font-medium'
            >
              Mua hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
