
"use client"
import "@babel/polyfill";
import 'regenerator-runtime/runtime';

import React from 'react';
import { useState, useEffect } from 'react';
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

async function addQuestionTest(qText, qType, categoryId, createdBy) {
  // Suponiendo que tienes configurada una API en `/api/addQuestion`
  const response = await fetch('/api/questions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ qText, qType, categoryId, createdBy })
  });
  return await response.json();
}

async function addAnswer(aText, questionId, createdBy) {
  // Suponiendo que tienes configurada una API en `/api/addQuestion`
  const response = await fetch('/api/answers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  aText, questionId, createdBy})
  });
  return await response.json();
}

async function replaceAnswer(aText, questionId, createdBy) {
  // Suponiendo que tienes configurada una API en `/api/addQuestion`
  const response = await fetch('/api/replaceAnswers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  aText, questionId, createdBy})
  });
  return await response.json();
}

export default function Dictaphone() {
  const [questions, setQuestions] = useState([]);
  const [answersGot, setAnswersGot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        // GET DE LAS PREGUNTAS
        const response = await fetch('/api/questions');
        const data = await response.json();
        setQuestions(data.questions);
        // GET DE LAS RESPUESTAS
        const responseA = await fetch('/api/answers');
        const dataA = await responseA.json();
        setAnswersGot(dataA.answers);
        // LOADING
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions');
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const fetchAnswers = async () => {
    const responseA = await fetch('/api/answers');
        const dataA = await responseA.json();
        setAnswersGot(dataA.answers);
  }

  const handleAddQuestion = async () => {
    try {
      const newQuestion = await addQuestionTest("MyPregunt", true, 1, "Buenas");
      console.log(newQuestion);
      setQuestions([...questions, newQuestion]);
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  const handleAddAnswer = async (question_id: number, answerTranscript: string) => {
    try {
      const newAnswer = await addAnswer(answerTranscript, question_id, null);
      //setQuestions([...questions, newQuestion]);
    } catch (error) {
      console.error('Error adding answer:', error);
    }
  };

  const handleReplaceAnswer = async (question_id: number, answerTranscript: string) => {
    try {
      const newAnswer = await replaceAnswer(answerTranscript, question_id, null);
      //setQuestions([...questions, newQuestion]);
    } catch (error) {
      console.error('Error replacing answer:', error);
    }
  };

  let firstQuestionID = 0;
  if(questions.length > 0)
    {firstQuestionID = questions[0].questionId;}
  const [currentQuestionID, setCurrentQuestionID] = useState(firstQuestionID);
  const voidCurrentQuestionID = (question_id: number) =>
  {
    setCurrentQuestionID(question_id);
  };

  const CheckIfSameQID = (question_id: number) =>
    {
      setCurrentQuestionID(question_id);
    };



  if (error) {
    return <p>Error loading questions: {error}</p>;
  }

  if (loading) {
    return <p>Loading questions...</p>;
  }


  return (
    <div>
      <div>
      {questions.map((question) => {
      // Encuentra la respuesta que coincide con el ID de la pregunta.
      const correspondingAnswer = answersGot.find(answer => answer.questionId == question.questionId);

      return (
        <div key={question.questionId}>
          <Question
            pregunta={question.qText}
            descripcion="Desayuno, Comida, Refrigerio, Cena. Alimentos y Bebidas."
            answerAdder={handleReplaceAnswer}
            question_id={question.questionId}
            currentQuestionID={currentQuestionID}
            voidCurrentQuestionID={voidCurrentQuestionID}
            dbSavedAnswer={correspondingAnswer ? correspondingAnswer.aText : "No hay respuesta previa"}
            fetchAnswers={fetchAnswers}
          />
        </div>
      );
    })}
      </div>

{/*<button onClick={handleAddAnswer}>Agregar Answr</button>*/}

      {/*<div>
        {answersGot.map((answer, index) => (
          <div key={index}>
            <p>Answer ID:{answer.id}</p>
            <p>Answer Text:{answer.aText}</p>
            <p>Answer Question ID:{answer.questionId}</p>
            <p>Answer Created At:{answer.createdAt}</p>
            </div>
            ))}
          </div>*/}
    </div>
    
  );
}