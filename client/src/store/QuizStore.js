import {makeAutoObservable} from 'mobx'

export default class QuizStore {
    constructor(){
        this._decorations = []
        this._deadlines = []
        this._budgets = []
        this._selectedDecorations = {}
        this._selectedDeadlines = {}
        this._selectedBudgets = {}
        makeAutoObservable(this)
    }
//Селектеды для дроп баттонов в квизе
setSelectedDecorations(decorations) {
    this._selectedDecorations = decorations
}
get selectedDecorations() {
    return this._selectedDecorations
}

setSelectedDeadlines(deadlines) {
    this._selectedDeadlines = deadlines
}

get selectedDeadlines() {
    return this._selectedDeadlines
}

setSelectedBudgets(budgets) {
    this._selectedBudgets = budgets
}

get selectedBudgets() {
    return this._selectedBudgets
}


setDecorations(decorations) {
    this._decorations = decorations
}

get decorations() {
    return this._decorations
}

setDeadlines(deadlines) {
    this._deadlines = deadlines
}

get deadlines() {
    return this._deadlines
}

setBudgets(budgets) {
    this._budgets = budgets
}

get budgets() {
    return this._budgets
}

}