import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../../ultils/ultil'

const IMAGE_BASE_URL = 'http://localhost:8080/api/images/view'

export default function ProductItem({ product }) {
  console.log('product : ', product)
  return (
    <Link to={`/product/${product.id}`}>
      <div
        className='bg-white shadow rounded-sm hover:translate-y-[-0.0.04rem] hover:shadow-md duration-100
      transition-transform overflow-hidden'
      >
        <div className='w-full pt-[100%] relative bg-gray-50'>
          <img
            className='absolute top-0 left-0 w-full h-full object-contain p-1'
            src={`${IMAGE_BASE_URL}/${product.thumbnailUrl}`}
            alt={product.name}
          />
        </div>

        <div className='p-2 overflow-hidden'>
          <div className='text-[14px] text-gray-800 truncate min-h-[2rem]'>{product.name}</div>

          <div className='flex items-center mt-2 gap-2'>
            <div className='text-gray-400 text-xs font-semibold'>
              <span className='text-orange-500 text-xs'>đ</span>
              <span className='ml-1 text-sm text-orange-500 '>{formatCurrency(product.price || 150000)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
