// http.js – sửa thành như này (chỉ thay đổi phần dưới cùng)

import axios from 'axios'
import { getAccessTokenLocalStorage, setAccessToken } from './auth.js'
import { clearLocalStorage } from './auth.js'

class Http {
  constructor() {
    this.accessToken = getAccessTokenLocalStorage()
    console.log('Token khi khởi tạo Http:', this.accessToken ? 'Có token' : 'Không có token')

    this.instance = axios.create({
      baseURL: 'http://localhost:8080/api/',
      timeout: 15000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers['Authorization'] = `Bearer ${this.accessToken}`
          console.log('Đang gửi request tới:', config.url, '| Token hiện tại: CÓ (dài ' + this.accessToken.length + ')')
        } else {
          console.log('Gửi request KHÔNG có token tới:', config.url)
        }
        return config
      },
      (error) => Promise.reject(error)
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === 'auth/login' || url === 'user/register') {
          const token = response.data.data.token
          this.accessToken = token
          setAccessToken(token)
          console.log('Đăng nhập thành công - Token mới:', token.substring(0, 20) + '...')
        } else if (url === 'auth/logout') {
          this.accessToken = ''
          clearLocalStorage()
          console.log('Đã đăng xuất - Token đã bị xóa')
        }
        return response
      },
      (error) => {
        if (error.response?.status === 401) {
          console.log('401 - Token hết hạn hoặc không hợp lệ')
        }
        return Promise.reject(error)
      }
    )
  }
}

let httpInstance = null

if (!httpInstance) {
  httpInstance = new Http().instance
}

export default httpInstance
