import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import useSound from 'use-sound';
import audioon from './assets/img/audioon.png'
import audiooff from './assets/img/audiooff.png'
import interiorcarro from './assets/audio/1_interiorcarro.mp3'
import breque from './assets/audio/2_breque.mp3'
import casa from './assets/audio/3_casa.mp3'
import ronco from './assets/audio/4_ronco.mp3'
import toybox from './assets/audio/5_toybox.mp3'
import tempestade from './assets/audio/6_tempestade.mp3'
import ondas from './assets/audio/7_ondas.mp3'
import { SecaoContext } from './SecaoContext';

interface SomAmbienteProps {
  somHabilitado: boolean;
  setSomHabilitado: Dispatch<SetStateAction<boolean>>;
}

const SomAmbiente = ({ somHabilitado, setSomHabilitado  }: SomAmbienteProps) => {
  const { secaoAtiva } = useContext(SecaoContext);
  const [playInteriorCarro, { stop: stopInteriorCarro }] = useSound(interiorcarro, { soundEnabled: somHabilitado });
  const [playBreque, { stop: stopBreque }] = useSound(breque, { soundEnabled: somHabilitado });
  const [playCasa, { stop: stopCasa }] = useSound(casa, { soundEnabled: somHabilitado });
  const [playRonco, { stop: stopRonco }] = useSound(ronco, { soundEnabled: somHabilitado });
  const [playToyBox, { stop: stopToyBox }] = useSound(toybox, { soundEnabled: somHabilitado });
  const [playTempestade, { stop: stopTempestade }] = useSound(tempestade, { soundEnabled: somHabilitado });
  const [playOndas, { stop: stopOndas } ] = useSound(ondas, { soundEnabled: somHabilitado });

  useEffect(() => {
    console.log('somHabilitado', somHabilitado);
    if (somHabilitado) {
      if (secaoAtiva >= 1 && secaoAtiva <= 4) {
        playInteriorCarro();
      }
      if (secaoAtiva > 4) {
        stopInteriorCarro();
      }
      if (secaoAtiva === 4) {
        playBreque();
      }
      if (secaoAtiva > 5) {
        stopBreque();
      }
      if (secaoAtiva === 5) {
        playCasa();
      }
      if (secaoAtiva === 8) {
        playRonco();
      }
      if (secaoAtiva > 8) {
        stopCasa();
      }
      if (secaoAtiva > 9 && secaoAtiva < 26) {
        playToyBox();
      }
      if (secaoAtiva > 9) {
        stopRonco();
      }
      if (secaoAtiva === 27) {
        playTempestade();
      }
      if (secaoAtiva > 27) {
        stopToyBox();
      }
      if (secaoAtiva === 32) {
        playOndas();
      }
      if (secaoAtiva > 32) {
        stopTempestade();
      }
    }
    if (!somHabilitado) {
      stopInteriorCarro();
      stopBreque();
      stopCasa();
      stopRonco();
      stopToyBox();
      stopTempestade();
      stopOndas();
    }
  }, [
    secaoAtiva,
    somHabilitado,
    playInteriorCarro,
    stopInteriorCarro,
    playBreque,
    stopBreque,
    playCasa,
    stopCasa,
    playRonco,
    playToyBox,
    stopRonco,
    playTempestade,
    stopToyBox,
    playOndas,
    stopTempestade,
    stopOndas,
  ]);

  return (
    <div className='playsom' onClick={() => setSomHabilitado(!somHabilitado)}>
      {somHabilitado ? (
        <img src={audioon} alt='Som ligado' />
      ) : (
        <div className='column'>
          <img src={audiooff} alt='Som desligado' /> 
          <span>Ligue o som </span>
        </div>
      )}
    </div>
  );
}

export default SomAmbiente;
