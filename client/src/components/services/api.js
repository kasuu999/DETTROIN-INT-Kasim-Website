import axios from 'axios'

const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Normalize errors into a friendly message
const handleError = (error) => {
  const message =
    error?.response?.data?.message ||
    error?.message ||
    'Something went wrong. Please try again.'
  throw new Error(message)
}

export const submitEnquiry = async (payload) => {
  try {
    const { data } = await api.post('/enquiry', payload)
    return data
  } catch (error) {
    handleError(error)
  }
}

export const getEnquiries = async () => {
  try {
    const { data } = await api.get('/enquiry')
    return data
  } catch (error) {
    handleError(error)
  }
}

export const getNotices = async () => {
  try {
    const { data } = await api.get('/notices')
    return data
  } catch (error) {
    handleError(error)
  }
}

export const addNotice = async (payload) => {
  try {
    const { data } = await api.post('/notices', payload)
    return data
  } catch (error) {
    handleError(error)
  }
}

export const deleteNotice = async (id) => {
  try {
    const { data } = await api.delete(`/notices/${id}`)
    return data
  } catch (error) {
    handleError(error)
  }
}

export default api