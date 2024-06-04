"use client"
import ResultsTab from "@/src/components/EvaluationCard";
import CompleteEvaluation from "@/src/components/CompleteEvaluation";
import { useState, useEffect, use } from "react";

// Backend no compatible
import {getSession} from '@auth0/nextjs-auth0'
import { redirect } from "next/navigation";
import { set } from "@auth0/nextjs-auth0/dist/session";

export default function Evaluation() {
  const [user, setUser] = useState(null);
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      try {
        // GET DEL USUARIO
        const response = await fetch('/api/user');
        const data = await response.json();
        setUser(data.user);
        setCanLoad(true);
      }
      catch (err){setCanLoad(true)};
    };

    loadUser();
  }, []);

  if(user === null && canLoad === true){redirect('/api/auth/login')}

  
  const resultsContents = [
    {cardName: "Vivienda", littleDown: true },
    {cardName: "Satisfacción", littleDown: true},
    {cardName: "Educación", littleDown: true},
    {cardName: "Medio ambiente", littleDown: false},
    {cardName: "Salud", littleDown: true},
    {cardName: "Ingresos", littleDown: true},
    {cardName: "Seguridad", littleDown: true},
    {cardName: "Equilibrio trabajo-vida", littleDown: false},
  ];

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

  return (
    <div>
      {(user != null && canLoad == true) ? (
        <div>
<p className="text-2xl pb-12 text-center underline underline-offset-8">
        Evaluación
      </p>

<div className="flex justify-center mb-20">
      {resultsContents.map((content) => {
        return (
          <div className="px-3">
            <ResultsTab cardName={content.cardName} showedCategory={showedCategory} littleDown={content.littleDown} toggleVisibility={toggleVisibility}/>
          </div>
        );
      })}
      </div>
      
      <div>
        {
        (showedCategory === "Vivienda") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/vivienda'/>):
        (showedCategory === "Satisfacción") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/satisfaccion'/>):
        (showedCategory === "Educación") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/educacion'/>):
        (showedCategory === "Medio ambiente") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/medioAmbiente'/>):
        (showedCategory === "Salud") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/salud'/>):
        (showedCategory === "Ingresos") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/ingresos'/>):
        (showedCategory === "Seguridad") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/seguridad'/>):
        (showedCategory === "Equilibrio trabajo-vida") ?
        (<CompleteEvaluation categoryPath ='/api/categoryQuestions/equilibrioTrabajoVida'/>):
        (<div/>)
        }
      </div>

          </div>
        ):
        (<div/>)}

      
    </div>
  );
}
