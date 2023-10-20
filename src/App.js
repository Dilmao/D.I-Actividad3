import { useState } from 'react';
import './App.css';
import ComponenteCalculadora from './ComponenteCalculadora';
import ComponenteDivide from './ComponenteDivide';
import ComponenteMultiplica from './ComponenteMultiplica';
import ComponenteResta from './ComponenteResta';
import ComponenteResultado from './ComponenteResultado';
import ComponenteSuma from './ComponenteSuma';

function App() {
  const [total, setTotal] = useState(0);

  const resultadoHandler = (num1, num2, operador) => {
    let resultado;
    if (operador==="+") {
      resultado = num1 + num2;
    } else if (operador==="-") {
      resultado = num1 - num2;
    } else if (operador==="*") {
      resultado = num1 * num2;
    } else if (operador==="/") {
      resultado = num1 / num2;
    }
    setTotal(resultado);
  }
  
  return (
    <div className="App">
      <h1>Actividad 1</h1>
      <ComponenteSuma/>
      <ComponenteResta/>
      <ComponenteMultiplica/>
      <ComponenteDivide/>

      <br/><br/><hr/>

      <h1>Actividad 2</h1>
      <ComponenteCalculadora onInputSubmit={resultadoHandler}/>
      <ComponenteResultado total={total}/>
    </div>
  );
}

export default App;
