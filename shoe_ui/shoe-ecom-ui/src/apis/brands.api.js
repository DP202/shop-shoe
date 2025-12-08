import http from '../ultils/http'

const brandApi = {
  getBrands: () => http.get('brands')
}

export default brandApi
