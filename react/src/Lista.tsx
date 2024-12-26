import React, { useState, useEffect } from "react";

export const Dados: React.FC = () => {
  // Estado para armazenar os dados
  const [dados, setDados] = useState<{ nome: string, email: string }[]>([]);

  // Função para fazer a requisição e atualizar o estado com os dados
  const fetchDados = async () => {
    try {
      const response = await fetch("http://localhost:5000/dados");
      if (!response.ok) {
        throw new Error("Erro ao buscar dados.");
      }
      const data = await response.json();
      setDados(data); // Atualiza o estado com os dados recebidos
    } catch (err) {
      console.error("Erro ao buscar os dados:", err);
    }
  };

  // useEffect para carregar os dados ao montar o componente
  useEffect(() => {
    fetchDados();
  }, []); // O array vazio significa que essa função será chamada apenas uma vez, ao carregar o componente

  return (
    <div>
      <h1>Dados Recebidos:</h1>
      {/* Renderiza os dados dentro de uma lista */}
      <ul>
        {dados.map((item, index) => (
          <li key={index}>
            <strong>Nome:</strong> {item.nome} <br />
            <strong>Email:</strong> {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
