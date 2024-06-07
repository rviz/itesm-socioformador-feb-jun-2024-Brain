import React, { use, useState } from 'react';

import {
  SparklesIcon
} from "@heroicons/react/24/solid";
import { category } from '@/src/db/schema';

interface CallAPI
{
  paramUserID: string;
}

const MyComponent: React.FC<CallAPI> = ({ paramUserID }) => {
  const [categoryIDkey, setCategoryIDkey] = useState(0);
  const [response, setResponse] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const gabo = 'https://w7jjh178z8.execute-api.us-east-2.amazonaws.com/default/myGaboFunction';
      const rodri = 'https://92ak4s8rqi.execute-api.us-east-2.amazonaws.com/default/freakyscript';
      const res = await fetch(gabo, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paramUserID, categoryIDkey})
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error: ' + error.message);
    }
  }

  async function SubmitResponse(event) {
    event.preventDefault();
    try {
      const gabo = 'https://w7jjh178z8.execute-api.us-east-2.amazonaws.com/default/myGaboFunction';
      const rodri = 'https://92ak4s8rqi.execute-api.us-east-2.amazonaws.com/default/freakyscript';
      const res = await fetch(gabo, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        //body: '{"userIDkey": "2"}'
        body: JSON.stringify({ userIDkey: paramUserID, categoryIDkey: categoryIDkey})
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error: ' + error.message);
    }
  }

  const [progress, setProgress] = useState(0);

  // TODOS LOS RESULTADOS
  async function GenerarTodosLosResultados(event) {
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
  }



  return (
    <div>
    <div>
    <button onClick={GenerarTodosLosResultados} className="drop-shadow-lg group hover:scale-125 duration-200">
                      <div className="flex justify-center items-center pt-3 group bg-white bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative group-hover:bg-[#57bfd9] duration-200">
                      <p className="pb-4 pr-2 text-center font-bold group-hover:text-white transition duration 1000">Generar Resultados</p>
                        <SparklesIcon className="pb-4 w-7 text-[#57bfd9] group-hover:text-white transition duration 1000" />
                    </div>
                      </button>

                      {/*<div className='bg-[#2e7c9b] rounded-full drop-shadow-lg'>
                        <p className="text-3xl text-white font-bold text-center duration-200 mt-10">{progress}/9</p>
                      </div>

                      <progress value={0.5} className='rounded-full bg-slate-800'/>*/}
                      
      </div>

      



      {/*<form onSubmit={SubmitResponse}>

<label htmlFor="categoryIDkey">Category ID:   </label>
        <input
          type="number"
          id="categoryIDkey"
          name="categoryIDkey"
          value={categoryIDkey}
          onChange={(e) => setCategoryIDkey(Number(e.target.value))}
        /><br/>

      </form>*/}
      


      <div className="mt-10 flex flex-col items-center justify-center bg-[#e9e9e9] rounded-full drop-shadow-lg">
      <div className="w-full h-7 rounded-full">
        <div
          className="bg-gradient-to-r from-[#2e5c64] to-[#52c0d3] h-full transition-all duration-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
    </div>
  );
}

export default MyComponent;