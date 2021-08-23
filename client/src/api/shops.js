import client from './client'

export const updateShop = (id, shop) => {
  return client.put(`/shops/${id}`, shop);
}

export const createShop = () => {
  return client.post(`/shops`, {});
}

export const deleteShop = id => {
  return client.delete(`/shops/${id}`, {});
}
