import React from "react";
import { useState } from "react";

function ComponenteCalculadora({onInputSubmit}) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operador, setOperador] = useState("+");

  function num1EnteredHandler(event) {
    setNum1(event.target.value)
  }
  function num2EnteredHandler(event) {
    setNum2(event.target.value)
  }
  function operadorEnteredHandler(event) {
    setOperador(event.target.value)
  }

  React.useEffect(() => {
    onInputSubmit(parseInt(num1), parseInt(num2), operador);
  })

  return (
    <p>
      <input type="number" onChange={num1EnteredHandler}/>
      <select onChange={operadorEnteredHandler}>
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"*"}>*</option>
        <option value={"/"}>/</option>
      </select>
      <input type="number" onChange={num2EnteredHandler}/>
    </p>
  )
};

export default ComponenteCalculadora;