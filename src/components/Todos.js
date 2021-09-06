import React from 'react'
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
const Todos = ({ todos , onDelete, addTodo}) => { 
     let isShow = false;    
     const showAddTodoPanel = () =>{
            isShow = !isShow;
            console.log(isShow)
     }
     return (
          <div className="container">
               <h3 className="text-center">Todos List</h3>
               <button onClick={showAddTodoPanel} className="btn btn-secondary float-end btn-sm">ADD</button>
               <AddTodo  addTodo = {addTodo}></AddTodo>
               {
                    todos.length > 0 ? <div className="row mt-3">
                              {
                                   todos.map((item) => {
                                   return(<div key={item.id} className="col-md-4">
                                             <TodoItem  todo={item} onDelete = {onDelete}></TodoItem>
                                        </div>)
                                   })
                              }
                         </div> : 
                         <div className="row mt-3">
                          <h2 className="text-center">Todos is Empty!!!</h2>
                        </div>
               }
               
          </div>
     )
}

export default Todos;