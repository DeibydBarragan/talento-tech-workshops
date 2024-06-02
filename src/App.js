import './App.css';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <div className='flex flex-col h-screen justify-center items-center gap-3'>
      <h1>Hook useState</h1>
      <FirstComponent />
      <SecondComponent />
    </div>
  );
}

export default App;
 