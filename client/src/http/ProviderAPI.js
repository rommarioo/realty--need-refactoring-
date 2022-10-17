import { $authHost, $host } from "./index";



export const createprovider = async ({name, email, phone, area,  address, square, rooms,floor,statusbuild,typeHome}) => {
    const {data} = await $host.post('api/provider', {name, email, phone, area,  address, square, rooms,floor,statusbuild,typeHome })
    return data
}

export const fetchProvider = async () => {
    const {data} = await $host.get('api/provider')
    return data
}

//delete one card
export const DeleteProvider = async (id) => {
    const {data} = await $host.delete('api/provider/'+ id)
    
    return data;

}
//update card 
export const UpdateProvider = async (id, status) => {
    const {data} = await $host.put('api/provider/'+ id, {status})
    return data;
}