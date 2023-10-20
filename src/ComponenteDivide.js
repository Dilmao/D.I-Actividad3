import { useState } from "react";

function ComponenteDivide() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  function valor1EnteredHandler(event) {
    setNum1(event.target.value)
  }

  function valor2EnteredHandler(event) {
    setNum2(event.target.value)
  }
    
  var total = num1 / num2;
  
  return (
    <form>
      <div>
        <input type="number" onKeyUp={valor1EnteredHandler}/>
        <span> / </span>
        <input type="number" onKeyUp={valor2EnteredHandler}/>
        <span> = </span>
        {total}
       </div>
    </form>
  );
};

export default ComponenteDivide;