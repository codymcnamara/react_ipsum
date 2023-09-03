import { useState } from "react";
import text from "./data"
import { nanoid } from 'nanoid';

const App = () => {
  const [count, setCount] = useState(1);
  const [displayText, setDisplayText ] = useState(text.slice(0,count));

  let pars = displayText.map((par)=>{
    return <p key={nanoid()}>{par}</p>
  })

  function handleSubmit (e) {
    e.preventDefault();
    setDisplayText(text.slice(0,count));
  }

  return (
    <div className="section-center">
      <h4>Lorem Ipsum</h4>
      <form onSubmit={handleSubmit} className="lorem-form" action="">
        <input
          onChange={(e)=>setCount(Number(e.target.value))}
          value={count}
          type="number" 
          id="amount" 
          name="amount"
          step="1" 
          min="1" 
          max="8" 
        />
        <button type="submit" className="btn">Generate</button>
      </form>
      <div className="lorem-text">
        {pars}
      </div>
    </div>
  );
};
export default App;
