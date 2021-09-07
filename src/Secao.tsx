import { useContext } from "react";
import { SecaoContext } from "./SecaoContext";
import ondacarregar from './img/ondacarregar.gif'

const Secao = ({ index = 99, children, style }: any) => {
  const { setProximaSecaoAtiva , secaoAtiva} = useContext(SecaoContext);

  const whiteBg = 255 - index * 8 // 8 = 256 / 32 (total seções)
  let styleWithBg = {
    ...style,
    backgroundColor: `rgb(${whiteBg},${whiteBg},${whiteBg})`
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