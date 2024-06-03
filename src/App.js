import { useState } from 'react';
import './App.css';
import Questions from './components/questions';

function App() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: 'Pregunta 1',
      description: '¿Cuál es la capital de Australia?',
      options: ['Sidney', 'Melbourne', 'Canberra', 'Brisbane'],
      rightOption: 2
    },
    {
      id: 2,
      title: 'Pregunta 2',
      description: '¿Cuál es el planeta más grande del sistema solar?',
      options: ['Marte', 'Saturno', 'Júpiter', 'Neptuno'],
      rightOption: 2
    },
    {
      id: 3,
      title: 'Pregunta 3',
      description: '¿Cuál es la capital de Colombia?',
      options: ['Bogota', 'Medellin', 'Cali', 'Cartagena'],
      rightOption: 0
    },
    {
      id: 4,
      title: 'Pregunta 4',
      description: '¿Quién pintó la Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
      rightOption: 2
    },
    {
      id: 5,
      title: 'Pregunta 5',
      description: '¿En qué año se hundió el Titanic?',
      options: ['1912', '1905', '1920', '1898'],
      rightOption: 0
    }
  ]);

  return (
    <div className="flex justify-center items-center h-96 mt-5">
      <Questions 
        questions={questions}
        setQuestions={setQuestions}
      />
    </div>
  );
}

export default App;
