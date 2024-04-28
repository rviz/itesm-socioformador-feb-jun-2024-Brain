"use client";
import "@babel/polyfill";
import "regenerator-runtime/runtime";

import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Image from "next/image";
import {
  ClipboardDocumentCheckIcon,
  MicrophoneIcon,
  PlayIcon,
  PauseIcon,
  TrashIcon,
  ArrowPathIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Play } from "next/font/google";
import { kMaxLength } from "buffer";

import Question from "./Question";

interface TallerPost {
  pregunta: string;
  descripcion: string;
}

const MyComponent: React.FC<TallerPost> = ({ pregunta, descripcion }) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Estado para controlar si el reconocimiento está activo
  const [isListening, setIsListening] = React.useState(false);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Inicia la escucha y actualiza el estado
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "es-MX" });
    setIsListening(true); // Se está escuchando
  };
  //         outline-2 outline focus:outline-black
  // Detiene la escucha y actualiza el estado
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false); // No se está escuchando
  };

  return (
    <div>
      {/*<p>Microphone: {listening ? 'on' : 'off'}</p>*/}
      {/*<button onClick={startListening}>Start</button>*/}
      {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>*/}
      {/*<button onClick={resetTranscript}>Reset</button>*/}

      <div className="flex min-h-screen flex-col items-center pt-5">
        <Image
          src="/EvaluationGreenBar.png"
          alt="GOL"
          fill
          className="object-scale-down object-top drop-shadow-2xl"
        ></Image>
        <div className="flex justify-center items-center pb-10 relative">
          <div className=" bg-white shadow-2xl  px-4 pt-5 pb-5 rounded-3xl    rounded-full overflow-hidden ">
            <p className="text-3xl text-center hover:font-bold duration-200">
              {pregunta}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center pb-10">
          <p className="text-1xl text-center hover:font-bold duration-200">
            {descripcion}
          </p>
        </div>

        <div className="flex justify-center  pb-10">
          {!isListening ? (
            <button onClick={startListening}>
              <div className="group h-full bg-white bg-opacity-75 px-2 pt-2 pb-2 rounded-full    overflow-hidden text-center relative hover:bg-[#575bd9] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <MicrophoneIcon className="h-20 w-20 text-[#575bd9] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">
                  Responder
                </p>
              </div>
            </button>
          ) : (
            <button onClick={stopListening}>
              <div className="group h-full bg-white bg-opacity-75 px-2 pt-2 pb-2 rounded-full    overflow-hidden text-center relative hover:bg-[#9f8c38] transition duration 1000">
                <div className="flex justify-center items-center">
                  {" "}
                  <PauseIcon className="h-20 w-20 text-[#9f8c38] p-4 group-hover:text-white transition duration 1000" />{" "}
                </div>
                <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">
                  Parar
                </p>
              </div>
            </button>
          )}

          <div className="px-3" />

          <button onClick={resetTranscript}>
            <div className="group h-full bg-white bg-opacity-75 px-2 pt-2 pb-2 rounded-full    overflow-hidden text-center relative hover:bg-[#a22e23] transition duration 1000">
              <div className="flex justify-center items-center">
                {" "}
                <TrashIcon className="h-20 w-20 text-[#a22e23] p-4 group-hover:text-white transition duration 1000" />{" "}
              </div>
              <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">
                Borrar
              </p>
            </div>
          </button>
        </div>

        {isListening ? (
          <div className="flex justify-center pb-2">
            <p className="font-bold leading-relaxed mb-3 text-[#862929] text-2xl hover:scale-125 duration-200">
              Escuchando . . .
            </p>
          </div>
        ) : (
          <div></div>
        )}

        <div className="w-2/6 pb-10">
          <div className=" bg-white drop-shadow-2xl       rounded-full px-2 pt-2 pb-12 rounded-lg overflow-hidden text-left ">
            <p className="font-medium">{transcript}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
