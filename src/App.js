// Assets
import imgCronometro from   "./assets/cronometro.png"

//Styles
import "./app.scss" 
import { useCallback, useState } from "react";


function App() {


  const [time,setTime] = useState(0);
  
  
  const startTime = useCallback(()=>{
    


  },[])


  return (
    <div className="app__container">
      <img src={imgCronometro} alt="Cronometro"  className="app__container__image"/>
      <div className="app__timer"> {time.toFixed(1)}</div>
      <div className="app__button-container">
        <div className ="app__button-container__button" onClick={startTime}> Iniciar </div>
        <div className ="app__button-container__button"onClick={() => setTime(0)}> limpar </div>
      </div>
      
    </div>
  );
}

export default App;
