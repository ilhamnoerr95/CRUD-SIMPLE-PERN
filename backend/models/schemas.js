const Sequelize = require('sequelize');

// CALL CONNECTION DATABASE:
const db = require('../config/connections');

//CONNECT TO TABLE DENGAN NAMA IRAHAMA:
const Schema = db.define('todolist',{
    description:{
        type: Sequelize.STRING
    }
})

module.exports = Schema;