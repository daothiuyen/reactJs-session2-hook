import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';


const App = () => {

  let [name, setName] = useState('Uyên');
  const [address, setAddress] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' }
  ]);
  const handleEventClick = () => {
    if (!address) {
      alert('wanring');
      return;
    }
    //hook not merge state
    let todo = { id: 3, title: address }
    setTodos([...todos, todo]);
    setAddress('');
  }
  const handleOnChange = (event) => {
    console.log('fdfdg', event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world {name}</h1>
        <Todo todos={todos} />
        <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
        <button type="button" onClick={() => handleEventClick()}>Click</button>
      </header>
    </div>
  );
}

export default App;
