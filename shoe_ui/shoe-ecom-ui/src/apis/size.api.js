import http from '../ultils/http'

const sizeApi = {
  getSizes: () => http.get('sizes')
}

export default sizeApi
