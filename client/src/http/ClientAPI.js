import { $authHost, $host } from "./index";



export const createClients = async (name, email, phone, roomId, areaId, decorationId, deadlineId, budgetId ) => {
    const {data} = await $host.post('api/client', {name, email, phone, roomId, areaId, decorationId, deadlineId, budgetId })
    return data
}

export const fetchClients = async () => {
    const {data} = await $host.get('api/client')
    return data
}

//delete one card
export const DeleteRequest = async (id) => {
    const {data} = await $host.delete('api/client/'+ id)
    
    return data;

}
//update card 
export const UpdateRequest = async (id, status) => {
    const {data} = await $host.put('api/client/'+ id, {status})
    return data;
}