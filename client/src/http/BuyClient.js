import { $authHost, $host } from "./index";



export const createbuyreq = async (last_name,first_name, email, phone, address, floor, rooms, square, remont, typeHome,price ) => {
    const {data} = await $host.post('api/buyreq', {last_name,first_name, email, phone, address, floor, rooms, square, remont, typeHome,price })
    return data
}

export const fetchBuyreq = async () => {
    const {data} = await $host.get('api/buyreq')
    return data
}

//delete one card
export const DeleteRequestBuy = async (id) => {
    const {data} = await $host.delete('api/buyreq/'+ id)
    
    return data;

}
//update card 
export const UpdateRequestBuy = async (id, status) => {
    const {data} = await $host.put('api/buyreq/'+ id, {status})
    return data;
}