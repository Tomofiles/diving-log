import client from './client'
 
const updateLog = (id, log) => {
  return client.put(`/logs/${id}`, log)
}

export default updateLog;