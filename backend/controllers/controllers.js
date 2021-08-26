const Schema = require('../models/schemas')

exports.coba = ((req,res)=>{
    res.status(200).send({
        data: 'data masuk'
    })
})

// PROMISE
// exports.allTodo = (req,res)=>{
//     Schema.findAll()
//     .then(data =>{
//         res.status(200).json({
//             data: data,
//             message: 'All Data Todo List'
//         })
//     })
//     .catch(error=>{
//         next(error)
//     })
// }

// DISPLAY ALL DATA WITH TRY AND CATCH:
exports.allTodo = async(req,res)=>{
    try {
       const data = await Schema.findAll()
       res.status(200).json({
           data: data,
           message: 'All Data Todo List'
       })
    } catch (error) {
        console.error(error)
    }
}

// GET DATA PER ID :
exports.getListById = async(req,res)=>{
    try {
        // console.log(req.params)
        const dataList = await Schema.findByPk(req.params.id)
        res.status(200).json({
            data: dataList,
            message: 'Get Data By Id'
        })
        // res.json(dataList)
    } catch (error) {
        console.error(error)
    }
} 

//ADDING DATA:
exports.addTodo = (async (req,res)=>{
    try {
        // console.log(req.body)
        const {description} = req.body;
        
        const newAdd = await Schema.create({
            description:description
        })
        res.status(200).json({
            data: newAdd,
            message: 'Sukses Di Add'
        })

    } catch (error) {
        console.error(error)
    }
})

// UPDATE DATA:
exports.updateTodo = async(req,res)=>{
    try {
        const dataList = await Schema.findByPk(req.params.id)

        if(!dataList){
            res.status(404).json({
                message: 'ID DATA TIDAK ADA'
            })
        } else {
            const data = await dataList.update({
                description: req.body.description
            })
            res.status(200).json({
                data:data,
                message:'DATA SUCCESS UPDATED'
            })
        }
        
    } catch (error) {
        console.error(error)
    }
}

// DELETE DATA :
exports.deleteList = async (req,res)=>{
    try {
        const listData = await Schema.destroy({
            where: {
                id: req.params.id
            }     
        })
        if(!listData){
            res.status(404).json({
                message: 'ID DATA TIDAK ADA'
            })
        } else {
            res.json({
                message: 'Data Success Delete'
            })
        }
    } catch (error) {
        console.error(error)
    }
}