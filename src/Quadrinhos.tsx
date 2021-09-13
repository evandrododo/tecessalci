import img1 from './quadrinhos/1.1.png'
import img2 from './quadrinhos/1.2+3.png'
import img3 from './quadrinhos/1.4+5+6.png'
import img4 from './quadrinhos/2.1+2.png'
import img5 from './quadrinhos/2.3+4.png'
import img6 from './quadrinhos/2.5+6.png'
import img7 from './quadrinhos/3.1+2+3.png'
import img8 from './quadrinhos/3.4+5.png'
import img9 from './quadrinhos/3.6+7.png'
import img10 from './quadrinhos/4.1.png'
import img11 from './quadrinhos/4.2+3.png'
import img12 from './quadrinhos/4.4+5.png'
import img13 from './quadrinhos/5.1.png'
import img14 from './quadrinhos/5.2.png'
import img15 from './quadrinhos/5.3.png'
import img16 from './quadrinhos/6.1.png'
import img17 from './quadrinhos/6.2.png'
import img18 from './quadrinhos/6.3+4.png'
import img19 from './quadrinhos/7.1.png'
import img20 from './quadrinhos/7.2.png'
import img21 from './quadrinhos/7.3.png'
import img22 from './quadrinhos/8.1.png'
import img23 from './quadrinhos/8.3.png'
import img24 from './quadrinhos/8.4+5.png'
import img25 from './quadrinhos/9.1.png'
import img26 from './quadrinhos/9.2.png'
import img27 from './quadrinhos/9.3.png'
import img28 from './quadrinhos/10.1.png'
import img29 from './quadrinhos/10.2.png'
import img30 from './quadrinhos/10.3.png'
import img31 from './quadrinhos/11.1+2.png'
import img32 from './quadrinhos/11.3.png'
import img33 from './quadrinhos/11.4+5.png'
import img34 from './quadrinhos/12.1.png'
import img35 from './quadrinhos/12.2.png'
import img36 from './quadrinhos/12.3.png'
import img37 from './quadrinhos/12.4.png'
import img38 from './quadrinhos/13.1.png'
import img39 from './quadrinhos/13.2.png'
import img40 from './quadrinhos/13.3.png'
import img41 from './quadrinhos/13.4.png'
import img42 from './quadrinhos/14.1.png'
import img43 from './quadrinhos/14.2.png'
import img44 from './quadrinhos/14.3.png'
import img45 from './quadrinhos/15.1.png'
import img46 from './quadrinhos/15.2.png'
import img47 from './quadrinhos/15.3.png'
import img48 from './quadrinhos/15.4.png'
import img49 from './quadrinhos/16.1.png'
import img50 from './quadrinhos/16.2.png'
import img51 from './quadrinhos/16.3.png'
import img52 from './quadrinhos/17.1.png'
import img53 from './quadrinhos/17.2.png'
import img54 from './quadrinhos/17.3.png'
import img55 from './quadrinhos/17.4.png'
import img56 from './quadrinhos/18.1.png'
import img57 from './quadrinhos/18.2.png'
import img58 from './quadrinhos/18.3.png'
import img59 from './quadrinhos/19.1.png'
import img60 from './quadrinhos/19.2.png'
import img61 from './quadrinhos/19.3.png'
import img62 from './quadrinhos/20.1.png'
import img63 from './quadrinhos/20.2.png'
import img64 from './quadrinhos/20.3.png'
import img65 from './quadrinhos/21.1.png'
import img66 from './quadrinhos/21.2.png'
import img67 from './quadrinhos/21.3.png'
import img68 from './quadrinhos/22.png'
import img69 from './quadrinhos/23.1.png'
import img70 from './quadrinhos/23.2.png'
import img71 from './quadrinhos/23.3.png'
import img72 from './quadrinhos/24.1.png'
import img73 from './quadrinhos/24.2.png'
import img74 from './quadrinhos/24.3.png'
import img75 from './quadrinhos/25.1.png'
import img76 from './quadrinhos/25.2.png'
import img77 from './quadrinhos/25.3.png'
import img78 from './quadrinhos/26.1.png'
import img79 from './quadrinhos/26.2.png'
import img80 from './quadrinhos/26.3.png'
import img81 from './quadrinhos/27.1.png'
import img82 from './quadrinhos/27.2+.3.png'
import img83 from './quadrinhos/27.4.png'
import img84 from './quadrinhos/27.5.png'
import img85 from './quadrinhos/28.1.png'
import img86 from './quadrinhos/28.2.png'
import img87 from './quadrinhos/28.3.png'
import img88 from './quadrinhos/29.1.png'
import img89 from './quadrinhos/29.2.png'
import img90 from './quadrinhos/29.3.png'
import img92 from './quadrinhos/29.5.png'
import img93 from './quadrinhos/29.6.png'
import img94 from './quadrinhos/quadro final.png'
import titulo from './assets/video/titulo.mp4'
import Secao from './Secao';

