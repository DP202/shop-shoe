import categoryApi from '../../apis/category.api'
import productApi from '../../apis/product.api'
import brandApi from '../../apis/brands.api'
import { useQueryConfig } from '../../ultils/ultil'
import AsideFilter from './components/AsideFilter/AsideFilter'
import ProductItem from './components/ProductItem/ProductItem'
import SortProductList from './components/SortProductList/SortProductList'
import { useQuery } from '@tanstack/react-query'
import colorApi from '../../apis/color.api'
import sizeApi from '../../apis/size.api'
import Pagination from '../../components/Pagination/Pagination'

function ProductList() {
  const queryConfig = useQueryConfig()
  const { data: productData } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => productApi.getProducts(queryConfig)
  })

  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryApi.getCategories()
  })

  const { data: brandData } = useQuery({
    queryKey: ['brands'],
    queryFn: () => brandApi.getBrands()
  })

  const { data: colorData } = useQuery({
    queryKey: ['colors'],
    queryFn: () => colorApi.getColors()
  })

  const { data: sizeData } = useQuery({
    queryKey: ['sizes'],
    queryFn: () => sizeApi.getSizes()
  })
  // console.log('sizeData : ', sizeData)

  const categories = data?.data?.data || []
  const products = productData?.data?.data?.content || []
  const brands = brandData?.data?.data || []
  const colors = colorData?.data?.data || []
  const sizes = sizeData?.data?.data || []
  // console.log('sizes data : ', sizes)

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter categories={categories} queryConfig={queryConfig} colors={colors} sizes={sizes} />
          </div>
          <div className='col-span-9'>
            <SortProductList queryConfig={queryConfig} brands={brands} />

            <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3'>
              {products.length > 0 ? (
                products.map((product) => (
                  <div className='col-span-1' key={product.id}>
                    <ProductItem product={product} />
                  </div>
                ))
              ) : (
                <div className='col-span-full text-center py-10 text-gray-500'>No products found</div>
              )}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
