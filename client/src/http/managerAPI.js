import { $authHost, $host } from "./index";
import jwt_decode from 'jwt-decode';

export const registration = async (login, password) => {
    const {data} = await $host.post('api/admin/registration', {login, password})
    return jwt_decode(data.token)
}

export const logined = async (login, password) => {
    const {data} = await $host.post('api/admin/login', {login, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/admin/auth')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}