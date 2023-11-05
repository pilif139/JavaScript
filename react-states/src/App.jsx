import './App.css'
import { useState, useEffect} from 'react'

function App() {
  const [counter /*nazwa zmiennej*/, setCounter] = useState(0 /*wartosc poczatkowa*/);
  //counter moze byc tylko modyfikowany przez jego setter - setCounter

  useEffect(()=>{
    console.log(`counter changed to ${counter}`);
  }, [counter]);

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={()=>setCounter((prevCount)=> prevCount + 1)}>+</button>
      <button onClick={()=>setCounter((prevCount)=> prevCount - 1)}>-</button>
    </>
  );
}

export default App
