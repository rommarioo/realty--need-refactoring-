import {makeAutoObservable} from 'mobx'

export default class RoomStore {
    constructor(){
        this._selectedRoom = {}
        this._rooms = []
        this._room = []
        makeAutoObservable(this)
    }

    setRooms(rooms) {
        this._rooms = rooms
    }
    
    get rooms() {
        return this._rooms
    }

    setRoom(room) {
        this._room = room
    }
    
    get room() {
        return this._room
    }

    setSelectedRoom(rooms){
        this._selectedRoom = rooms
    }
    
    get selectedRoom() {
        return this._selectedRoom
    }



}