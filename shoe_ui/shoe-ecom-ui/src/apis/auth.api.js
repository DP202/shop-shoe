import { getAccessTokenLocalStorage } from '../ultils/auth'
import http from '../ultils/http'

const authApi = {
  registerAccount: (body) => {
    return http.post('users/register', body)
  },
  loginAccount: (body) => {
    return http.post('auth/login', body)
  },
  logoutAccount: () => {
    const token = getAccessTokenLocalStorage()
    return http.post('auth/logout', { token })
  }
}

export default authApi
