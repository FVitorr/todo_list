import api, { ApiResponse, formatApiError } from './api_service'
import {Task} from '../interface/TaskInterface'


export interface ICreateTaskRequest {
  description: string
  user: {
    id: number
  }
}

export interface IUpdateTaskRequest {
  id: number
  data: {
    description: string
  }
}

export interface IUpdateTaskResponse {
  id: number
  user: {
    id: number
    username: string
  }
  description: string
}

export const getAllTasks = async (): Promise<
  ApiResponse<Task[]>
> => {
  try {
    const response = await api.get('/task/user/1')
    console.log("resposnse" ,response.data)
    return {
      error: false,
      body: response.data as Task[],
    }
  } catch (error: unknown) {
    return formatApiError(error)
  }
}

export const createTask = async (
  data: Task
): Promise<ApiResponse<Task>> => {
  try {
    const response = await api.post('/tasks', data)
    return {
      error: false,
      body: response.data.body as Task,
    }
  } catch (error: unknown) {
    return formatApiError(error)
  }
}

export const getUniqueTask = async (
  id: string
): Promise<ApiResponse<Task>> => {
  try {
    const response = await api.get(`/tasks/${id}`)
    return {
      error: false,
      body: response.data.body as Task,
    }
  } catch (error: unknown) {
    return formatApiError(error)
  }
}

export const updateTaks = async (
  data: IUpdateTaskRequest
): Promise<ApiResponse<IUpdateTaskResponse>> => {
  try {
    const response = await api.put(`/tasks/${data.id}`, data.data)
    return {
      error: false,
      body: response.data.body as IUpdateTaskResponse,
    }
  } catch (error: unknown) {
    return formatApiError(error)
  }
}

export const deleteTask = async (
  id: number
): Promise<ApiResponse<Record<string, never>>> => {
  try {
    const response = await api.delete(`/tasks/${id}`)
    return {
      error: false,
      body: response.data.body as Record<string, never>,
    }
  } catch (error: unknown) {
    return formatApiError(error)
  }
}
