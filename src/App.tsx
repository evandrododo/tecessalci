import './App.css';
import Quadrinhos from './Quadrinhos';
import { SecaoContextProvider } from './SecaoContext';

function App() {

  return (
    <div className='app'>
      <SecaoContextProvider>
        <Quadrinhos />
      </SecaoContextProvider>
    </div>
  );
}

export default App;
