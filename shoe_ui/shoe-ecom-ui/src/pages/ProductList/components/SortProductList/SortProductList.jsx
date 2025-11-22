export default function SortProductList() {
  return (
    <div className='bg-gray-300/40 py-4 px-3 '>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center flex-wrap gap-2'>
          <div>Sắp xếp theo</div>
          <button className='bg-orange-500 text-black  hover:bg-orange/80  h-8 px-4 text-center text-sm capitalize cursor-pointer '>
            Phổ biến
          </button>

          <button className='bg-white text-black  hover:bg-orange/80  h-8 px-4 text-center text-sm capitalize cursor-pointer '>
            Mới nhất
          </button>

          <button className='bg-white text-black  hover:bg-orange/80  h-8 px-4 text-center text-sm capitalize cursor-pointer '>
            Bán chạy
          </button>
        </div>

        <div className='flex items-center '>
          <select className='outline-none h-8 px-4 capitalize  text-sm text-left bg-white text-black  hover:bg-orange/80 cursor-pointer'>
            <option>Giá thấp đến cao</option>
            <option>Giá cao đến thấp</option>
          </select>
        </div>
      </div>
    </div>
  )
}
