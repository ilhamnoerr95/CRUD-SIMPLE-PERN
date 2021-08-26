import React,{Fragment, useState} from 'react'

function EditTodo(props) {
    const {todo} = props
    // console.log(todo)

    const [description, setDescription] = useState(todo.description)

    // UPDATE FUNCTION
    const updateDescription= async (e)=>{
        e.preventDefault();
        try {
            const body = {description}
            const response = await fetch(`http://localhost:4000/api/todos/${todo.id}`,{
                method:'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            })
            // console.log(response)
            // setDescription()
            window.location ='/'; 
        } catch (error) {
            console.error(error)   
        }
    }

    return (
        <Fragment>
                            {/* <!-- Trigger the modal with a button --> */}
                <button
                type="button" 
                className="btn btn-warning"
                data-toggle="modal" 
                data-target={`#id${todo.id}`}>EDIT</button>

                        {/* <!-- Modal --> */}
                    <div id={`id${todo.id}`} className="modal fade" role="dialog">
                            <div className="modal-dialog">

                                {/* <!-- Modal content--> */}
                                <div className="modal-content">
                                    <div className="modal-header">
                                        
                                        <h4 className="modal-title">Edit Todo</h4>
                                        <button type="button" className="close" data-dismiss="modal" 
                                        onClick={()=> setDescription(todo.description)}>&times;</button>
                                    </div>

                                    <div className="modal-body">
                                        <input type='text' className='form-control' value={description} onChange={e => setDescription(e.target.value)}/>
                                    </div>
                                    <div className="modal-footer">
                                        <button 
                                            type="button" 
                                            className="btn btn-warning" 
                                            data-dismiss="modal"
                                            onClick={e=> updateDescription(e)}
                                            >Update
                                        </button>
                                        <button 
                                                type="button" 
                                                className="btn btn-danger" 
                                                data-dismiss="modal" 
                                                onClick={()=> setDescription(todo.description)}>
                                            Close
                                        </button>
                                    </div>
                                </div>

                            </div>
                </div>
        </Fragment>
    )
}

export default EditTodo
