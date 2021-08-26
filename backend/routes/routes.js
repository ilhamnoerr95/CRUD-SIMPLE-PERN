const express = require('express');
const Router = express.Router();
const controller = require('../controllers/controllers')


//coba 
Router.get('/coba', controller.coba);

//CREATE TODO
Router.post('/todos', controller.addTodo);

// GET ALL TODO
Router.get('/todos', controller.allTodo)

// GET A TODO WITH ID
Router.get('/todos/:id', controller.getListById)

// UPDATE A TODO
Router.put('/todos/:id',controller.updateTodo)

// DELETE A TODO
Router.delete('/todos/:id',controller.deleteList)

module.exports = Router;