import React from 'react';
import { useState } from 'react';


export default function App () {

  const [text, setText] = useState("");
  const [submittedText, setSubmittedText] = useState("");


   return (
    <div>
        <h1>Translator App</h1>
        <p>Created by Laxmi</p>

        <input value={text} onChange={(event) => setText(event.target.value)} />
        <p>You typed: {text}</p>

       <button onClick={() => setSubmittedText(text)}>
        Translate
       </button>
       <p>{submittedText}</p>



    </div>
   );


}
