import { createSearchParams, useNavigate } from 'react-router-dom'

export default function SortProductList({ queryConfig, brands }) {
  // console.log('queryConfig : ', queryConfig)
  const navigate = useNavigate()

  const sortBy = queryConfig.sort_by || ''
  const sortOrder = queryConfig.sort_order || ''
  const currentBrandId = queryConfig.brand_id || ''

  const handleSortChange = (order) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        sort_by: 'price',
        sort_order: order,
        page: '1'
      }).toString()
    })
  }

  const handleChangeBrand = (e) => {
    const brandId = e.target.value
    const newQuery = { ...queryConfig, page: '1' }
    if (brandId === '' || brandId === currentBrandId) {
      delete newQuery.brand_id
    } else {
      newQuery.brand_id = brandId
    }

    navigate({
      pathname: '/',
      search: createSearchParams(newQuery).toString()
    })
  }

  return (
    <div className='bg-gray-300/40 py-4 px-3 '>
      <div className='flex flex-wrap items-center justify-between gap-2'>
        <div className='flex items-center justify-between flex-wrap gap-2'>
          <div className='mr-20'>Sắp xếp theo</div>
        </div>

        <div className='flex items-center '>
          <select
            value={currentBrandId}
            onChange={handleChangeBrand}
            className='mr-10 outline-none h-8 px-4 capitalize  text-sm text-left bg-white text-black  hover:bg-orange/80 cursor-pointer'
          >
            <option value=''>Thương hiệu</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>

          <select
            value={sortBy === 'price' ? sortOrder : ''}
            onChange={(e) => handleSortChange(e.target.value)}
            className='outline-none h-8 px-4 capitalize  text-sm text-left bg-white text-black  hover:bg-orange/80 cursor-pointer'
          >
            <option value='' disabled>
              Sắp xếp theo
            </option>
            <option value='asc'>Giá thấp đến cao</option>
            <option value='desc'>Giá cao đến thấp</option>
          </select>
        </div>
      </div>
    </div>
  )
}
