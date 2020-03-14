import apisauce from 'apisauce'
import Axios, { AxiosRequestConfig } from 'axios'
import localforage from 'localforage'
import { API_URL } from '../constants'

localforage.setDriver(localforage.INDEXEDDB)

const cacheAdapter = async (config: AxiosRequestConfig): Promise<any> => {
  const key = `${config.url}|${JSON.stringify(config.params, Object.keys(config.params).sort())}`
  try {
    const data = await Axios.defaults.adapter!(config)
    localforage.setItem(key, data.data)
    return data
  } catch (err) {
    console.log(err.message, err.code)
    if (err.message === 'Network Error') {
      const cachedData = await localforage.getItem(key)
      if (cachedData) {
        console.log('has cache data')
        return {
          data: cachedData,
          status: 200,
          statusText: 'OK (Cache)',
          config,
          request: err.request,
        }
      }
    }
    return err
  }
}

export const api = apisauce.create({
  baseURL: API_URL,
  adapter: cacheAdapter,
})
