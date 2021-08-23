import client from './client'

export const updateLog = (id, log) => {
  return client.put(`/logs/${id}`, log)
}

export const createLog = () => {
  return client.post(`/logs`, {});
}

export const deleteLog = id => {
  return client.delete(`/logs/${id}`, {});
}
