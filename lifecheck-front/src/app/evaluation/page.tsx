"use client"
import EvaluationCard from "@/src/components/EvaluationCard";
import CompleteEvaluation from "@/src/components/CompleteEvaluation";
import { useState, useEffect, use } from "react";

// Backend no compatible
import {getSession} from '@auth0/nextjs-auth0'
import { redirect } from "next/navigation";
import { set } from "@auth0/nextjs-auth0/dist/session";
import getUser from "@/src/services/user";

export default function Evaluation() {
  const [user, setUser] = useState(null);
  const [answersGot, setAnswersGot] = useState([]);
  const [canLoad, setCanLoad] = useState(false);

  const [educationQ, setEducationQ] = useState([]);
  const [equilibrioTrabajoVidaQ, setEquilibrioTrabajoVidaQ] = useState([]);
  const [ingresosQ, setIngresosQ] = useState([]);
  const [medioAmbienteQ, setMedioAmbienteQ] = useState([]);
  const [saludQ, setSaludQ] = useState([]);
  const [satisfaccionQ, setSatisfaccionQ] = useState([]);
  const [seguridadQ, setSeguridadQ] = useState([]);
  const [viviendaQ, setViviendaQ] = useState([]);

  const allMyCategoryQuestions = [educationQ, equilibrioTrabajoVidaQ, ingresosQ, medioAmbienteQ, saludQ, satisfaccionQ, seguridadQ, viviendaQ];

  useEffect(() => {
    
    const loadUser = async () => {
      try {
        // GET DEL USUARIO
        const dataUser = await getUser();
        setUser(dataUser.user);
        // GET DE LAS PREGUNTAS
        // Educación
        const responseC2 = await fetch('/api/categoryQuestions/educacion');
        const dataC2 = await responseC2.json();
        setEducationQ(dataC2.questions);
        // Equilibrio trabajo-vida
        const responseC3 = await fetch('/api/categoryQuestions/equilibrioTrabajoVida');
        const dataC3 = await responseC3.json();
        setEquilibrioTrabajoVidaQ(dataC3.questions);
        // Ingresos
        const responseC4 = await fetch('/api/categoryQuestions/ingresos');
        const dataC4 = await responseC4.json();
        setIngresosQ(dataC4.questions);
        // Medio Ambiente 
        const responseC5 = await fetch('/api/categoryQuestions/medioAmbiente');
        const dataC5 = await responseC5.json();
        setMedioAmbienteQ(dataC5.questions);
        // Salud
        const responseC6 = await fetch('/api/categoryQuestions/salud');
        const dataC6 = await responseC6.json();
        setSaludQ(dataC6.questions);
        // Satisfacción
        const responseC7 = await fetch('/api/categoryQuestions/satisfaccion');
        const dataC7 = await responseC7.json();
        setSatisfaccionQ(dataC7.questions);
        // Seguridad
        const responseC8 = await fetch('/api/categoryQuestions/seguridad');
        const dataC8 = await responseC8.json();
        setSeguridadQ(dataC8.questions);
        // Vivienda
        const responseC1 = await fetch('/api/categoryQuestions/vivienda');
        const dataC1 = await responseC1.json();
        setViviendaQ(dataC1.questions);
        // GET DE LAS RESPUESTAS
        const responseAnswers = await fetch('/api/answers');
        const dataAnswers = await responseAnswers.json();
        setAnswersGot(dataAnswers.answers);
        
        // LOADING
        setCanLoad(true);
      }
      catch (err){setCanLoad(true)};
    };
    loadUser();
  }, []);

  if(user === null && canLoad === true){redirect('/api/auth/login')}

  const [chosenCategory, setChosenCategory] = useState("Nulo");
  const [showedCategory, setshowedCategory] = useState("NoDebeSer");
  

  const toggleVisibility = (cardName) => {
    setChosenCategory(cardName);
    setshowedCategory("NoDebeSer");
  };
  
  useEffect(() => {
    if (showedCategory === "NoDebeSer") {
      setshowedCategory(chosenCategory);
    }
  }, [showedCategory]);

  let [resultsContents, setResultsContents] = useState([
    {cardName: "Vivienda", littleDown: true, isComplete: 0},
    {cardName: "Satisfacción", littleDown: true, isComplete: 0},
    {cardName: "Educación", littleDown: true, isComplete: 0},
    {cardName: "Medio ambiente", littleDown: false, isComplete: 0},
    {cardName: "Salud", littleDown: true, isComplete: 0},
    {cardName: "Ingresos", littleDown: true, isComplete: 0},
    {cardName: "Seguridad", littleDown: true, isComplete: 0},
    {cardName: "Equilibrio trabajo-vida", littleDown: false, isComplete: 0},
  ]);

  const CheckIfComplete = async (categoryName) => {
    try {
      // GET DEL USUARIO
      const responseUser = await fetch('/api/user');
      const dataUser = await responseUser.json();
      setUser(dataUser.user);
      // GET DE LAS PREGUNTAS
      // Educación
      const responseC2 = await fetch('/api/categoryQuestions/educacion');
      const dataC2 = await responseC2.json();
      setEducationQ(dataC2.questions);
      // Equilibrio trabajo-vida
      const responseC3 = await fetch('/api/categoryQuestions/equilibrioTrabajoVida');
      const dataC3 = await responseC3.json();
      setEquilibrioTrabajoVidaQ(dataC3.questions);
      // Ingresos
      const responseC4 = await fetch('/api/categoryQuestions/ingresos');
      const dataC4 = await responseC4.json();
      setIngresosQ(dataC4.questions);
      // Medio Ambiente 
      const responseC5 = await fetch('/api/categoryQuestions/medioAmbiente');
      const dataC5 = await responseC5.json();
      setMedioAmbienteQ(dataC5.questions);
      // Salud
      const responseC6 = await fetch('/api/categoryQuestions/salud');
      const dataC6 = await responseC6.json();
      setSaludQ(dataC6.questions);
      // Satisfacción
      const responseC7 = await fetch('/api/categoryQuestions/satisfaccion');
      const dataC7 = await responseC7.json();
      setSatisfaccionQ(dataC7.questions);
      // Seguridad
      const responseC8 = await fetch('/api/categoryQuestions/seguridad');
      const dataC8 = await responseC8.json();
      setSeguridadQ(dataC8.questions);
      // Vivienda
      const responseC1 = await fetch('/api/categoryQuestions/vivienda');
      const dataC1 = await responseC1.json();
      setViviendaQ(dataC1.questions);
      // GET DE LAS RESPUESTAS
      const responseAnswers = await fetch('/api/answers');
      const dataAnswers = await responseAnswers.json();
      setAnswersGot(dataAnswers.answers);
    }
    catch (err){};

    const categoryQ = {
        "Vivienda": viviendaQ,
        "Satisfacción": satisfaccionQ,
        "Educación": educationQ,
        "Medio ambiente": medioAmbienteQ,
        "Salud": saludQ,
        "Ingresos": ingresosQ,
        "Seguridad": seguridadQ,
        "Equilibrio trabajo-vida": equilibrioTrabajoVidaQ,
    }[categoryName];


    let questionsResponded = 0;
    categoryQ.forEach(question => {
        const isAnswered = answersGot.some(answer => answer.questionId === question.questionId);
        if (isAnswered) {
            questionsResponded++;
        }
    });

    let isComplete = categoryQ.length === questionsResponded ? 3 : 1;
    if(questionsResponded < categoryQ.length && questionsResponded >= 1){isComplete = 2;}
    voidComplete(isComplete, categoryName);
}

const voidComplete = (isComplete, fromCategory) => {
  // Crea una nueva copia del estado modificando solo los elementos necesarios.
  const updatedResults = resultsContents.map(content => {
      if (content.cardName === fromCategory) {
          return { ...content, isComplete }; // Inmutable: crea un nuevo objeto con la propiedad actualizada
      }
      return content; // Retorna los elementos no modificados tal cual
  });

  setResultsContents(updatedResults); // Actualiza el estado con la nueva lista
}

  return (
    <div>
      {(user != null && canLoad == false) ?
      (<p className="text-3xl text-center duration-200 mt-40 mb-44">Cargando Evaluaciones . . .</p>):
        (user != null && canLoad == true) ? (
        <div>
<p className="text-2xl pb-12 text-center underline underline-offset-8">
        Evaluación
      </p>

<div className="flex justify-center mb-0">
      {resultsContents.map((content) => {
        return (
          <div className="px-3">
            <EvaluationCard cardName={content.cardName} showedCategory={showedCategory} littleDown={content.littleDown} toggleVisibility={toggleVisibility} checkValue={content.isComplete}/>
          </div>
          // Recreate previous div, and make sure to add the checkValue as the isCompleteValue from results content based on the cardName

        );
      })}
      </div>
      
      <div>
        {
        (showedCategory === "Vivienda") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={viviendaQ}/>):
        (showedCategory === "Satisfacción") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={satisfaccionQ}/>):
        (showedCategory === "Educación") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={educationQ}/>):
        (showedCategory === "Medio ambiente") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={medioAmbienteQ}/>):
        (showedCategory === "Salud") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={saludQ}/>):
        (showedCategory === "Ingresos") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={ingresosQ}/>):
        (showedCategory === "Seguridad") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={seguridadQ}/>):
        (showedCategory === "Equilibrio trabajo-vida") ?
        (<CompleteEvaluation CheckIfComplete={() => CheckIfComplete(showedCategory)} categoryName={showedCategory} categoryQuestions={equilibrioTrabajoVidaQ}/>):
        (<div/>)
        }
      </div>

          </div>
        ):
        (<div/>)}

      
    </div>
  );
}
