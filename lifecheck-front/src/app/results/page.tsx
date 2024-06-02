
"use client"
import ResultsTab from "@/src/components/EvaluationCard";
import BarChart from "@/src/components/Graphs/BarChart";
import RadarChart from "@/src/components/Graphs/RadarChart";
import LineChart from "@/src/components/Graphs/LineChartStacked";
import React from 'react';
import { useState, useEffect } from 'react';
  
export default function Results() {


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [analysisGot, setAnlysisGot] = useState([]);
  const [showedCategory, setshowedCategory] = useState("General");
   
  const toggleVisibility = (cardName) => {
    setshowedCategory(cardName);
  };

  const lastAnalysis = analysisGot.length > 0 ? analysisGot[analysisGot.length - 1] : null;

  useEffect(() => {
    const loadQuestions = async () => {
      setLoading(true);
      try {
        // GET DE LOS ANALISIS
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
    return <p className="text-3xl text-center duration-200 mt-44 mb-44 text-[#8b2121] font-bold">Error al Cargar Resultados</p>;
  }

  if (loading) {
    return <p className="text-3xl text-center duration-200 mt-44 mb-44">Cargando Resultados . . .</p>;
  }

  const resultsContents = [
    {cardName: "General", littleDown: true},
    {cardName: "Vivienda", littleDown: true },
    {cardName: "Satisfacción", littleDown: true},
    {cardName: "Educación", littleDown: true},
    {cardName: "Medio ambiente", littleDown: false},
    {cardName: "Salud", littleDown: true},
    {cardName: "Ingresos", littleDown: true},
    {cardName: "Seguridad", littleDown: true},
    {cardName: "Equilibrio trabajo-vida", littleDown: false},
  ];

  return (
    <div>
      <p className="text-2xl pb-12 text-center underline underline-offset-8">
        Resultados
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

      {showedCategory == "General" && (
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

        
        {showedCategory == "Vivienda" && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu rendimiento físico, en cuanto al área de <span className="font-bold">salud</span>.</p>
            <p>{lastAnalysis.feedbackHousing}</p>

          </div>
        )}

        {showedCategory == "Satisfacción" && (
          <div className="text-center text-2xs"> 
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> Satisfacción de Vida </span>.</p>
            <p>{lastAnalysis.feedbackLifeSatisfaction}</p>
          </div>
        )}

        {showedCategory == "Educación" && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> Educación </span>.</p>
            <p>{lastAnalysis.feedbackEducation}</p>
          </div>
        )}

        {showedCategory == "Medio ambiente" && (
          <div className="text-center text-2xs"> 
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> isEnvironmentVisible </span>.</p>
            <p>{lastAnalysis.feedbackEnvironment}</p>
          </div>
        )}

        {showedCategory == "Ingresos" && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> isIncomeVisible </span>.</p>
            <p>{lastAnalysis.feedbackIncome}</p>
          </div>
        )}

        {showedCategory == "Seguridad" && (
          <div className="text-center text-2xs">
            <p>Se debe demostrar que necesitas mejorar
            tu ... <span className="font-bold"> Educación </span>.</p>
            <p>{lastAnalysis.feedbackSecurity}</p>
          </div>
        )}

        {showedCategory == "Equilibrio trabajo-vida" && (
        <div  className="text-center text-2xs">
          <p>Se debe demostrar que necesitas mejorar
          tu ... <span className="font-bold"> Educación </span>.</p>
          <p>{lastAnalysis.feedbackWorkLifeBalance}</p>
        </div>
      )}

        {showedCategory == "Salud" && (
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

