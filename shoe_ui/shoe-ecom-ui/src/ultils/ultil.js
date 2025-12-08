import { useSearchParams } from 'react-router-dom'

export function formatCurrency(currency) {
  return new Intl.NumberFormat('de-DE').format(currency)
}

export const useQueryConfig = () => {
  const [searchParams] = useSearchParams()
  const queryConfig = {
    name: searchParams.get('name') || undefined,
    price_min: searchParams.get('price_min') || undefined,
    price_max: searchParams.get('price_max') || undefined,
    sort_by: searchParams.get('sort_by') || undefined,
    sort_order: searchParams.get('sort_order') || 'desc',
    page: searchParams.get('page') || '1',
    limit: searchParams.get('limit') || '20',
    status: searchParams.get('status') || undefined,
    category_id: searchParams.get('category_id') || undefined,
    brand_id: searchParams.get('brand_id') || undefined,
    colorCode: searchParams.get('colorCode') || undefined,
    sizeCode: searchParams.get('sizeCode') || undefined
  }
  Object.keys(queryConfig).forEach((key) => {
    if (queryConfig[key] === undefined || queryConfig[key] === '') {
      delete queryConfig[key]
    }
  })

  return queryConfig
}
