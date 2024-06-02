import { useState } from 'react';
import './App.css';
import Persons from './components/Persons';

function App() {
  const [persons,setPersons] = useState([
    {
      id: 1,
      name: 'Arto Hellas',
      role: 'Full Stack Developer',
      img: 'https://random.imagecdn.app/400/150',
    },
    {
      id: 2,
      name: 'Ada Lovelace',
      role: 'Developer',
      img: 'https://random.imagecdn.app/500/150',
    },
    {
      id: 3,
      name: 'Dan Abramov',
      role: 'Frontend Developer',
      img: 'https://random.imagecdn.app/600/150',
    },
    {
      id: 4,
      name: 'Mary Poppendieck',
      role: 'Backend Developer',
      img: 'https://random.imagecdn.app/300/150',
    },
  ]);

  return (
    <div >
      <Persons persons={persons} setPersons={setPersons} />
    </div>
  );
}

export default App;
