import http from '../ultils/http'

const cartApi = {
  addToCart: (body) => http.post('/cart-items', body),
  updateCartItem: (body) => http.patch('/cart-items', body),
  getAllCart: () => http.get('/carts'),
  buyCart: (body) => http.post('/orders', body),
  removeCart: (cartItemIds) => {
    const ids = Array.isArray(cartItemIds) ? cartItemIds : [cartItemIds]

    return http.delete('/cart-items', {
      data: ids
    })
  }
}

export default cartApi
