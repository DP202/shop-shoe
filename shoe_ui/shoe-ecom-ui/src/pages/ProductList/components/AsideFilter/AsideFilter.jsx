import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import InputNumber from '../../../../components/InputNumber/InputNumber'
import { useForm, Controller } from 'react-hook-form'
import { schema } from '../../../../ultils/rules'
import { yupResolver } from '@hookform/resolvers/yup'

export default function AsideFilter({ categories, queryConfig, colors, sizes }) {
  const currentCategoryId = queryConfig.category_id
  const priceSchema = schema.pick(['price_min', 'price_max'])

  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    trigger,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      price_min: queryConfig.price_min || '',
      price_max: queryConfig.price_max || ''
    },
    resolver: yupResolver(priceSchema),
    shouldFocusError: false
  })

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: '/',
      search: createSearchParams({
        ...queryConfig,
        price_max: data.price_max,
        price_min: data.price_min
      }).toString()
    })
  })

  const deleteAll = () => {
    reset({ price_min: '', price_max: '' })
    navigate('/?page=1&limit=20')
  }
  return (
    <div className='py-4 '>
      <Link
        to={{
          pathname: '/',
          search: createSearchParams({
            ...queryConfig,
            category_id: undefined
          }).toString()
        }}
        className='flex items-center  text-[16px] font-semibold text-gray-900 mb-4'
      >
        <svg viewBox='0 0 12 10' className='w-3 h-4 mr-3 fill-current'>
          <g fillRule='evenodd' stroke='none' strokeWidth='1'>
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
          const isActive = currentCategoryId == categoryItem.id

          return (
            <li className='py-2 pl-5' key={categoryItem.id}>
              <Link
                to={{
                  pathname: '/',
                  search: createSearchParams({
                    ...queryConfig,
                    category_id: categoryItem.id
                  }).toString()
                }}
                className={classNames('relative font-medium transition-colors', {
                  'text-orange-500 font-semibold': isActive,
                  'text-gray-700 hover:text-orange-500': !isActive
                })}
              >
                {isActive && (
                  <svg viewBox='0 0 4 7' className='fill-orange-500 h-2 w-2 absolute top-1 left-[-10px]'>
                    <polygon points='4 3.5 0 0 0 7' />
                  </svg>
                )}
                {categoryItem.name}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className='bg-gray-300 h-[1px] my-4'></div>

      <div className='my-6'>
        <div className='text-[16px] font-semibold text-gray-900 mb-4 '>Kích thước</div>

        <div className='grid grid-cols-4 gap-3 '>
          {sizes.map((sizeItem) => {
            const isActiveSize = queryConfig.sizeCode === sizeItem.code
            return (
              <button
                key={sizeItem.code}
                onClick={() => {
                  const newQuery = { ...queryConfig, page: '1' }

                  if (isActiveSize) {
                    delete newQuery.sizeCode
                  } else {
                    newQuery.sizeCode = sizeItem.code
                  }
                  navigate({
                    pathname: '/',
                    search: createSearchParams(newQuery).toString()
                  })
                }}
                className={classNames(
                  'cursor-pointer py-3 px-6 rounded-md border border-gray-300 text-gray-700 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200',
                  {
                    'bg-blue-600 text-white border-blue-600': isActiveSize,
                    'border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-600':
                      !isActiveSize
                  }
                )}
              >
                {sizeItem.name}
              </button>
            )
          })}
        </div>
      </div>

      <div className='bg-gray-300 h-[1px] my-4'></div>

      <div className='my-5'>
        <div className='text-[16px] font-semibold text-gray-900 mb-4'>Khoản giá</div>
        <form className='mt-2' onClick={onSubmit}>
          <div className='flex items-start'>
            <Controller
              control={control}
              name='price_min'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    placeholder='đ TỪ'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    onChange={(event) => {
                      ;(field.onChange(event), trigger('price_max'))
                    }}
                    value={field.value}
                    ref={field.ref}
                  />
                )
              }}
            />

            <div className='mx-2 mt-2 shrink-0 '>-</div>

            <Controller
              control={control}
              name='price_max'
              render={({ field }) => {
                return (
                  <InputNumber
                    type='text'
                    className='grow'
                    placeholder='đ ĐẾN'
                    classNameInput='p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm'
                    classNameError='hidden'
                    onChange={(event) => {
                      ;(field.onChange(event), trigger('price_min'))
                    }}
                    value={field.value}
                    ref={field.ref}
                  />
                )
              }}
            />
          </div>
          <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm text-center'>{errors.price_min?.message}</div>

          <button className='mt-1 hover:bg-blue-400 cursor-pointer w-full p-2 uppercase bg-blue-600 text-white text-sm hover:bg-blue/80 flex justify-center items-center'>
            Áp dụng
          </button>
        </form>
      </div>

      <div className='bg-gray-300 h-[1px] my-4'></div>
      <div className='my-6'>
        <div className='text-[16px] font-semibold text-gray-900 mb-4'>Màu sắc</div>

        <div className='flex flex-wrap '>
          {colors.slice(0, 12).map((colorItem) => {
            const isActive = queryConfig.colorCode === colorItem.code

            return (
              <div key={colorItem.code} className='w-1/4 px-2 mb-3 '>
                <button
                  onClick={() => {
                    navigate({
                      pathname: '/',
                      search: createSearchParams({
                        ...queryConfig,
                        colorCode: isActive ? undefined : colorItem.code,
                        page: '1'
                      }).toString()
                    })
                  }}
                  className='flex flex-col items-center group'
                >
                  <div
                    className={classNames('w-8 h-8 rounded-full shadow-md cursor-pointer ', {
                      'border-black border-[1px]': isActive,
                      'group-hover:border-blue-500': true
                    })}
                    style={{ backgroundColor: colorItem.hexCode }}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className='bg-gray-300 h-[1px] my-4'></div>
      <button
        onClick={deleteAll}
        className='mt-1 cursor-pointer w-full p-2 uppercase bg-blue-600 text-white text-sm hover:bg-blue/80 flex justify-center items-center hover:bg-blue-400'
      >
        Xóa tất cả
      </button>
    </div>
  )
}
