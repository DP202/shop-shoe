import categoryApi from '../../apis/category.api'
import productApi from '../../apis/product.api'
import AsideFilter from './components/AsideFilter/AsideFilter'
import ProductItem from './components/ProductItem/ProductItem'
import SortProductList from './components/SortProductList/SortProductList'
import { useQuery } from '@tanstack/react-query'

function ProductList() {
  const { data: productData } = useQuery({
    queryKey: ['products'],
    queryFn: () => productApi.getProduct()
  })

  const { data } = useQuery({
    queryKey: ['categories'],
    queryFn: () => categoryApi.getCategories()
  })
  const categories = data?.data?.data || []
  const products = productData?.data?.data?.content || []

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter categories={categories} />
          </div>
          <div class='col-span-9'>
            <SortProductList />

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
