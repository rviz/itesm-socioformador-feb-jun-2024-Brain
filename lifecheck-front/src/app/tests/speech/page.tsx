
import "@babel/polyfill";
import 'regenerator-runtime/runtime';

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

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

import Question from '../../../components/Questions';
import { getEducationQuestions, addQuestionTest } from "@/src/data/questions";

// Lo que inyecta datos a la base de datos
//const result = await addQuestionTest("Pregunta de prueba", true, 1, "Socioformador");

export default async function Dictaphone() {
  const questions = await getEducationQuestions();

  return (
    <div>
      {questions.map((question) => (
        <div>
        <Question pregunta={question.qText} descripcion="Desayuno, Comida, Refrigerio, Cena. Alimentos y Bebidas."/></div>
        
      ))}
      {/*<button onClick={() => addQuestionTest("Pregunta de prueba", true, 1, "Socioformador").then(response => {
    console.log('Respuesta recibida', response);
}).catch(error => {
    console.error('Error al agregar pregunta', error);
})}>Agregar pregunta</button>*/}
    </div>
  );
};