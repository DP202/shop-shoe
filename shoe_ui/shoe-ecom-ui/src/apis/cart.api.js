import http from '../ultils/http'

const cartApi = {
  addToCart: (body) => http.post('/cart-items', body),
  updateCartItem: (body) => http.patch('/cart-items', body),

  deleteProductFromCart: (productVariantId) => http.delete(`/products/${productVariantId}`),
  getAllCart: () => http.get('/carts')
}

export default cartApi
