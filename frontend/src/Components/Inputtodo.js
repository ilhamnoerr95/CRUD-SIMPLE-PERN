import React, {Fragment, useState} from 'react'

function Inputtodo() {

    const [description, setDescription] = useState('');
    // console.log(description)

    const addDesc = (e) =>{
        setDescription(e.target.value)
    }

    const onSubmitForm = async(e)=>{
        // e.preventDefault()
        try {
            const body = {description};
            const response = await fetch('http://localhost:4000/api/todos',{
                method: 'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(body)
            });
            console.log(response)
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
              <h1 className='text-center mt-5'>PERN TODO LIST</h1>
                <form className='d-flex'>
                    <input type='text' className='form-control' value={description} onChange={addDesc}/>
                    <button className='btn btn-success ml-3'onClick={onSubmitForm} >Add</button>
                </form>
        </Fragment>
    )
}

export default Inputtodo
