import React, { useState } from 'react';

const SecondComponent = () => {
  const [name, setName] = useState('Deibyd Barragán');
  const [nameIsChanged, setNameIsChanged] = useState(false);
  const changeName = () => {
    nameIsChanged ? setName('Deibyd Barragán') : setName('Santiago Gaitán');
    setNameIsChanged(!nameIsChanged);
  }

  return (
    <div>
      <h2>Name: {name}</h2>
      <button onClick={changeName} className="btn btn-primary">Change Name</button>
    </div>
  );
}

export default SecondComponent;
