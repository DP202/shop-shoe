import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import productApi from '../../apis/product.api'
import { useNavigate, useParams } from 'react-router-dom'
import InputNumber from '../../components/InputNumber/InputNumber'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'
import QuantityController from '../../components/QuantityController/QuantityController'
import cartApi from '../../apis/cart.api'
import { toast } from 'react-toastify'

const IMAGE_BASE_URL = 'http://localhost:8080/api/images/view'
export default function ProductDetail() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [previewImage, setPreviewImage] = useState(null)
  const [buyCount, setBuyCount] = useState(1)
  const [colorId, setColorId] = useState()
  const [selectedSize, setSelectedSize] = useState()
  const { data } = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => productApi.getProductDetail(id)
  })
  const queryClient = useQueryClient()
  const { data: dataProductImage } = useQuery({
    queryKey: ['productColor', colorId],
    queryFn: () => productApi.getColorProduct(colorId),
    enabled: !!colorId
  })
  const product = data?.data?.data
  // console.log('product : ', product)

  const addToCartMutation = useMutation({
    mutationFn: (body) => cartApi.addToCart(body)
  })

  // console.log('dataProductImage', dataProductImage?.data?.data)

  useEffect(() => {
    if (product?.colorResponses?.[0]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setColorId(product.colorResponses[0].productColorId) // Khi load sản phẩm xong -> tự động lấy màu đầu tiên -> lưu vào state colorId
    }
  }, [product])

  useEffect(() => {
    if (dataProductImage?.data?.data?.[0]) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreviewImage(`${IMAGE_BASE_URL}/${dataProductImage.data.data[0]}`)
    }
  }, [dataProductImage])

  const handleImagesColor = (colorItem) => {
    console.log('color click', colorItem)
    setColorId(colorItem?.productColorId)
    // setSelectedSize(null) // reset size khi đổi màu
  }

  const handleSelectSize = (size) => {
    setSelectedSize(size)
  }

  const productImageWithColors = dataProductImage?.data?.data

  const handlePreviewImage = (item) => {
    // console.log('handlePreviewImage', item)
    setPreviewImage(`${IMAGE_BASE_URL}/${item}`)
  }

  const handleBuyCount = (value) => {
    setBuyCount(value)
  }

  const addToCart = () => {
    if (!colorId) {
      alert('Vui lòng chọn màu!')
      return
    }

    const selectedColorObj = product?.colorResponses?.find((c) => c.productColorId === colorId)
    if (!selectedColorObj) {
      alert('Lỗi màu!')
      return
    }

    // Tìm variant theo tên màu (vì backend chỉ có colorName, không có productColorId trong variant)
    const selectedVariant = product?.variantDetailResponses?.find((v) => v.colorName === selectedColorObj.colorName)
    console.log('selectedVariant : ', selectedVariant)
    if (!selectedVariant) {
      alert('Màu này hiện không có hàng!')
      return
    }

    // if (selectedVariant.total_stock <= 0) {
    //   alert('Sản phẩm đã hết hàng!')
    //   return
    // }

    addToCartMutation.mutate(
      {
        sku: selectedVariant.sku,
        quantity: buyCount
      },
      {
        onSuccess: (data) => {
          console.log('data:', data)
          toast.success(data.data.message)
          queryClient.invalidateQueries({
            queryKey: ['cart']
          })
        },
        onError: (error) => {
          console.error('Error adding to cart:', error)
          toast.error('Có lỗi xảy ra khi thêm vào giỏ hàng')
        }
      }
    )
  }

  const handleByNow = () => {
    navigate('/cart')
  }

  if (!product) return null
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container mx-auto'>
        <div className='bg-white p-4 shadow'>
          <div className='grid grid-cols-12 gap-9'>
            <div className='col-span-5'>
              <div className='relative w-full pt-[100%] shadow '>
                <img
                  className='absolute top-0 left-0 bg-white w-full h-full object-cover  cursor-pointer '
                  src={previewImage}
                  alt={product.name}
                />
              </div>
              {/* slider */}
              <div className='relative mt-4 grid grid-cols-5 gap-1'>
                {productImageWithColors?.map((item) => {
                  const isActive = `${IMAGE_BASE_URL}/${item}` === previewImage
                  return (
                    <div className='relative w-full pt-[100%]' key={item} onClick={() => handlePreviewImage(item)}>
                      <img
                        className={`absolute inset-0 w-full h-full object-cover rounded-md  transition-all cursor-pointer ${
                          isActive
                            ? 'border-blue-500 border-2 shadow-lg'
                            : 'border-gray-300 group-hover:border-blue-300'
                        }`}
                        src={`http://localhost:8080/api/images/view/${item}`}
                        alt=''
                      />
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='col-span-7'>
              <h1 className='text-3xl font-medium uppercase'>{product.name}</h1>
              <div className='mt-8 flex items-center bg-gray-50 py-4'>
                <div className='ml-3 text-3xl font-medium text-orange-500'>
                  {Number(product?.variantDetailResponses[0]?.price)?.toLocaleString('vi-VN')} ₫
                </div>
              </div>

              <div className='mt-8 flex items-start flex-col'>
                <div className='text-[24px] font-semibold text-gray-900 mb-4'>Kích thước</div>
                <div className='flex flex-row gap-4'>
                  {product?.variantDetailResponses?.length > 0 ? (
                    [...new Set(product.variantDetailResponses.map((v) => v.size))].map((size, index) => {
                      const isSelected = selectedSize === size
                      return (
                        <div
                          key={index}
                          onClick={() => handleSelectSize(size)}
                          className={`
              cursor-pointer px-6 py-3 text-sm font-medium rounded-md border-2
              transition-all duration-300 shadow-sm select-none
              ${
                isSelected
                  ? 'bg-blue-600 text-white border-blue-600 ring-4 ring-blue-200 scale-105 shadow-lg'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:shadow-md hover:scale-105'
              }
            `}
                        >
                          {size}
                        </div>
                      )
                    })
                  ) : (
                    <div className='text-sm text-gray-600'>Không có kích thước nào</div>
                  )}
                </div>
              </div>

              <div className='mt-8 flex items-start flex-col'>
                <div className='text-[24px] font-semibold text-gray-900 mb-4'>Màu sắc</div>
                <div className='flex flex-row gap-4'>
                  {product?.colorResponses?.length > 0 ? (
                    product.colorResponses.map((colorItem) => {
                      const isSelected = colorId === colorItem.productColorId
                      return (
                        <div
                          key={colorItem.productColorId}
                          onClick={() => handleImagesColor(colorItem)}
                          className={`
              w-12 h-12 rounded-full shadow-lg cursor-pointer 
               transition-all duration-200 relative
              ${isSelected ? 'border-blue-500 scale-110 ring-4 ring-blue-200' : 'border-gray-300 hover:border-gray-400'}
            `}
                          style={{ backgroundColor: colorItem.hexCode }}
                          title={colorItem.colorName}
                        >
                          {isSelected && <div className='absolute inset-0 flex items-center justify-center'></div>}
                        </div>
                      )
                    })
                  ) : (
                    <div className='text-sm text-gray-600'>Không có màu nào</div>
                  )}
                </div>
              </div>

              <div className='mt-8 flex items-center'>
                <div className='capitalize text-gray-500'>Số lượng</div>
                {/*  */}
                <QuantityController
                  onDecrease={handleBuyCount}
                  onIncrease={handleBuyCount}
                  onType={handleBuyCount}
                  value={buyCount}
                  max={10}
                />
                <div className='ml-6 text-sm text-gray-500'>10</div>
                <span className='ml-2 text-sm'>Sản phẩm có sẵn</span>
              </div>
              <div className='mt-8 flex items-center'>
                <button
                  onClick={addToCart}
                  className='cursor-pointer flex h-12 items-center justify-center rounded-sm border border-blue-600 bg-blue/10 px-5 capitalize text-blue-600 shadow-sm hover:bg-blue-500 hover:text-white'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 mr-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                    />
                  </svg>
                  Thêm vào giỏ hàng
                </button>
                <button
                  onClick={handleByNow}
                  className='cursor-pointer ml-4 flex h-12 min-w-[5rem] items-center justify-center
                bg-blue-700 px-5 capitalize text-white shadow-sm outline-none hover:bg-blue-500
                '
                >
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container mx-auto'>
          <div className='mt-8 bg-white p-4 shadow'>
            <div className='rounded bg-gray-50 p-4 text-lg capitalize text-slate-700'>Mô tả sản phẩm</div>
            <div className='mx-4 mt-12 mb-4 text-sm leading-loose'>
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
            </div>
          </div>
        </div>
        <div>Phần khác</div>
      </div>
    </div>
  )
}
