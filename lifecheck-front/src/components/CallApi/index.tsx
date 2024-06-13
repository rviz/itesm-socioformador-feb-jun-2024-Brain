import React, { use, useState } from 'react';

import {
  SparklesIcon
} from "@heroicons/react/24/solid";
import { category } from '@/src/db/schema';

interface CallAPI
{
  paramUserID: string;
  ProgressBarShown: (canShow : boolean) => void;
  showPB: boolean;
  VoidSetAnlysisGot: (myNewResults: []) => void;
}

const MyComponent: React.FC<CallAPI> = ({ paramUserID, ProgressBarShown, showPB, VoidSetAnlysisGot }) => {
  const [response, setResponse] = useState('');


  const [progress, setProgress] = useState(0);

  // TODOS LOS RESULTADOS
  async function GenerarTodosLosResultados(event) {
    ProgressBarShown(true);
    event.preventDefault();
    let categoryChangingID = 0;
    while(categoryChangingID < 8)
      {
        categoryChangingID++;
        setProgress((categoryChangingID/9) * 100);
        try {
          const res = await fetch('https://w7jjh178z8.execute-api.us-east-2.amazonaws.com/default/myGaboFunction', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            //body: '{"userIDkey": "2"}'
            body: JSON.stringify({ userIDkey: paramUserID, categoryIDkey: categoryChangingID})
          });
    
          const data = await res.json();
          setResponse(JSON.stringify(data, null, 2));
        } catch (error) {
          console.error('Error:', error);
          setResponse('Error: ' + error.message);
        }
      }
      setProgress(100);
      try {
        // GET DE LOS ANALISIS
        const responseAnalysis = await fetch('/api/analysis');
        const dataAnalysis = await responseAnalysis.json();
        VoidSetAnlysisGot(dataAnalysis.analysis);
      } catch (err) {}
      ProgressBarShown(false);
  }

  const getProgressColor = () => {
    if(progress < 100)
      {return "bg-gradient-to-r from-[#2e5c64] to-[#52c0d3] h-full transition-all duration-500 rounded-full";}
    else
    {return "bg-gradient-to-r from-[#2e6458] to-[#5dd352] h-full transition-all duration-500 rounded-full";}
  }



  return (
    <div>
    

      

      {(showPB == false) ? (
        <div>
        <button onClick={GenerarTodosLosResultados} className="drop-shadow-lg group hover:scale-125 duration-200">
                          <div className="flex justify-center items-center pt-3 group bg-white bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative group-hover:bg-[#57bfd9] duration-200">
                          <p className="pb-4 pr-2 text-center font-bold group-hover:text-white transition duration 1000">Generar Resultados</p>
                            <SparklesIcon className="pb-4 w-7 text-[#57bfd9] group-hover:text-white transition duration 1000" />
                        </div>
                          </button>
                          
          </div>
        )
        : (
          <div>
          <p className="text-3xl text-center duration-200 mt-20">Generando Resultados . . .</p>
          <div className="mt-10 flex flex-col items-center justify-center bg-[#e9e9e9] rounded-full drop-shadow-lg">
          <div className="w-full h-7 rounded-full">
            <div
              className={getProgressColor()}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        </div>
        )}
      
    </div>
  );
}

export default MyComponent;