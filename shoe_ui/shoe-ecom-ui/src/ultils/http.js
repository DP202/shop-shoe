import axios from 'axios'
import { toast } from 'react-toastify'
import { getAccessTokenLocalStorage, setAccessToken } from './auth.js'
import { clearLocalStorage } from './auth.js'

class Http {
  constructor() {
    this.accessToken = getAccessTokenLocalStorage()
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
          config.headers.authorization = this.accessToken
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === 'auth/login' || url === 'user/register') {
          const token = response.data.data.token
          this.accessToken = token
          setAccessToken(token)
        } else if (url === 'auth/logout') {
          this.accessToken = ''
          clearLocalStorage()
        }
        return response
      },
      (error) => {
        if (error.response) {
          const status = error.response.status
          const data = error.response.data || {}
          if (status === 400 || status === 422 || status === 401) {
            toast.error(data.message || 'Có lỗi xảy ra')
          } else if (status >= 500) {
            toast.error('Lỗi máy chủ, vui lòng thử lại sau!')
          }
        } else {
          toast.error('Không kết nối được đến server!')
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http

// // http.js
// import axios from 'axios'
// import { toast } from 'react-toastify'
// import { getAccessTokenLocalStorage, setAccessToken, clearLocalStorage } from './auth.js'

// class Http {
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'http://localhost:8080/api/',
//       timeout: 15000,
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })

//     // Interceptor request: luôn lấy token mới nhất từ LS
//     this.instance.interceptors.request.use(
//       (config) => {
//         const token = getAccessTokenLocalStorage()
//         if (token) {
//           config.headers.authorization = token
//         }
//         return config
//       },
//       (error) => Promise.reject(error)
//     )

//     // Interceptor response
//     this.instance.interceptors.response.use(
//       (response) => {
//         const { url } = response.config
//         if (url?.endsWith('/auth/login') || url?.endsWith('/user/register')) {
//           const token = response.data.data?.token
//           if (token) {
//             setAccessToken(token)
//           }
//         } else if (url?.endsWith('/auth/logout')) {
//           clearLocalStorage()
//         }
//         return response
//       },
//       (error) => {
//         // Chỉ toast lỗi nếu không phải 422 (validation) hoặc các lỗi đã được xử lý riêng
//         if (error.response) {
//           const status = error.response.status
//           const data = error.response.data || {}

//           // Tránh toast 2 lần khi đã có lỗi validate form
//           if (![400, 401, 422].includes(status)) {
//             toast.error(data.message || 'Có lỗi xảy ra')
//           } else if (status >= 500) {
//             toast.error('Lỗi máy chủ, vui lòng thử lại sau!')
//           }
//         } else {
//           toast.error('Không kết nối được đến server!')
//         }

//         return Promise.reject(error)
//       }
//     )
//   }
// }

// const http = new Http().instance
// export default http
