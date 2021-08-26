const Sequelize = require("sequelize");
const chalk = require('chalk');

// PARAMETER PERTAMA: NAMA DATABASE, 
// ** PARAMETER KEDUA: NAMA USER,
// ** PARAMETER KETIGA: PASSWORD
const db = new Sequelize('pern', 'irahama', 'gembel140',{
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})

db.authenticate()
    .then(()=> console.log(chalk.green('DATABASE IS CONNECTED!')))
    .catch(err=> console.err(err));

    // dilempar ke dalam schma
module.exports = db; 