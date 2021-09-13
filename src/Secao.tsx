import { useContext } from "react";
import { SecaoContext } from "./SecaoContext";

const getBackgroundColor = (index: number) => {
  const totalSections = 32

  // caso seja o penultimo quadro
  if (index === totalSections) {
    return 'linear-gradient(180deg, rgba(93,32,138,1) 0%, rgba(0,0,0,1) 82%, rgba(0,0,0,1) 100%)';
  }

  if (index > totalSections) {
    return 'black'
  }
  
  const redStart = 252
  const redEnd = 93
  const greenStart = 255
  const greenEnd = 32
  const blueStart = 221
  const blueEnd = 138
  const redBg = redStart + index * ((redEnd - redStart)/totalSections)
  const greenBg = greenStart + index * ((greenEnd - greenStart)/totalSections)
  const blueBg = blueStart + index * ((blueEnd - blueStart)/totalSections)

  return `rgb(${redBg},${greenBg},${blueBg})`
}

const Secao = ({ index = 99, children, style }: any) => {
  const { secaoAtiva} = useContext(SecaoContext);
  let styleWithBg = {
    ...style,
    background: getBackgroundColor(index)
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
    </div>
  );
}

export default Secao