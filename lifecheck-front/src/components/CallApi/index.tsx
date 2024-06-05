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
        body: JSON.stringify({ userIDkey: paramUserID, categoryIDkey: 1})
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error: ' + error.message);
    }
  }



  return (
    <div>
      {/*<div>
        <button className="drop-shadow-xl w-28">
          <div className="relative group transition-transform duration-200 ease-in-out transform hover:-translate-y-3">
            <div className={"h-32 pt-3 rounded-lg transition-colors duration-200 bg-[#ffffff] group-hover:bg-[#72b5f4]"}>
              <div className={"flex items-center justify-center rounded-full group-hover:text-white duration-200"}>
              <SparklesIcon className="w-16 group-hover:text-white duration-200 text-[#72b5f4]"/>
              </div>
              <p className={"translate-y-0 text-center group-hover:text-white duration-200 font-semibold"}>
                Generar Resultados
              </p>
            </div>
          </div>
        </button>
    </div>*/}

    <div>
    <button onClick={SubmitResponse} className="drop-shadow-lg group hover:scale-125 duration-200">
                      <div className="flex justify-center items-center pt-3 group bg-white bg-opacity-75 px-2 rounded-full h-full overflow-hidden relative group-hover:bg-[#57bfd9] duration-200">
                      <p className="pb-4 pr-2 text-center font-bold group-hover:text-white transition duration 1000">Generar Resultados</p>
                        <SparklesIcon className="pb-4 w-7 text-[#57bfd9] group-hover:text-white transition duration 1000" />
                    </div>
                      </button>
      </div>

      <div className='mt-10'>
        <p className='text-center text-3xl font-bold text-[#57bfd9]'>{response}</p>
  </div>

  <div className='mt-10'>
        <p className='text-center text-3xl font-bold text-[#57bfd9]'>{paramUserID}</p>
  </div>



      <form onSubmit={SubmitResponse}>

<label htmlFor="categoryIDkey">Category ID:   </label>
        <input
          type="number"
          id="categoryIDkey"
          name="categoryIDkey"
          value={categoryIDkey}
          onChange={(e) => setCategoryIDkey(Number(e.target.value))}
        /><br/>

        <button type="submit">Send Request</button>
      </form>

      <div>
        <h2>Response:</h2>
        <pre>{response}</pre>
  </div>
    </div>
  );
}

export default MyComponent;