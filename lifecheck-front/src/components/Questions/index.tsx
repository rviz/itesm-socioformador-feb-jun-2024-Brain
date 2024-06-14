"use client";
import "@babel/polyfill";
import "regenerator-runtime/runtime";

import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import {
  ClipboardDocumentCheckIcon,
  MicrophoneIcon,
  ForwardIcon,
  PlayIcon,
  PauseIcon,
  TrashIcon,
  BookmarkIcon,
  DocumentCheckIcon,
  ArrowPathIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import { useState } from "react";

interface QuestionComponent {
  pregunta: string;
  descripcion: string;
  answerAdder: (question_id: number, answerTranscript: string) => void;
  question_id: number;
  currentQuestionID: number;
  voidCurrentQuestionID: (question_id: number) => void;
  dbSavedAnswer: string;
  circlesOrder: number;
  circlesColors: string[];
  categoryName: string;
  CheckIfComplete: () => void;
}

const MyComponent: React.FC<QuestionComponent> = ({
  pregunta,
  descripcion,
  question_id,
  answerAdder,
  currentQuestionID,
  voidCurrentQuestionID,
  dbSavedAnswer,
  circlesOrder,
  circlesColors,
  categoryName,
  CheckIfComplete,
}) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // Estado para controlar si el reconocimiento está activo
  const [isListening, setIsListening] = React.useState(false);

  const [savedTranscript, setSavedTranscript] = useState("");

  const [showRed, setShowRed] = useState("");

  const [savedAnswer, setSavedAnswer] = useState(false);

  React.useEffect(() => {
    if (isListening) {
      setSavedTranscript(transcript);
    }
    if (savedTranscript == "") {
      setSavedTranscript(dbSavedAnswer);
    }
  }, [transcript, isListening]);

  const handleInputChange = (event) => {
    setSavedTranscript(event.target.value);
    setSavedAnswer(false);
    if (isListening) {
      // Opcional: Detén el reconocimiento de voz si el usuario comienza a escribir
      SpeechRecognition.stopListening();
      setIsListening(false);
      setShowRed("");
    }
  };

  const EraseBothTranscripts = () => {
    resetTranscript();
    setSavedTranscript("");
    setSavedAnswer(false);
  };

  const saveButton = () => {
    // Esta funcion pertenece a index.tsx
    answerAdder(question_id, savedTranscript);
    dbSavedAnswer = savedTranscript;
    CheckIfComplete();
    CheckIfComplete();
    setSavedAnswer(true);
    // Quiero aquí que se haga el test
  };

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Inicia la escucha y actualiza el estado
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "es-MX" });
    setIsListening(true); // Se está escuchando
    setShowRed("");
    setSavedAnswer(false);
    if (currentQuestionID != question_id) {
      voidCurrentQuestionID(question_id);
      resetTranscript();
    }
  };
  //         outline-2 outline focus:outline-black
  // Detiene la escucha y actualiza el estado
  const stopListening = () => {
    setSavedTranscript(savedTranscript);
    SpeechRecognition.stopListening();
    setIsListening(false); // No se está escuchando
    setShowRed("");
  };

  return (
    <div className="blur-md hover:blur-0 duration-500">
      {/*<p>Microphone: {listening ? 'on' : 'off'}</p>*/}
      {/*<button onClick={startListening}>Start</button>*/}
      {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>*/}
      {/*<button onClick={resetTranscript}>Reset</button>*/}

      <div className="flex flex-col items-center justify-between mb-32">
        {circlesOrder === 0 ? (
          <div className="hover:scale-110 duration-500">
            <div
              className={
                circlesColors[0] +
                " -translate-x-20 blur-md w-96 h-96 shadow-inner rounded-full"
              }
            >
              <div
                className={
                  circlesColors[1] +
                  " translate-x-72 translate-y-44 blur-md  w-96 h-96 shadow-inner rounded-full"
                }
              >
                <div
                  className={
                    circlesColors[2] +
                    " -translate-x-96 translate-y-11 blur-md  w-96 h-96 shadow-inner rounded-full"
                  }
                />
              </div>
            </div>
          </div>
        ) : circlesOrder === 1 ? (
          <div className="hover:scale-110 duration-500">
            <div
              className={
                circlesColors[0] +
                " -translate-x-44 translate-y-10 blur-md w-96 h-96 rounded-full"
              }
            >
              <div
                className={
                  circlesColors[1] +
                  " translate-x-96 translate-y-20 blur-md  w-96 h-96 rounded-full"
                }
              >
                <div
                  className={
                    circlesColors[2] +
                    " -translate-x-72 translate-y-28 blur-md  w-96 h-96 rounded-full"
                  }
                />
              </div>
            </div>
          </div>
        ) : circlesOrder === 2 ? (
          <div className="hover:scale-110 duration-500">
            <div
              className={
                circlesColors[0] +
                " translate-x-52 translate-y-44 blur-md w-96 h-96 shadow-inner rounded-full"
              }
            >
              <div
                className={
                  circlesColors[1] +
                  " -translate-x-96 translate-y-11 blur-md  w-96 h-96 shadow-inner rounded-full"
                }
              >
                <div
                  className={
                    circlesColors[2] +
                    " translate-x-28 -translate-y-36 blur-md  w-96 h-96 shadow-inner rounded-full"
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <div />
        )}

        <div /*className="bg-contain w-screen md:w-full bg-top bg-no-repeat drop-shadow-2xl" style={{ backgroundImage: "url('/EvaluationGreenBar.png')" }}*/
        >
          <div className="-mt-80">
            <div className="relative z-10 flex flex-col items-center justify-center px-4 bg-white shadow-2xl rounded-lg w-[1000px] h-full">
              <div className="w-full max-w-3xl  pt-8 pb-8 rounded-xl overflow-hidden text-center">
                <p className="text-4xl mb-14 duration-200 font-bold">
                  {pregunta}
                </p>
                <p className="text-xl w-full mx-auto">{descripcion}</p>

                

                <div className="py-10 flex justify-center items-start">
                  <textarea
                    className={`${showRed} w-2/5 bg-white drop-shadow-lg duration-200 font-medium w-[500px] rounded-xl px-4 pt-2 pb-12 text-left`}
                    value={savedTranscript}
                    onChange={handleInputChange}
                  />
                  
                </div>

                <div className="flex justify-center pb-10">
                  {!isListening ? (
                    <button
                      onClick={startListening}
                      className="drop-shadow-lg group duration-200"
                    >
                      <div className="group bg-white bg-opacity-75 rounded-xl w-[300px] h-[70px] overflow-hidden text-center relative group-hover:bg-[#22A28B] transition duration 1000">
                        <div className="flex justify-center items-center">
                          <MicrophoneIcon className="h-16 w-16 text-[#22A28B] p-4 group-hover:text-white transition duration 1000" />
                        </div>
                        
                      </div>
                    </button>
                  ) : (
                    <button
                      onClick={stopListening}
                      className="drop-shadow-lg group duration-200"
                    >
                      <div className="group w-[300px] h-[70px] bg-white bg-opacity-75 px-2 pb-2 rounded-xl overflow-hidden text-center relative hover:bg-[#913a3a] transition duration 1000">
                        <div className="flex justify-center items-center">
                          <PauseIcon className="h-16 w-16 text-[#913a3a] p-4 group-hover:text-white transition duration 1000" />
                        </div>
                        <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">
                          Parar
                        </p>
                      </div>
                    </button>
                  )}
                  <div className="px-3" />
                  <button
                    onClick={EraseBothTranscripts}
                    className="scale-90 duration-200 drop-shadow-xl"
                  >
                    <div className="group bg-white bg-opacity-75 rounded-xl overflow-hidden text-center relative hover:bg-[#343434] transition-all">
                      <div className="flex justify-center items-center">
                        <TrashIcon className="text-[#343434] p-4 h-16 w-16 group-hover:text-white transition-all" />
                      </div>
                    </div>
                  </button>
                </div>

                <div className="flex justify-center items-center">
                  {!savedAnswer &&
                  savedTranscript !== dbSavedAnswer &&
                  savedTranscript !== "" ? (
                    <button
                      onClick={() => saveButton()}
                      className="drop-shadow-lg group hover:scale-125 duration-200"
                    >
                      <div className="flex justify-center items-center pt-3 group bg-white bg-opacity-75 px-2 rounded-xl h-full overflow-hidden relative group-hover:bg-[#57d96d] duration-200">
                        <p className="pb-4 pr-2 text-center font-bold group-hover:text-white transition duration-1000">
                          Guardar Respuesta
                        </p>
                        <BookmarkIcon className="pb-4 w-7 text-[#57d96d] group-hover:text-white transition duration-1000" />
                      </div>
                    </button>
                  ) : savedAnswer ? (
                    <div className="flex justify-center items-center pt-3 group bg-[#ffffff00] bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative">
                      <p className="pb-4 pr-2 text-center font-bold text-[#3f6645] drop-shadow-lg">
                        Respuesta Guardada
                      </p>
                      <DocumentCheckIcon className="pb-4 w-7 text-[#3f6645] drop-shadow-lg" />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center pt-3 group bg-[#ffffff00] bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative">
                      <p className="pb-4 pr-2 text-center font-bold text-[#949494] drop-shadow-lg">
                        Guardar Respuesta
                      </p>
                      <BookmarkIcon className="pb-4 w-7 text-[#949494] drop-shadow-lg" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
