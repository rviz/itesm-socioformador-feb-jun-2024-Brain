
"use client"

import BarChart from "@/src/components/Graphs/BarChart";
import RadarChart from "@/src/components/Graphs/RadarChart";
import LineChart from "@/src/components/Graphs/LineChartStacked";
import React from 'react';
import { useState, useEffect } from 'react';
  
export default function Dictaphone() {
  const [questions, setQuestions] = useState([]);
  const [answersGot, setAnswersGot] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysisGot, setAnlysisGot] = useState([]);
  const [isRecommendationVisible, setIsRecommendationVisible] = useState(true); // Initially visible
  const [isHousingVisible, setIsHousingVisible] = useState(false); 
  const [isLifeSatisfactionVisible, setIsLifeSatisfactionVisible] = useState(false);
  const [isEducationVisible, setIsEducationVisible] = useState(false);
  const [isEnvironmentVisible, setIsEnvironmentVisible] = useState(false);
  const [isHealthVisible, setIsHealthVisible] = useState(false);
  const [isIncomeVisible, setIsIncomeVisible] = useState(false);
  const [isSecurityVisible, setIsSecurityVisible] = useState(false);
  const [isWorkLifeBalanceVisible, setIsWorkLifeBalanceVisible] = useState(false);
   
  const toggleVisibility = (visibleState) => {
    setIsWorkLifeBalanceVisible(visibleState === "WorkLifeBalance");
    setIsSecurityVisible(visibleState === "Security");
    setIsIncomeVisible(visibleState === "Income");
    setIsEnvironmentVisible(visibleState === "Environment");
    setIsEducationVisible(visibleState === "Education");
    setIsLifeSatisfactionVisible(visibleState === "LifeSatisfaction");
    setIsHousingVisible(visibleState === "Housing");
    setIsRecommendationVisible(visibleState === "Recommendation");
    setIsHealthVisible(visibleState === "Health");
  };

  const lastAnalysis = analysisGot.length > 0 ? analysisGot[analysisGot.length - 1] : null;

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
        const responseAnalysis = await fetch('/api/analysis');
        const dataAnalysis = await responseAnalysis.json();
        setAnlysisGot(dataAnalysis.analysis);
        // LOADING
        setLoading(false);
      } catch (err) {
        setError('Failed to load questions');
        setLoading(false);
      }
    };

    loadQuestions();
  }, []);

  if (error) {
    return <p>Error loading questions: {error}</p>;
  }

  if (loading) {
    return <p>Loading questions...</p>;
  }


  return (
    <div>
      <p className="text-2xl pb-12 text-center underline underline-offset-8">
        Resultados
      </p>

      <div className="flex justify-center ">
      <button onClick={() => toggleVisibility("Recommendation")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          General
        </button>
      <div className="w-4"></div> {/* Spacer */}
      <button onClick={() => toggleVisibility("Housing")} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Vivienda 
      </button>
      <div className="w-4"></div> {/* Spacer */}
      <button  onClick={() => toggleVisibility("LifeSatisfaction")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Satisfacción de Vida
      </button>
      <div className="w-4"></div>
      <button  onClick={() => toggleVisibility("Education")} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Educación
      </button>
      <div className="w-4"></div>
      <button  onClick={() => toggleVisibility("Environment")}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Medio Ambiente
      </button>
      <div className="w-4"></div>
      <button onClick={() => toggleVisibility("Health")}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Salud
      </button>
      <div className="w-4"></div>
      <button onClick={() => toggleVisibility("Income")}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Ingresos
      </button>
      <div className="w-4"></div>
      <button onClick={() => toggleVisibility("Security")}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Seguridad
      </button>
      <div className="w-4"></div>
      <button onClick={() => toggleVisibility("WorkLifeBalance")}   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
      Equilibrio Trabajo-Vida
      </button>
      </div>

      {isRecommendationVisible && (
      <div>
      <div className="flex justify-center space-y-7">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ width: '400px', height: '400px', justifyContent: 'center', alignItems: 'center' }}> 
            <br />
            <RadarChart data={analysisGot} />
              </div>
            </div>
            </div>

          <div className="text-center text-2xs">    
          <p>Se debe demostrar que necesitas mejorar tu rendimiento físico, en cuanto al área de <span className="font-bold">salud</span>.</p>
          {lastAnalysis && lastAnalysis.feedbackDescription && <p>{lastAnalysis.feedbackDescription}</p>}
          </div>
          <br />
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '400px', height: '400px'  }}> 
              <BarChart data={analysisGot} />
            </div>
            <div style={{ width: '400px', height: '400px'  }}> 
              <LineChart data={analysisGot} />
            </div>
          </div>
        </div>
        )}

        
        {isHousingVisible && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu rendimiento físico, en cuanto al área de <span className="font-bold">salud</span>.</p>
            <p>{lastAnalysis.feedbackHousing}</p>

          </div>
        )}

        {isLifeSatisfactionVisible && (
          <div className="text-center text-2xs"> 
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> Satisfacción de Vida </span>.</p>
            <p>{lastAnalysis.feedbackLifeSatisfaction}</p>
          </div>
        )}

        {isEducationVisible && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> Educación </span>.</p>
            <p>{lastAnalysis.feedbackEducation}</p>
          </div>
        )}

        {isEnvironmentVisible && (
          <div className="text-center text-2xs"> 
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> isEnvironmentVisible </span>.</p>
            <p>{lastAnalysis.feedbackEnvironment}</p>
          </div>
        )}

        {isIncomeVisible && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> isIncomeVisible </span>.</p>
            <p>{lastAnalysis.feedbackIncome}</p>
          </div>
        )}

        {isSecurityVisible && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> Educación </span>.</p>
            <p>{lastAnalysis.feedbackSecurity}</p>
          </div>
        )}

        {isWorkLifeBalanceVisible && (
        <div  className="text-center text-2xs">
          <p>Se debe demostrar que necesitas mejorar
          tu ... <span className="font-bold"> Educación </span>.</p>
          <p>{lastAnalysis.feedbackWorkLifeBalance}</p>
        </div>
      )}

        {isHealthVisible && (
        <div  className="text-center text-2xs">
          <p>Se debe demostrar que necesitas mejorar
          tu ... <span className="font-bold"> isHealthVisible </span>.</p>
          <p>{lastAnalysis.feedbackHealth}</p>
        </div>
      )}

      
        <div>
          {analysisGot.map((analysis, index) => (
            <div key={index}>
              <p>Answer ID:{analysis.userId}</p>
              <p>Answer Question ID:{analysis.feedbackDescription}</p>
              </div>
              ))}
            </div>  
          </div>
     );
}

