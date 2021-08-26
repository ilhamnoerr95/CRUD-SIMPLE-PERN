const express = require('express');
const app = express();

const morgan = require('morgan')
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();

// TAKE SEQUELIZE FROM CONNECTION
const sequelize = require('./config/connections')

const PORT = process.env.PORT || 4000;

// MIDDLEWARE:
morgan('tiny')
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
      extended: true,
    })
  );

// ROUTES MIDDLEWARE:
app.use('/api', require('./routes/routes'))


// connection->
sequelize.sync()
    .then(app.listen(PORT,
        console.log(chalk.keyword('orange')(`server running on localhost:${PORT}`))
        ));

