import { makeAutoObservable } from "mobx"

export default class ManagerStore {
    constructor() {
        this._isAuth = false
        this._manager = {}
        makeAutoObservable(this)
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setManager(manager) {
        this._manager = manager
    }

    get isAuth() {
        return this._isAuth
    }
    get manager() {
        return this._manager
    }
}