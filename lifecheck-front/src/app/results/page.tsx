
"use client"
import "@babel/polyfill";
import 'regenerator-runtime/runtime';
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <div style={{ width: '400px', height: '400px', justifyContent: 'center', alignItems: 'center' }}> 
        <RadarChart data={analysisGot} />
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '400px', height: '400px'  }}> 
        <BarChart data={analysisGot} />
      </div>
      
</div>


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ width: '400px', height: '400px'  }}> 
              <LineChart data={analysisGot} />
            </div>
            
      </div>

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