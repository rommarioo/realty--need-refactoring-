import {makeAutoObservable} from 'mobx'

export default class ClientStore {
    constructor(){      
        this._last_name = []
        this._first_name = []
        this._info = []
        this._email = []
        this._phone = []
        this._clients = []
        this._cratedAt = []
        
        makeAutoObservable(this)
    }



  
    setcratedAt(cratedAt) {
        this._cratedAt = cratedAt
    }
    
    get cratedAt() {
        return this._cratedAt
    }

setClients(clients) {
    this._clients = clients
}

get clients() {
    return this._clients
}

setLastName(last_name) {
    this._last_name = last_name
}

get last_name() {
    return this._last_name
}

setFirstName(first_name) {
    this._first_name = first_name
}

get first_name() {
    return this._first_name
}

setEmail(email) {
    this._email = email
}

get email() {
    return this._email
}

setPhone(phones) {
    this._phones = phones
}

get phones() {
    return this._phones
}


}