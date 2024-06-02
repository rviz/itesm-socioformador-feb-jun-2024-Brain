
"use client"
import "@babel/polyfill";
import 'regenerator-runtime/runtime';

import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import Question from '../Questions';



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
  categoryPath: string;
}

const MyComponent: React.FC<Category> = ({ categoryPath }) => {
  const { user } = useUser();
  const [questions, setQuestions] = useState([]);
  const [answersGot, setAnswersGot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        // GET DE LAS PREGUNTAS
        const response = await fetch(categoryPath);
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
      const newAnswer = await replaceAnswer(answerTranscript, question_id, null, user.sub);
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
    return <p className="text-3xl text-center duration-200 mb-44 text-[#8b2121] font-bold">Error al Cargar Evaluación</p>;
  }

  if (loading) {
    return <p className="text-3xl text-center duration-200 mb-44">Cargando Evaluación . . .</p>;
  }

  let circlesOrder = 0;
  const getCirclesOrder = () =>
  {
    circlesOrder += 1;
    if(circlesOrder > 2){circlesOrder = 0;}
    return circlesOrder;
  }

  let circlesColors = ["bg-[#000000]", "bg-[#000000]", "bg-[#000000]"];
  if(categoryPath === '/api/categoryQuestions/vivienda')
    {circlesColors = ["bg-[#c4ab1f83]", "bg-[#79430783]", "bg-[#ff8f1083]"];}
  if(categoryPath === '/api/categoryQuestions/satisfaccion')
    {circlesColors = ["bg-[#1fc4bc83]", "bg-[#431fc483]", "bg-[#1f74c483]"];}
  else if(categoryPath === '/api/categoryQuestions/educacion')
    {circlesColors = ["bg-[#cbff1083]", "bg-[#fffb1083]", "bg-[#ffab1083]"];}
  if(categoryPath === '/api/categoryQuestions/medioAmbiente')
    {circlesColors = ["bg-[#9ddf3383]", "bg-[#10b16083]", "bg-[#1fc43583]"];}
  else if(categoryPath === '/api/categoryQuestions/salud')
    {circlesColors = ["bg-[#ff6c5283]", "bg-[#ff681083]", "bg-[#ff000083]"];}
  else if(categoryPath === '/api/categoryQuestions/ingresos')
    {circlesColors = ["bg-[#dd277c83]", "bg-[#7b1fe483]", "bg-[#f945ff83]"];}
  else if(categoryPath === '/api/categoryQuestions/seguridad')
    {circlesColors = ["bg-[#2dad8783]", "bg-[#075b7583]", "bg-[#22aca083]"];}
  else if(categoryPath === '/api/categoryQuestions/equilibrioTrabajoVida')
    {circlesColors = ["bg-[#f580d283]", "bg-[#c080f583]", "bg-[#f580f583]"];}

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
            descripcion={question.qDescription}
            answerAdder={handleReplaceAnswer}
            question_id={question.questionId}
            currentQuestionID={currentQuestionID}
            voidCurrentQuestionID={voidCurrentQuestionID}
            dbSavedAnswer={correspondingAnswer ? correspondingAnswer.aText : "No hay respuesta previa"}
            fetchAnswers={fetchAnswers}
            circlesOrder={getCirclesOrder()}
            circlesColors={circlesColors}
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