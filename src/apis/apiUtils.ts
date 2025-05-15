import api from './axiosConfig'
import type { AxiosResponse, AxiosError } from 'axios'

export default interface ApiResponse<T> {
  success: boolean
  result: T
  message?: string
  statusCode?: number
}

const extractErrorMessage = (error: AxiosError): string => {
  const data = error.response?.data ?? null

  if (typeof data === 'string') return data
  if (typeof data === 'object' && data !== null && 'msg' in data) return (data as any).msg
  return error.message || 'Unknown error'
}

// GET
export const get = async <T>(url: string, params?: object): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await api.get(url, { params })
    return {
      success: true,
      result: response.data
    }
  } catch (error) {
    const axiosError = error as AxiosError
    return {
      success: false,
      result: {} as T,
      message: extractErrorMessage(axiosError),
      statusCode: axiosError.response?.status || 500
    }
  }
}

// POST
export const post = async <T>(url: string, data: object): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await api.post(url, data)
    return {
      success: true,
      result: response.data
    }
  } catch (error) {
    const axiosError = error as AxiosError
    return {
      success: false,
      result: {} as T,
      message: extractErrorMessage(axiosError),
      statusCode: axiosError.response?.status || 500
    }
  }
}

// PUT
export const put = async <T>(url: string, data?: object | string): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await api.put(url, data)
    return {
      success: true,
      result: response.data
    }
  } catch (error) {
    const axiosError = error as AxiosError
    return {
      success: false,
      result: {} as T,
      message: extractErrorMessage(axiosError),
      statusCode: axiosError.response?.status || 500
    }
  }
}

// DELETE
export const del = async <T>(url: string, data?: object): Promise<ApiResponse<T>> => {
  try {
    const response: AxiosResponse<T> = await api.delete(url, { data })
    return {
      success: true,
      result: response.data
    }
  } catch (error) {
    const axiosError = error as AxiosError
    return {
      success: false,
      result: {} as T,
      message: extractErrorMessage(axiosError),
      statusCode: axiosError.response?.status || 500
    }
  }
}