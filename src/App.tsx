import './App.css';
import img1 from './quadrinhos/1.1.png'
import img2 from './quadrinhos/1.2+3.png'
import img3 from './quadrinhos/1.4+5+6.png'
import img4 from './quadrinhos/2.1+2.png'
import img5 from './quadrinhos/2.3+4.png'
import img6 from './quadrinhos/2.5+6.png'

function App() {
  return (
    <div className="quadrinhos-container">
      <img src={img1} alt='1.1'/>
      <img src={img2} alt='1.2'/>
      <img src={img3} alt='1.4'/>
      <img src={img4} alt='2.1'/>
      <img src={img5} alt='2.3'/>
      <img src={img6} alt='2.5'/>
    </div>
  );
}

export default App;
