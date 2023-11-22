import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


const App = () => {

  let [name, setName] = useState('Uyên');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', type: 'type 1' },
    { id: 2, title: 'Todo 2', type: 'type 1' },
    { id: 3, title: 'Todo 3', type: 'type 3' },
  ]);
  useEffect(() => {
    console.log('run use effect');
  }, [address])

  useEffect(() => {
    console.log('run use effect todos');
  }, [todos])

  const handleEventClick = () => {
    if (!address) {
      alert('wanring');
      return;
    }
    //hook not merge state
    let todo = { id: Math.floor(Math.random() * 10000), title: address, type: 'uyên' }
    setTodos([...todos, todo]);
    setAddress('');
  }
  const handleOnChange = (event) => {
    setAddress(event.target.value);
  }

  const deleteDataTodo = (id) => {
    let currentTodo = todos;
    currentTodo = todos.filter(item => item.id !== id)
    setTodos(currentTodo);
  }

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello world {name}</h1>
          <Switch>
            <Route exact path="/">
              <Covid />
            </Route>
            <Route path="/todo">
              <Todo
                todos={todos}
                title={'title'}
                deleteDataTodo={deleteDataTodo}
              />
              <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
              <button type="button" onClick={() => handleEventClick()}>Click</button>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>

  );
}

export default App;
