import React from "react";
import styled from "styled-components";

export const Form: React.FC = () => {
  const StyledBloco = styled.div`
    /* Estilos do formulário */
    position: absolute;
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(10, 10, 40, 0.7);
    width: 320px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    input[type="text"],
    input[type="email"] {
      padding: 10px;
      font-size: 16px;
      border: 1px solid rgba(0, 0, 0, 0.42);
      border-radius: 5px;
      outline: none;
      width: 90%;
    }

    input[type="text"]:focus,
    input[type="email"]:focus {
      border-color: #4d90fe;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }

    input[type="submit"] {
      position: relative;
      border: 1px solid #ccc;
      background-color: transparent;
      font-size: 16px;
      width: 100px;
      height: 50px;
      margin-top: 15px;
      left: 50%;
      transform: translateX(-50%);
    }

    input[type="submit"]:hover {
      border-color: #4d90fe;
      box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }
  `;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Obtendo os valores dos campos
    const emailElement = document.getElementById("email") as HTMLInputElement ;
    const nomeElement = document.getElementById("nome") as HTMLInputElement ;

    if (emailElement && nomeElement) {
      const email = emailElement.value;
      const nome = nomeElement.value;

      if (email && nome) {
        try {
          const response = await fetch("/dados", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nome, email }),
          });

          if (response.ok) {
            const data = await response.json();
            alert(data.mensagem); // Exibe a mensagem de sucesso
          } else {
            const error = await response.json();
            alert(error.erro); // Exibe a mensagem de erro
          }
        } catch (err) {
          console.error("Erro ao enviar os dados:", err);
          alert("error");
        }
      } else {
        alert("Por favor, preencha todos os campos.");
      }
    } else {
      alert("Erro ao acessar os elementos do formulário.");
    }
  };

  return (
    <StyledBloco>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome: </label>
        <br />
        <input type="text" name="nome" id="nome" required />
        <br />

        <label htmlFor="email">Email: </label>
        <br />
        <input type="email" name="email" id="email" required />
        <br />

        <input type="submit" value="Enviar" />
      </form>
    </StyledBloco>
  );
};
