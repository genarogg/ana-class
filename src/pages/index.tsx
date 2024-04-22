import React, { useState } from "react";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const [numero, setNumero] = useState(0);

  const sumarNumero = () => {
    setNumero(numero + 1);
  };

  return (
    <>
      <h1>el valor del estado es: {numero} </h1>

      <button
        onClick={() => {
          sumarNumero();
        }}
      >
        sumar 1
      </button>
    </>
  );
};

export default index;
