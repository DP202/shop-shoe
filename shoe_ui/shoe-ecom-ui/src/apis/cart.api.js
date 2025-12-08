import http from '../ultils/http'

const cartApi = {
  addToCart: (body) => http.post('/cart-items', body),
  updateCartItem: (cartItemId, body) => http.put(`/carts/${cartItemId}`, body),
  deleteCartItem: (cartItemId) => http.delete(`/carts/${cartItemId}`),
  deleleProductFromCart: (productId) => http.delete(`/products/${productId}`),
  getAllCart: () => http.get('/carts')
}

export default cartApi
