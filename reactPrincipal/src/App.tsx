import { useEffect } from 'react';
import { Form } from './Form';

export default function App() {
  useEffect(() => {
    // Função que troca a cor de fundo quando o componente é montado
    const trocarFundo = () => {
      document.body.style.transition = "2s";
      document.body.style.backgroundColor = "rgba(211, 211, 211, 1)";
    };

    trocarFundo();
  }, []); // O array vazio [] garante que isso só seja executado uma vez, quando o componente for montado.
  
  return (
    <>
    <Form />
    </>
  );
}
