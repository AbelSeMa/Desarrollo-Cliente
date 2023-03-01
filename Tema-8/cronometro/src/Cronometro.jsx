import { useEffect, useState } from "react";
import './cronometro.css'

function Cronometro() {
  let [segundos, setSegundos] = useState(null);
  let [segundosPasados, setSegundosPasados] = useState(0);

  function parseForm(ev){  
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    setSegundos(parseInt(seconds));
  };

  useEffect(() =>{
    if (segundos === null) {
      return;            
    }

    let intervalo = setInterval(() => {
      setSegundosPasados((segundosPasados) => (segundosPasados + 1));
    }, 1000);

    return () => {
      clearInterval(intervalo);
    }
  }, [segundos])

  let segundosRestantes = segundos - segundosPasados;

  if (segundosRestantes <= 0 && segundos !== null){
    return(
      <>
        <p> ¡El contador ha finalizado! </p>
        <button onClick={()=>setSegundos(null)}> Empezar de nuevo </button>
      </>
    )
  }

  if (segundos !== null){
    return(
      <p> Quedan {segundosRestantes} de los {segundos} segundos </p>
    )
  }

  return(
    <>
      <p>
        Introduce una cantidad de segundos para hacer la cuenta
      </p>
      <form action="s" onSubmit={ev=>parseForm(ev)}>
        <input type="number"  name="seconds"/>
        <button> iniciar </button>
      </form>
    </> 
  );
}
export default Cronometro;
