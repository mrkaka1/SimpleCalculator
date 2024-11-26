import React, { useState } from "react";
import InputNumber from "./InputNumber";
import ButtonAdd from "./ButtonAdd";
import Result from "./Result";
import './SimpleCalculator.css'

function SimpleCalculator({ titulo }) {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSoma = () => {
    const soma = parseFloat(num1) + parseFloat(num2);
    setResultado(soma);
  };

  const handleLimpar = () => {
    setNum1("");
    setNum2("");
    setResultado(null);
  };

  return (
    <div className="container-calc">
      <h1>{titulo}</h1>
      <InputNumber
        label="Número 1:"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <InputNumber
        label="Número 2:"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <ButtonAdd onSomar={handleSoma} onLimpar={handleLimpar} />
      <Result resultado={resultado} />
    </div>
  );
}

export default SimpleCalculator;
