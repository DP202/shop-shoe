import http from '../ultils/http'

const productApi = {
  getProduct: () => http.get('products'),
  getProducts: (queryConfig = {}) => {
    return http.get('products', {
      params: queryConfig
    })
  },
  getProductDetail: (id) => http.get(`products/${id}`),
  getColorProduct: (colorId) => http.get(`products/colorId/${colorId}`)
}

export default productApi
