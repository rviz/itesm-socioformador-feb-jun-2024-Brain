import React, { useState } from 'react';

interface CallAPI
{

}

const MyComponent: React.FC<CallAPI> = ({  }) => {
  const [userIDkey, setUserIDkey] = useState('');
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
        body: JSON.stringify({ userIDkey, categoryIDkey})
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="userIDkey">Key 1:</label>
        <input
          type="text"
          id="userIDkey"
          name="userIDkey"
          value={userIDkey}
          onChange={(e) => setUserIDkey(e.target.value)}
        /><br/>

        <label htmlFor="categoryIDkey">Key 2:</label>
        <input
          type="text"
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