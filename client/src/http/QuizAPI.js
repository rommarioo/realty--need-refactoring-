import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';


export const createQuiz = async (quiz) => {
    const {data} = await $host.post('api/client', quiz)
    return data
}

export const createBuyQuiz = async (buyreq) => {
    const {data} = await $host.post('api/buyreq', buyreq)
    return data
}

export const fetchOneRooms = async (id) => {
    const {data} = await $host.post('api/room/' + id)
    return data
}

export const createRooms = async (room) => {
    const {data} = await $host.post('api/room', room)
    return data
}

export const fetchRooms = async () => {
    const {data} = await $host.get('api/room')
    return data
}

export const createArea = async (area) => {
    const {data} = await $host.post('api/area', area)
    return data
}

export const fetchAreas = async () => {
    const {data} = await $host.get('api/area')
    return data
}

export const createDecoration = async (decoration) => {
    const {data} = await $host.post('api/decor', decoration)
    return data
}

export const fetchDecorations = async () => {
    const {data} = await $host.get('api/decor')
    return data
}

export const createDeadline = async (deadline) => {
    const {data} = await $host.post('api/deadlines', deadline)
    return data
}

export const fetchDeadlines = async () => {
    const {data} = await $host.get('api/deadlines')
    return data
}

export const createBudget = async (budget) => {
    const {data} = await $host.post('api/budget', budget)
    return data
}

export const fetchBudget = async () => {
    const {data} = await $host.get('api/budget')
    return data
}