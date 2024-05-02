
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
import { getEducationQuestions } from "@/src/data/questions";

export default async function Dictaphone() {
  const questions = await getEducationQuestions();

  return (
    <div>
      {questions.map((question) => (
        <div>
        <Question pregunta={question.qText} descripcion="Desayuno, Comida, Refrigerio, Cena. Alimentos y Bebidas."/></div>
        
      ))}
    </div>
  );
};