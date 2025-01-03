"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function pegarDados() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("http://localhost:5000/dados");
            if (!response.ok) {
                throw new Error(`Erro na requisição GET: ${response.status}`);
            }
            const data = yield response.json();
            console.log("Dados recebidos da API:", data);
            const rootDados = document.getElementById("rootDados");
            // Verifica se há dados e se rootDados foi encontrado
            if (Array.isArray(data) && rootDados) {
                for (let i = 0; i < data.length; i++) {
                    const nome = data[i].nome;
                    const email = data[i].email;
                    // Criando os elementos <h3> para o nome e email
                    const h3Nome = document.createElement("h3");
                    h3Nome.textContent = `Nome: ${nome}`;
                    const h3Email = document.createElement("h3");
                    h3Email.textContent = `Email: ${email}`;
                    // Adicionando os elementos ao rootDados
                    rootDados.appendChild(h3Nome);
                    rootDados.appendChild(h3Email);
                    // Função para copiar o texto para a área de transferência
                    function copiarTexto(text) {
                        navigator.clipboard.writeText(text).then(() => {
                            console.log("Texto copiado para a área de transferência!");
                        }).catch(err => {
                            console.error("Erro ao copiar o texto: ", err);
                        });
                    }
                    // Adicionando o evento de clique para copiar o conteúdo de cada <h3>
                    h3Nome.addEventListener("click", () => copiarTexto(h3Nome.textContent || ""));
                    h3Email.addEventListener("click", () => copiarTexto(h3Email.textContent || ""));
                }
            }
            else {
                console.log("Nenhum dado encontrado ou rootDados não encontrado");
            }
        }
        catch (error) {
            console.error("Erro:", error);
        }
    });
}
// Chamar a função
pegarDados();
