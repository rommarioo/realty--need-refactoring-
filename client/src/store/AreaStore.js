import {makeAutoObservable} from 'mobx'

export default class AreaStore {
    constructor(){      
        this._areas = []
        this._selectedArea = {}
        makeAutoObservable(this)
    }


setAreas(areas) {
    this._areas = areas
}

get areas() {
    return this._areas
}
setSelectedArea(areas){
    this._selectedArea = areas
}

get selectedArea() {
    return this._selectedArea
}

}