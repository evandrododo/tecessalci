import { useContext } from "react";
import { SecaoContext } from "./SecaoContext";
import ondacarregar from './assets/img/ondacarregar.gif'

const getBackgroundColor = (index: number) => {
  const redStart = 252
  const redEnd = 93
  const greenStart = 255
  const greenEnd = 32
  const blueStart = 221
  const blueEnd = 138
  const totalSections = 32
  const redBg = redStart + index * ((redEnd - redStart)/totalSections)
  const greenBg = greenStart + index * ((greenEnd - greenStart)/totalSections)
  const blueBg = blueStart + index * ((blueEnd - blueStart)/totalSections)

  return `rgb(${redBg},${greenBg},${blueBg})`
}

const Secao = ({ index = 99, children, style }: any) => {
  const { setProximaSecaoAtiva , secaoAtiva} = useContext(SecaoContext);
  let styleWithBg = {
    ...style,
    backgroundColor: getBackgroundColor(index)
  }

  // aumenta altura minima quando 
  // ta só na primeira secao
  if (secaoAtiva === 1) {
    styleWithBg = {
      ...styleWithBg,
      minHeight: '100vh'
    }
  }
  const carregarProximo = () => {
    console.log(setProximaSecaoAtiva);
    setProximaSecaoAtiva()
  }


  if (secaoAtiva < index - 1) {
    return <>
    </> 
  }

  // carrega mas esconde o conteúdo que vai 
  // ser lido em seguida
  if (secaoAtiva === index - 1) {
    styleWithBg = {
      ...styleWithBg,
      display: 'none'
    }
  }

  return (
    <div
      className='secao'
      style={styleWithBg}
    >
      {children}
      {secaoAtiva <= index && (
        <button
          className='botaoonda'
          onClick={() => carregarProximo()}
        >
          <img
            src={ondacarregar}
            alt='carregar próximo'
          />
        </button>
      )}
    </div>
  );
}

export default Secao