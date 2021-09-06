import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
     const styleCss = {
          "width": "18rem"
     }
     return (
          <>
               <div className="card mt-3" style={styleCss}>
                    <div className="card-body">
                         <h5 className="card-title">{todo.title}</h5>                        
                         <p className="card-text">{todo.desc}</p>
                         <button onClick = { ()=>{onDelete(todo)}} className="btn btn-sm btn-danger m-2 float-end">DELETE</button>
                         <button className="btn btn-sm btn-primary m-2 float-end">EDIT</button>
                    </div>
               </div>
          </>
     )
}

export default TodoItem;