export interface Product {
  id: string
  name: string
  price: number
}

interface GetProductsFilters {
  id: string | null
  name: string | null
}

// Mock de chamada HTTP
export async function getProducts({ id, name }: GetProductsFilters) {
  // Simula delay de 1s
  await new Promise(resolve =>  setTimeout(resolve, 1000)) 

  let products = [
    { id: '482', name: 'Produto B', price: 35.67 },
    { id: '736', name: 'Produto L', price: 41.12 },
    { id: '159', name: 'Produto O', price: 26.34 },
    { id: '274', name: 'Produto H', price: 62.09 },
    { id: '571', name: 'Produto C', price: 69.78 },
    { id: '890', name: 'Produto S', price: 38.42 },
    { id: '901', name: 'Produto M', price: 21.27 },
    { id: '487', name: 'Produto T', price: 34.08 },
    { id: '684', name: 'Produto J', price: 51.47 },
    { id: '337', name: 'Produto R', price: 57.02 },
    { id: '802', name: 'Produto I', price: 30.71 },
    { id: '425', name: 'Produto F', price: 45.91 },
    { id: '563', name: 'Produto N', price: 65.58 },
    { id: '758', name: 'Produto E', price: 29.40 },
    { id: '649', name: 'Produto P', price: 23.87 },
    { id: '122', name: 'Produto D', price: 50.04 },
    { id: '509', name: 'Produto Q', price: 53.63 },
    { id: '276', name: 'Produto A', price: 26.80 },
    { id: '370', name: 'Produto G', price: 70.73 },
    { id: '615', name: 'Produto K', price: 45.14 }
  ]

  if(id) {
    products = products.filter(product => product.id.includes(id))
  }

  if(name) {
    products = products.filter(product => product.name.includes(name))
  }

   return products
}

interface CreateProductRequest {
  name: string,
  price: number,
}


export async function createProduct(data: CreateProductRequest) {
  // Simula delay de 1s
  await new Promise(resolve =>  setTimeout(resolve, 1000)) 

  return
}