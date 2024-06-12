"use client";
import "@babel/polyfill";
import "regenerator-runtime/runtime";

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
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

import { useState } from 'react';

interface QuestionComponent {
  pregunta: string,
    descripcion: string
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


const MyComponent: React.FC<QuestionComponent> = ({ pregunta, descripcion, question_id, answerAdder, currentQuestionID, voidCurrentQuestionID, dbSavedAnswer, circlesOrder, circlesColors, categoryName, CheckIfComplete }) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
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
      if(savedTranscript == "")
        {
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

    const saveButton = () =>
      {
        answerAdder(question_id, savedTranscript);
        dbSavedAnswer = savedTranscript;
        CheckIfComplete();
        CheckIfComplete();
        setSavedAnswer(true);
      };

    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
      // Inicia la escucha y actualiza el estado
      const startListening = () => {
        SpeechRecognition.startListening({ continuous: true, language: 'es-MX' });
        setIsListening(true); // Se está escuchando
        setShowRed("outline outline-4 outline-[#913a3a] ");
        setSavedAnswer(false);
        if(currentQuestionID != question_id)
          {
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
            <div className={circlesColors[0] + " -translate-x-20 blur-md w-96 h-96 shadow-inner rounded-full"}>
            <div className={circlesColors[1] + " translate-x-72 translate-y-44 blur-md  w-96 h-96 shadow-inner rounded-full"}>
            <div className={circlesColors[2] + " -translate-x-96 translate-y-11 blur-md  w-96 h-96 shadow-inner rounded-full"}/>
              </div>
              </div></div>
          ):
          circlesOrder === 1 ? (
                <div className="hover:scale-110 duration-500">
            <div className={circlesColors[0] + " -translate-x-44 translate-y-10 blur-md w-96 h-96 rounded-full"}>
            <div className={circlesColors[1] + " translate-x-96 translate-y-20 blur-md  w-96 h-96 rounded-full"}>
            <div className={circlesColors[2] + " -translate-x-72 translate-y-28 blur-md  w-96 h-96 rounded-full"}/>
              </div>
              </div></div>
              ):
              circlesOrder === 2 ? (
                <div className="hover:scale-110 duration-500">
            <div className={circlesColors[0] + " translate-x-52 translate-y-44 blur-md w-96 h-96 shadow-inner rounded-full"}>
            <div className={circlesColors[1] + " -translate-x-96 translate-y-11 blur-md  w-96 h-96 shadow-inner rounded-full"}>
            <div className={circlesColors[2] + " translate-x-28 -translate-y-36 blur-md  w-96 h-96 shadow-inner rounded-full"}/>
              </div>
              </div></div>
              ):
              (<div/>)}
            
      <div /*className="bg-contain w-screen md:w-full bg-top bg-no-repeat drop-shadow-2xl" style={{ backgroundImage: "url('/EvaluationGreenBar.png')" }}*/>

        <div className="-mt-24">
      <div className="flex justify-center items-center pb-10 relative px-40">
            <div className=" bg-white shadow-2xl  px-4 pt-5 pb-5 rounded-3xl    rounded-full overflow-hidden ">
                  <p className="text-3xl text-center duration-200">{pregunta}</p>
                  </div>
            </div>
    
            <div className="flex justify-center relative items-center pb-10">
            <p className="text-1xl text-center w-3/5">{descripcion}
            <p className="text-1xl text-center text-white -translate-y-5 blur-md">{descripcion}</p>
            </p>
            </div>
    
            
    
          <div className="flex justify-center  pb-10">
    
          {!isListening ? (
          <button onClick={startListening} className="drop-shadow-lg group hover:scale-125 duration-200">
                    <div className="group h-full w-25 bg-white bg-opacity-75 px-2 pb-2 rounded-full    overflow-hidden text-center relative group-hover:bg-[#575bd9] transition duration 1000">
                    <div className="flex justify-center items-center">
                      {" "}
                      <MicrophoneIcon className="h-20 w-20 text-[#575bd9] p-4 group-hover:text-white transition duration 1000" />{" "}
                    </div>
                    <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">Responder</p>
                  </div>
                    </button>
                    ) : (
    
                    <button onClick={stopListening} className="drop-shadow-lg hover:scale-125 duration-200">
                    <div className="group h-full w-31 bg-white bg-opacity-75 px-2 pb-2 rounded-full    overflow-hidden text-center relative hover:bg-[#913a3a] transition duration 1000">
                    <div className="flex justify-center items-center">
                      {" "}
                      <PauseIcon className="h-20 w-20 text-[#913a3a] p-4 group-hover:text-white transition duration 1000" />{" "}
                    </div>
                    <p className="font-bold leading-relaxed mb-3 group-hover:text-white transition duration 1000">Parar</p>
                  </div>
                    </button>
                    )}

    
                    <div className="px-3"/>
    
                    
    
    
                  
    
            </div>
            
    
    
            <div className="pb-10 flex justify-center items-start">
    
            <textarea
      className={showRed + "w-2/5 bg-white drop-shadow-lg duration-200 font-medium rounded-full px-4 pt-2 pb-12 rounded-lg text-left"}
      value={savedTranscript} onChange={handleInputChange}
    />
    {/*BORRAR RESPUESTA*/}
    <button onClick={EraseBothTranscripts} className="scale-50 hover:scale-75 duration-200 drop-shadow-lg">
                    <div className="group bg-white bg-opacity-75  rounded-full    overflow-hidden text-center relative hover:bg-[#343434] transition duration 1000">
                    <div className="flex justify-center items-center">
                      <TrashIcon className=" text-[#343434] p-4 h-20 w-20 group-hover:text-white transition duration 1000" />{" "}
                    </div>
                  </div>
                    </button>
                    {/*BORRAR RESPUESTA*/}
              </div>
              <div className="flex justify-center items-center">

                    {/*GUARDAR RESPUESTA*/}
                    {(savedAnswer == false) ? (

                      <div>
                        {(savedTranscript != dbSavedAnswer && savedTranscript != "") ? (
                      <button onClick={() => saveButton()} className="drop-shadow-lg group hover:scale-125 duration-200">
                      <div className="flex justify-center items-center pt-3 group bg-white bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative group-hover:bg-[#57d96d] duration-200">
                      <p className="pb-4 pr-2 text-center font-bold group-hover:text-white transition duration 1000">Guardar Respuesta</p>
                        <BookmarkIcon className="pb-4 w-7 text-[#57d96d] group-hover:text-white transition duration 1000" />
                    </div>
                      </button>
                      ):(
                        <div >
                      <div className="flex justify-center items-center pt-3 group bg-[#ffffff00] bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative">
                      <p className="pb-4 pr-2 text-center font-bold text-[#949494] drop-shadow-lg">Guardar Respuesta</p>
                        <BookmarkIcon className="pb-4 w-7 text-[#949494] drop-shadow-lg" />
                    </div>
                      </div>
                      )}
                        </div>

                      ):(
                        <div >
                      <div className="flex justify-center items-center pt-3 group bg-[#ffffff00] bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative">
                      <p className="pb-4 pr-2 text-center font-bold text-[#3f6645] drop-shadow-lg">Respuesta Guardada</p>
                        <DocumentCheckIcon className="pb-4 w-7 text-[#3f6645] drop-shadow-lg" />
                    </div>
                      </div>
                      )}
                    
                      {/*GUARDAR RESPUESTA*/}
                    </div>

        </div>
      </div>
      </div>
    
          
            
          
    
        </div>
        
      );
};

export default MyComponent;