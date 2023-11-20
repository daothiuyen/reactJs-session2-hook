import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


const App = () => {

  let [name, setName] = useState('Uyên');
  const [address, setAddress] = useState('');
  const handleEventClick = () => {
    setName(address);
    console.log('sffd', name);
  }
  const handleOnChange = (event) => {
    setAddress(event.target.value);
    console.log('fdfdg', event.target.value)
  }

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world {name}</h1>
        <input type="text" value={address} onChange={(event) => handleOnChange(event)} />
        <button type="button" onClick={() => handleEventClick()}>Click</button>
      </header>
    </div>
  );
}

export default App;
