import client from './client'
 
const updateShop = (id, shop) => {
  return client.put(`/shops/${id}`, shop)
}

export default updateShop;