import { useContext, useState } from 'react'
import { SecaoContext } from './SecaoContext'
import ondacarregar from './assets/img/ondacarregar.gif'
import nuvemdia from './assets/img/nuvemdia.gif'
import nuvemnoite from './assets/img/nuvemnoite.gif'
import SomAmbiente from './SomAmbiente'
import AutoScroll from './AutoScroll'

const Quadrinhos = () => {
  const { secaoAtiva, setProximaSecaoAtiva } = useContext(SecaoContext);
  const [somHabilitado, setSomHabilitado] = useState(false)

  const handleMudaSecao = () => {
    const proximaSecao = secaoAtiva + 1
    if (proximaSecao === 1) {
      setSomHabilitado(true)
      const botaoonda = document.getElementById('botaoonda')
      if (botaoonda !== null) {
        botaoonda.className = 'carregou';
      }
    }
    setProximaSecaoAtiva()
  }
  return (
    <div className='quadrinhos-container'>
      <SomAmbiente
        somHabilitado={somHabilitado}
        setSomHabilitado={setSomHabilitado}
      />
      <AutoScroll />
      <Secao index={0}>
        <div
          style={{
            display: 'flex',
            transition: '2s 1s ease-in-out height, 1s 1s linear opacity',
            height: secaoAtiva === 0 ? '100vh' : '100px',
            opacity: secaoAtiva === 0 ? '1' : '0',
          }}
        >
          <video src={titulo} autoPlay loop muted />
        </div>
      </Secao>
      <Secao index={1}>
        <img src={img1} alt='1.1' />
        <img src={img2} alt='1.2' />
        <img src={img3} alt='1.4' />
      </Secao>
      <Secao index={2}>
        <img src={img4} alt='2.1' />
        <img src={img5} alt='2.3' />
        <img src={img6} alt='2.5' />
      </Secao>
      <Secao index={3}>
        <img src={img7} alt='3.1+2+3' />
        <img src={img8} alt='3.4+5' />
        <img src={img9} alt='3.6+7' />
      </Secao>
      <Secao index={4}>
        <img src={img10} alt='4.1' />
      </Secao>
      <Secao index={5}>
        <img src={nuvemdia} className='intergif' alt='nuvemanimada' />
        <img src={img11} alt='4.2+3' />
        <img src={img12} alt='4.4+5' />
        <img src={img13} alt='5.1' />
      </Secao>
      <Secao index={6}>
        <img src={img14} alt='5.2' />
        <img src={img15} alt='5.3' />
        <img src={img16} alt='6.1' />
      </Secao>
      <Secao index={7}>
        <img src={img17} alt='6.2' />
        <img src={img18} alt='6.3+4' />
        <img src={img19} alt='7.1' />
      </Secao>
      <Secao index={8}>
        <img src={img20} alt='7.2' />
        <img src={img21} alt='7.3' />
      </Secao>
      <Secao index={9}>
        <img src={img22} alt='8.1' />
        <img src={img23} alt='8.3' />
        <img src={img24} alt='8.4+5' />
      </Secao>
      <Secao index={10}>
        <img src={img25} alt='9.1' />
        <img src={img26} alt='9.2' />
      </Secao>
      <Secao index={11}>
        <img src={img27} alt='9.3' />
        <img src={img28} alt='10.1' />
        <img src={img29} alt='10.2' />
      </Secao>
      <Secao index={12}>
        <img src={nuvemdia} className='intergif' alt='nuvemanimada' />
        <img src={img30} alt='10.3' />
        <img src={img31} alt='11.1+2' />
        <img src={img32} alt='11.3' />
        <img src={img33} alt='11.4+5' />
      </Secao>
      <Secao index={13}>
        <img src={img34} alt='12.1' />
        <img src={img35} alt='12.2' />
        <img src={img36} alt='12.3' />
      </Secao>
      <Secao index={14}>
        <img src={img37} alt='12.4' />
        <img src={img38} alt='13.1' />
        <img src={img39} alt='13.2' />
      </Secao>
      <Secao index={15}>
        <img src={img40} alt='13.3' />
        <img src={img41} alt='13.4' />
      </Secao>
      <Secao index={16}>
        <img src={img42} alt='14.1' />
        <img src={img43} alt='14.2' />
        <img src={img44} alt='14.3' />
      </Secao>
      <Secao index={17}>
        <img src={img45} alt='15.1' />
        <img src={img46} alt='15.2' />
        <img src={img47} alt='15.3' />
        <img src={img48} alt='15.4' />
      </Secao>
      <Secao index={18}>
        <img src={img49} alt='16.1' />
        <img src={img50} alt='16.2' />
        <img src={img51} alt='16.3' />
      </Secao>
      <Secao index={19}>
        <img src={img52} alt='17.1' />
        <img src={img53} alt='17.2' />
        <img src={img54} alt='17.3' />
      </Secao>
      <Secao index={20}>
        <img src={img55} alt='17.4' />
        <img src={img56} alt='18.1' />
        <img src={img57} alt='18.2' />
      </Secao>
      <Secao index={21}>
        <img src={img58} alt='18.3' />
        <img src={img59} alt='19.1' />
        <img src={img60} alt='19.2' />
      </Secao>
      <Secao index={22}>
        <img src={img61} alt='19.3' />
        <img src={img62} alt='20.1' />
        <img src={img63} alt='20.2' />
      </Secao>
      <Secao index={23}>
        <img src={img64} alt='20.3' />
        <img src={img65} alt='21.1' />
        <img src={img66} alt='21.2' />
      </Secao>
      <Secao index={24}>
        <img src={img67} alt='21.3' />
        <img src={img68} alt='22' />
        <img src={img69} alt='23.1' />
      </Secao>
      <Secao index={25}>
        <img src={img70} alt='23.2' />
        <img src={img71} alt='23.3' />
        <img src={img72} alt='24.1' />
      </Secao>
      <Secao index={26}>
        <img src={img73} alt='24.2' />
        <img src={img74} alt='24.3' />
        <img src={img75} alt='25.1' />
      </Secao>
      <Secao index={27}>
        <img src={nuvemnoite} className='intergif' alt='nuvemanimada' />
        <img src={img76} alt='25.2' />
        <img src={img77} alt='25.3' />
        <img src={img78} alt='26.1' />
      </Secao>
      <Secao index={28}>
        <img src={img79} alt='26.2' />
        <img src={img80} alt='26.3' />
        <img src={img81} alt='27.1' />
      </Secao>
      <Secao index={29}>
        <img src={img82} alt='27.2+3' />
        <img src={img83} alt='27.4' />
        <img src={img84} alt='27.5' />
      </Secao>
      <Secao index={30}>
        <img src={img85} alt='28.1' />
        <img src={img86} alt='28.2' />
        <img src={img87} alt='28.3' />
      </Secao>
      <Secao index={31}>
        <img src={img88} alt='29.1' />
        <img src={img89} alt='29.2' />
        <img src={img90} alt='29.3' />
      </Secao>
      <Secao index={32}>
        <img src={img92} alt='29.5' />
        <img src={img93} alt='29.6' />
        <img src={img94} alt='final' />
      </Secao>

      <Secao index={33}>
        <div className='creditos'>
          <h1>Créditos</h1>

          <h2>Roteiro</h2>
          <h3>Bernardo Correa</h3>

          <h2>Ilustração</h2>
          <h3>Ana R. Ribeiro e Leonardo Madona</h3>
          <h3>Grupo de Artes Sequênciais da Unesp (GAS)</h3>

          <h2>Programação</h2>
          <h3>Evandro Carreira</h3>
          <h3>Grupo Tesseract</h3>

          <h2>Produção</h2>
          <h3>Bernardo Correa</h3>
        </div>
      </Secao>
      <button id='botaoonda' onClick={() => handleMudaSecao()}>
        <img src={ondacarregar} alt='carregar próximo' />
        {secaoAtiva < 1 && <span> Aperte para começar </span>}
      </button>
    </div>
  );
}

export default Quadrinhos
