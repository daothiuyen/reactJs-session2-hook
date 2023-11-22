import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';


const App = () => {

  let [name, setName] = useState('Uyên');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1', type: 'type 1' },
    { id: 2, title: 'Todo 2', type: 'type 1' },
    { id: 3, title: 'Todo 3', type: 'type 3' },
  ]);
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
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world {name}</h1>
        <Todo
          todos={todos}
          title={'title'}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter(item => item.type === 'type 1')}
          title="title"
        />
        <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
        <button type="button" onClick={() => handleEventClick()}>Click</button>
      </header>
    </div>
  );
}

export default App;
