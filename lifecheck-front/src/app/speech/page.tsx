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
  TrashIcon,
  ArrowPathIcon,
  PresentationChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import { Play } from "next/font/google";
import { kMaxLength } from "buffer";

import Question from './Question';

const Dictaphone = () => {

  return (
    <div>
      <Question pregunta="¿Qué alimentos sueles consumir habitualmente?" descripcion="Desayuno, Comida, Refrigerio, Cena. Alimentos y Bebidas."/>
    </div>
  );
};
export default Dictaphone;
