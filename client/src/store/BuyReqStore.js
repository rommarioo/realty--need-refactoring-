import {makeAutoObservable} from 'mobx'

export default class BuyReqStore {
    constructor(){      
      
        this._buyreqs = []
        
        
        makeAutoObservable(this)
    }


    setBuyReq(buyreqs) {
        this._buyreqs = buyreqs
    }
    
    get buyreqs() {
        return this._buyreqs
    }
}