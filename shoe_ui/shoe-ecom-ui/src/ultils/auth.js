// @ts-ignore
export const setAccessToken = (token) => {
  localStorage.setItem('access_token', token)
}

export const clearLocalStorage = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenLocalStorage = () => {
  return localStorage.getItem('access_token') || ''
}
