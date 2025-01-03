"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const expressPort = 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rota POST para receber dados
const dadosRecebidos = [];
// Rota POST para receber dados
app.post("/dados", (req, res) => {
    const { nome, email } = req.body;
    if (nome && email) {
        dadosRecebidos.push({ nome, email }); // Armazenando os dados
        res.status(200).json({ mensagem: "Dados recebidos!" });
    }
    else {
        res.status(400).json({ erro: "Dados inválidos!" });
    }
});
// Rota GET para visualizar os dados
app.get('/dados', (req, res) => {
    res.json(dadosRecebidos); // Retornando os dados recebidos
});
app.use(express_1.default.static(path_1.default.join(__dirname, "../")));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../index.html"));
});
const Submit = (event) => {
    event.preventDefault(); // Impede o envio do formulário padrão
    const emailElement = document.getElementById("email");
    const nomeElement = document.getElementById("nome");
    const submitElement = document.getElementById("submit");
    if (submitElement) {
        if (emailElement && nomeElement) {
            const email = emailElement.value;
            const nome = nomeElement.value;
            if (email && nome) {
                console.log(`Nome: ${nome}, Email: ${email}`);
            }
            else {
                alert("Por favor, preencha todos os campos.");
            }
        }
        else {
            alert("Erro ao acessar os elementos.");
        }
    }
};
// Inicia o servidor
app.listen(expressPort, () => {
    console.log(` `); // Linha em branco
    console.log(`\u001b[32m
                  ██████╗███████╗██████╗ ██╗   ██╗██╗██████╗ █████╗ ██████╗    ██╗     ██╗ ██████╗  █████╗ ██████╗  █████╗ 
                 ██╔════╝██╔════╝██╔══██╗██║   ██║██║██╔══██╗██╔══██╗██╔══██╗  ██║     ██║██╔════╝ ██╔══██╗██╔══██╗██╔══██╗
                  ╚█████╗█████╗  ██████╔╝╚██╗ ██╔╝██║██║  ██║██║  ██║██████╔╝  ██║     ██║██║  ██╗ ███████║██║  ██║██║  ██║
                  ╚═══██╗██╔══╝  ██╔══██╗ ╚████╔╝ ██║██║  ██║██║  ██║██╔══██╗  ██║     ██║██║  ╚██╗██╔══██║██║  ██║██║  ██║
                 ██████╔╝███████╗██║  ██║  ╚██╔╝  ██║██████╔╝╚█████╔╝██║  ██║  ███████╗██║╚██████╔╝██║  ██║██████╔╝╚█████╔╝
                 ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝╚═════╝  ╚════╝ ╚═╝  ╚═╝  ╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝  ╚════╝ 
            \u001b[0m`); // Reseta a cor após o banner
    console.log(`                                                           \u001b[36m http://localhost:${expressPort} \u001b[0m`); // Reseta a cor após o link
});
