import { useState } from 'react';
import './App.css';
import FourthComponent from './components/FourthComponent';
import SecondComponent from './components/SecondComponent';
import Child from './components/Child';
import ThirdComponent from './components/ThirdComponent';
import MyComponent from './components/MyComponent';
import logo from './logo.svg';

function App() {
  const [name, setName] = useState("Deibyd");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  }

  const medicalRecord = {
    height: "167",
    bloodGroup: "B+",
    allergies: "None"
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia
        </p>
        <div>
          <hr />
          <FourthComponent />
          <hr />
        </div>
        <h2>Mensaje del hijo: </h2>
        <p>{ message }</p>
        <Child name={name} setName={setName} addMessage={addMessage}/>
        <SecondComponent />
        <ThirdComponent
          name="Deibyd"
          lastName="Barragán"
          card={medicalRecord}
        />
        <MyComponent />
      </header>
    </div>
  );
}

export default App;
