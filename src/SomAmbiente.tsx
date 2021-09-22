import { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
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
import toctoc from './assets/audio/toctoc.mp3'
import caverna from './assets/audio/caverna.mp3'
import cobra from './assets/audio/cobra.mp3'
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
  const [playToctoc, { stop: stopToctoc } ] = useSound(toctoc, { soundEnabled: somHabilitado });
  const [playCaverna, { stop: stopCaverna } ] = useSound(caverna, { soundEnabled: somHabilitado });
  const [playbackCobra, setPlaybackCobra] = useState(1);
  const [volumeCobra, setVolumeCobra] = useState(1);
  const [playCobra, { stop: stopCobra }] = useSound(cobra, {
    soundEnabled: somHabilitado,
    playbackRate: playbackCobra,
    volume: volumeCobra,
  });

  const videotitulo = document.getElementById('videotitulo') as HTMLVideoElement;
  const [fadeOut, setFadeout] = useState<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (videotitulo) {
      videotitulo.muted = !somHabilitado;
      if (secaoAtiva > 0 && !fadeOut) {
        const diminuiVolume = () => {
          if (secaoAtiva < 1 || videotitulo.volume < 0.03) {
            return
          }
          console.log('iminui volume', videotitulo.volume)
          videotitulo.volume = videotitulo.volume -= 0.03;
        }
        setFadeout(setInterval(diminuiVolume, 150));
        console.log('fadeout', fadeOut);
      }
      if (videotitulo.volume < 0.1 && fadeOut) {
        clearInterval(fadeOut);
      }
      if (secaoAtiva === 2) {
        videotitulo.muted = true;
      }
    }
    if (somHabilitado) {
      if (secaoAtiva === 1) {
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
      if (secaoAtiva === 9) {
        playToyBox();
      }
      if (secaoAtiva > 9) {
        stopRonco();
      }
      if (secaoAtiva === 17) {
        stopToyBox();
        playToctoc();
        playCaverna();
      }
      if (secaoAtiva > 17) {
        stopToctoc();
      }
      if (secaoAtiva === 25) {
        playCobra();
        playTempestade();
      }
      if (secaoAtiva === 26) {
        stopCobra();
        stopCaverna();
        setPlaybackCobra(1.2);
        setVolumeCobra(0.5);
        playCobra();
      }
      if (secaoAtiva === 27) {
        stopCobra();
      }
      if (secaoAtiva === 33) {
        stopTempestade();
        playOndas();
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
    playToctoc,
    stopToctoc,
    playCaverna,
    playCobra,
    stopCaverna,
    stopCobra,
    videotitulo,
    fadeOut,
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
