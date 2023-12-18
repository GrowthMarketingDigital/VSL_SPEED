import { useState, useEffect } from "react";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

import "./Header.css";

const Header = () => {
  const [value, setValor] = useState(350);

  function aleatorio(min: number, max: number) {
    let x = Math.floor(Math.random() * (max - min)) + min;
    setValor(x);
    return x;
  }

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      aleatorio(340, 410);
    }, 10000);

    return () => clearTimeout(idTimeout);
  }, [value]);

  return (
    <div className='menu'>
      <h1>
        <span className='grifar'>COMO PESSOAS COMUNS ESTÃO FAZENDO MUITO DINHEIRO CONSISTENTE NOS CASSINOS SEM PRECISAR:</span>
      </h1>
    <ul>
      <li><TbCircleNumber1 className="icon" />hackear a plataforma</li>
      <li><TbCircleNumber2 className="icon" />descobrir uma “falha no sistema”</li>
      <li><TbCircleNumber3 className="icon" />de “gerador de sinal” fajuto</li>
    </ul>
      <h3><span>🟢{value}</span> pessoas assistindo agora</h3>
    </div>
  )
}

export default Header