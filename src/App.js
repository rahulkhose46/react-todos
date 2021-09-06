import './App.css';
import Home from './components/Home';
import Header from './components/Header'
import Todos from './components/Todos';
import About from './components/About';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
function App() {
  const [todos, setTodos] = useState(localStorage.getItem("todos") != null ?
    JSON.parse(localStorage.getItem("todos")) : [])
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  const addTodo = (todo) => {
    let newKey = Math.floor(Math.random() * 100000 - 1);
    const newTodo = { ...todo, 'id': newKey }
    setTodos([...todos, newTodo]);
  }
  const onDelete = (todo) => {
    setTodos(todos.filter(item => item.id !== todo.id));
  }
  return (
    <div>
      <Router>
        <Header title="Todos App"></Header>
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <Todos todos={todos} onDelete={onDelete} addTodo={addTodo}></Todos>
              </>)
          }}>
          </Route>
          <Route path="/about" render={()=>{
            return(
                <>
                   <About></About> 
                </>
            )
          }} >
            {/* <About/> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
