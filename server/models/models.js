const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const moment = require('moment')

const Manager = sequelize.define('manager',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
})

const Client = sequelize.define('client',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.STRING, defaultValue: moment().format('DD-MM-YYYY')},
    last_name: {type: DataTypes.STRING },
    first_name: {type: DataTypes.STRING },
    email: {type: DataTypes.STRING },
    phone: {type: DataTypes.STRING},
    roomName: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    areaName: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    budgetName: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    decorationName: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    typeHome: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    typeBuy: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    status: {type: DataTypes.STRING, defaultValue: 'Не обработана'},
})

const SaleRequest = sequelize.define('salerequest', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.STRING, defaultValue: moment().format('DD-MM-YYYY')},
    last_name: {type: DataTypes.STRING, defaultValue: ' ' },
    first_name: {type: DataTypes.STRING },
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},//
    address: {type: DataTypes.STRING},
    floor: {type: DataTypes.INTEGER},
    rooms: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    square: {type: DataTypes.INTEGER},
    remont: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},//ремонт
    typeHome: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    price: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, defaultValue: 'Не обработана'},
})

const Provider = sequelize.define('provider', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.STRING, defaultValue: moment().format('DD-MM-YYYY')},
    name: {type: DataTypes.STRING },
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},//
    area: {type: DataTypes.STRING},//район
    address: {type: DataTypes.STRING},//адрес
    square: {type: DataTypes.STRING},
    rooms: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    floor: {type: DataTypes.STRING},//этажность домов
    statusbuild: {type: DataTypes.STRING},
    typeHome: {type: DataTypes.STRING, defaultValue: 'Ничего не выбрано'},
    //срок сдачи
    //
    status: {type: DataTypes.STRING, defaultValue: 'Не обработана'},
})



const QuizProperty = sequelize.define('quizproperty', {
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})

const Rooms = sequelize.define('rooms',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    room: {type: DataTypes.STRING},
    
})

const Areas = sequelize.define('areas',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    area: {type: DataTypes.STRING},
    
})

const Decorations = sequelize.define('decorations',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    decoration: {type: DataTypes.STRING},
    
})

const Deadlines = sequelize.define('deadlines',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    deadline: {type: DataTypes.STRING},
    
})

const Budgets = sequelize.define('budget',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    budget: {type: DataTypes.STRING},
    
})


const AllRequest = sequelize.define('allrequest',{
    id:  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    
})



Client.hasOne(QuizProperty)
QuizProperty.belongsTo(Client)

QuizProperty.hasMany(AllRequest)
AllRequest.belongsTo(QuizProperty)

Manager.hasMany(AllRequest)
AllRequest.belongsTo(Manager)




module.exports = {
    Manager,
    Client,
    AllRequest,
    QuizProperty,
    Rooms,
    Areas,
    Decorations,
    Deadlines,
    Budgets,
    SaleRequest,
    Provider
}