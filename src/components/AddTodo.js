import React,{useState} from 'react';
import Todos from './Todos';

const AddTodo = ({ addTodo }) => {
   const [title,setTitle] = useState("");
   const [desc,setDesc] = useState("");
   const submit = (e) =>{
       e.preventDefault();
         if(title == "" || desc == ""){
              alert("Please fill all information")
         }else{
            addTodo({title:title,desc:desc});
            setDesc("");
            setTitle("");
         }     
   }
    return (
        <>
        { 
            <div className="row">
                <div className="col-md-6 m-auto">
                    <form onSubmit = {submit}>
                        <div className="mb-3">
                            <label htmlFor="titleInput" className="form-label">Title</label>
                            <input type="text" value={title} className="form-control" id="titleInput" onChange={(e)=>{setTitle(e.target.value)}} placeholder="Title" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descInput" className="form-label">Title</label>
                            <input type="text" value={desc} className="form-control" id="descInput" onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description" />
                        </div>
                        <div>
                            <input type="submit" className="btn btn-primary btn-sm float-end" value="AddTodo"/>
                            {/* <button onClick={checkTodos}>Check Todos</button> */}
                        </div>
                    </form>
                </div>
            </div>
       }
        </>
    )
}

export default AddTodo;