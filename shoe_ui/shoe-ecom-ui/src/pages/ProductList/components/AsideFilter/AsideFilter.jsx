import { Link } from 'react-router-dom'
import Input from '../../../../components/Input/Input'

export default function AsideFilter({ categories }) {
  return (
    <div className='py-4 '>
      <Link to='/' className={'flex items-center font-bold'}>
        <svg viewBox='0 0 12 10' className='w-3 h-4 mr-3 fill-current'>
          <g fill-rule='evenodd' stroke='none' stroke-width='1'>
            <g transform='translate(-373 -208)'>
              <g transform='translate(155 191)'>
                <g transform='translate(218 17)'>
                  <path d='m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                  <path d='m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                  <path d='m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z'></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        Tất cả danh mục
      </Link>

      <div className='bg-gray-300 h-[1px] my-4'></div>
      <ul>
        {categories.map((categoryItem) => {
          return (
            <li className='py-2 pl-5 ' key={categoryItem._id}>
              <Link to='/' className='relative px-2 text-orange-500 font-semibold'>
                <svg viewBox='0 0 4 7' className='fill-orange-500 h-2 w-2 absolute top-1 left-[-10px]'>
                  <polygon points='4 3.5 0 0 0 7'></polygon>
                </svg>
                {categoryItem.name}
              </Link>
            </li>
          )
        })}
      </ul>

      <Link to='/' className='flex items-center font-bold mt-4 uppercase'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-4 mr-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
          />
        </svg>
        Bộ lọc tìm kiếm
      </Link>

      <div className='bg-gray-300 h-[1px] my-4'></div>

      <div className='my-5'>
        <div>Khoản giá</div>
        <form className='mt-2'>
          <div className='flex items-start'>
            <Input
              type='text'
              className='grow'
              placeholder='đ TỪ'
              name='from'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
            <div className='mx-2 mt-2 shrink-0 '>-</div>
            <Input
              type='text'
              className='grow'
              classNameError='hidden'
              name='from'
              placeholder='đ ĐẾN'
              classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
            />
          </div>
          <button className='cursor-pointer w-full p-2 uppercase bg-orange-600 text-white text-sm hover:bg-orange/80 flex justify-center items-center'>
            Áp dụng
          </button>
        </form>
      </div>

      <div className='bg-gray-300 h-[1px] my-4'></div>
      <div className='text-sm'>Đánh giá</div>
      {/* Sao */}

      <div className='bg-gray-300 h-[1px] my-4'></div>

      <button className='cursor-pointer w-full py-2 ppx-2 uppercase bg-orange-600 text-white text-sm'>
        Xóa tất cả
      </button>
    </div>
  )
}
