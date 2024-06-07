
"use client"
import "@babel/polyfill";
import 'regenerator-runtime/runtime';

import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import Question from '../Questions';
import { Check, Circle } from "lucide-react";



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

async function replaceAnswer(aText, questionId, createdBy, userID) {
  // Suponiendo que tienes configurada una API en `/api/addQuestion`
  const response = await fetch('/api/replaceAnswers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  aText, questionId, createdBy, userID})
  });
  return await response.json();
}

interface Category {
  categoryQuestions: any;
  categoryName: string;
  CheckIfComplete: () => void;
}

const MyComponent: React.FC<Category> = ({ categoryQuestions, categoryName, CheckIfComplete }) => {
  const { user } = useUser();
  const [questionsGot, setQuestions] = useState([]);
  const [answersGot, setAnswersGot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        setQuestions(categoryQuestions);
        // GET DE LAS RESPUESTAS
        const responseA = await fetch('/api/answers');
        const dataA = await responseA.json();
        setAnswersGot(dataA.answers);
        CheckIfComplete();
        // LOADING
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions');
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  const handleReplaceAnswer = async (question_id: number, answerTranscript: string) => {
    try {
      const newAnswer = await replaceAnswer(answerTranscript, question_id, null, user.sub);
      //setQuestions([...questions, newQuestion]);
    } catch (error) {
      console.error('Error replacing answer:', error);
    }
  };

  let firstQuestionID = 0;
  if(questionsGot.length > 0)
    {firstQuestionID = questionsGot[0].questionId;}
  const [currentQuestionID, setCurrentQuestionID] = useState(firstQuestionID);
  const voidCurrentQuestionID = (question_id: number) =>
  {
    setCurrentQuestionID(question_id);
  };



  if (error) {
    return <p className="text-3xl text-center duration-200 mt-20 mb-44 text-[#8b2121] font-bold">Error al Cargar Evaluación</p>;
  }

  if (loading) {
    return <p className="text-3xl text-center duration-200 mt-20 mb-44">Cargando Evaluación . . .</p>;
  }

  let circlesOrder = 0;
  const getCirclesOrder = () =>
  {
    circlesOrder += 1;
    if(circlesOrder > 2){circlesOrder = 0;}
    return circlesOrder;
  }

  let circlesColors = ["bg-[#000000]", "bg-[#000000]", "bg-[#000000]"];
  if(categoryName == 'Vivienda')
    {circlesColors = ["bg-[#c4ab1f83]", "bg-[#79430783]", "bg-[#ff8f1083]"];}
  else if(categoryName == 'Satisfacción')
    {circlesColors = ["bg-[#1fc4bc83]", "bg-[#431fc483]", "bg-[#1f74c483]"];}
  else if(categoryName == 'Educación')
    {circlesColors = ["bg-[#cbff1083]", "bg-[#fffb1083]", "bg-[#ffab1083]"];}
  else if(categoryName == 'Medio ambiente')
    {circlesColors = ["bg-[#9ddf3383]", "bg-[#10b16083]", "bg-[#1fc43583]"];}
  else if(categoryName == 'Salud')
    {circlesColors = ["bg-[#ff6c5283]", "bg-[#ff681083]", "bg-[#ff000083]"];}
  else if(categoryName == 'Ingresos')
    {circlesColors = ["bg-[#dd277c83]", "bg-[#7b1fe483]", "bg-[#f945ff83]"];}
  else if(categoryName == 'Seguridad')
    {circlesColors = ["bg-[#2dad8783]", "bg-[#075b7583]", "bg-[#22aca083]"];}
  else if(categoryName == 'Equilibrio trabajo-vida')
    {circlesColors = ["bg-[#f580d283]", "bg-[#c080f583]", "bg-[#f580f583]"];}

  return (
    <div>
      <div>
      {questionsGot.map((question) => {
      // Encuentra la respuesta que coincide con el ID de la pregunta.
      const correspondingAnswer = answersGot.find(answer => answer.questionId == question.questionId);

      return (
        <div key={question.questionId}>
          <Question
            pregunta={question.qText}
            descripcion={question.qDescription}
            answerAdder={handleReplaceAnswer}
            question_id={question.questionId}
            currentQuestionID={currentQuestionID}
            voidCurrentQuestionID={voidCurrentQuestionID}
            dbSavedAnswer={correspondingAnswer ? correspondingAnswer.aText : "No hay respuesta previa"}
            circlesOrder={getCirclesOrder()}
            circlesColors={circlesColors}
            categoryName={categoryName}
            CheckIfComplete={CheckIfComplete}
          />
        </div>
      );
    })}
      </div>



      <div className="text-[#f580d283]"/>
    </div>
    
  );
}

export default MyComponent;