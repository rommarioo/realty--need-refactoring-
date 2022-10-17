import {makeAutoObservable} from 'mobx'

export default class ProviderStore {
    constructor(){      
      
        this._providers = []
        
        
        makeAutoObservable(this)
    }


    setProviders(providers) {
        this._providers = providers
    }
    
    get providers() {
        return this._providers
    }
}