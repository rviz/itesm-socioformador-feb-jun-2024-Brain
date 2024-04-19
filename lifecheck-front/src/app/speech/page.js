'use client'
import "babel-polyfill";
import 'regenerator-runtime/runtime';

import React from 'react';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import Image from "next/image";
import {
  ClipboardDocumentCheckIcon,
  MicrophoneIcon,
  PlayIcon,
  PauseIcon,
  ArrowPathIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Play } from "next/font/google";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Estado para controlar si el reconocimiento está activo
  const [isListening, setIsListening] = React.useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Inicia la escucha y actualiza el estado
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: 'es-MX' });
    setIsListening(true); // Se está escuchando
  };

  // Detiene la escucha y actualiza el estado
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false); // No se está escuchando
  };

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      {/*<button onClick={startListening}>Start</button>*/}
      {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>*/}
      {/*<button onClick={resetTranscript}>Reset</button>*/}

      {!isListening ? (
      <button onClick={startListening}>
                <div className="group h-full bg-white bg-opacity-75 px-2 pt-2 pb-2 rounded-full    overflow-hidden text-center relative hover:bg-[#575bd9] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <MicrophoneIcon className="h-20 w-20 text-[#575bd9] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">Respond</p>
              </div>
                </button>
                ) : (

                <button onClick={stopListening}>
                <div className="group h-full bg-white bg-opacity-75 px-2 pt-2 pb-2 rounded-full    overflow-hidden text-center relative hover:bg-[#9f8c38] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <PauseIcon className="h-20 w-20 text-[#9f8c38] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">Stop</p>
              </div>
                </button>
                )}

                <button onClick={resetTranscript}>
                <div className="group h-full bg-white bg-opacity-75 px-2 pt-2 pb-2 rounded-full    overflow-hidden text-center relative hover:bg-[#a22e23] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <ArrowPathIcon className="h-20 w-20 text-[#a22e23] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">Reset</p>
              </div>
                </button>

              <div className="font-bold bg-white focus:outline-8 focus:outline-black  rounded-full px-8 pt-16 pb-12 rounded-lg overflow-hidden text-center relative">
              <p className="font-bold ">{transcript}</p>
              </div>
    </div>
    
  );
};
export default Dictaphone;