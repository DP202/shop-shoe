import http from '../ultils/http'

const categoryApi = {
  getCategories: () => http.get('categories')
}

export default categoryApi
