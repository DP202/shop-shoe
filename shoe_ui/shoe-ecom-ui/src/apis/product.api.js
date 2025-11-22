import http from '../ultils/http'

const productApi = {
  getProduct: () => http.get('products'),
  getProductDetail: (id) => http.get(`products/${id}`)
}

export default productApi
