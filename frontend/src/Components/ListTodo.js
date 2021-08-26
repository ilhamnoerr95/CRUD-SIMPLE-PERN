import React, {Fragment, useEffect,useState} from 'react'
import EditTodo from './EditTodo';

// DISPLAY FUNCTION
function ListTodo() {
    const [todos,setTodos] = useState ([]);
    console.log(todos)
    const getTodos = async ()=>{
        try {
            const response = await fetch('http://localhost:4000/api/todos')
            // parse data
            const jsonData = await response.json()

            // console.log(jsonData)
            setTodos(jsonData.data);

        } catch (error) {
            console.error(error.message)
        }
    }

// DELETE FUNCTION
const deleteTodo = async(id)=>{
    try {
        const deleteTodo = await fetch(`http://localhost:4000/api/todos/${id}`,{
            method:'DELETE'
        })

        // console.log(deleteTodo)
        // apabila data todos id tidak sama dengan id parameternya maka tampilkan data todos.id
        // NGEFILTER YG GAK ADA PARAMETER ID INI
        setTodos(todos.filter(todos => todos.id !== id));

    } catch (error) {
        console.error(error.message)
    }
}

    useEffect(()=>{
        getTodos()
    },[])

    return (
    <Fragment>
        <h1 className='text-center mt-5'>List Todos</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {todos && todos.map((dataTodos)=>{
                    return <tr key={dataTodos.id}>
                    <td>{dataTodos.description}</td>
                    <td><EditTodo todo={dataTodos}/></td>
                    <td><button className='btn btn-danger' onClick={()=>deleteTodo(dataTodos.id)}>Delete</button></td>
                </tr>
                })}
                
            </tbody>
        </table>
    </Fragment>
    )
}

export default ListTodo;
