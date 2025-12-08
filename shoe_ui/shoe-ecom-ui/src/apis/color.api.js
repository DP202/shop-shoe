import http from '../ultils/http'

const colorApi = {
  getColors: () => http.get('colors')
}

export default colorApi
