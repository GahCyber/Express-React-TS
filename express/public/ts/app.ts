import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
const app = express();
const expressPort = 5000;

// Middleware
app.use(cors());
app.use(express.json())


// Rota POST para receber dados
const dadosRecebidos:{ nome: string, email: string }[] = []

// Rota POST para receber dados
app.post("/dados", (req: Request, res: Response) => {
    const { nome, email } = req.body;
    if (nome && email) {
        dadosRecebidos.push({ nome, email });  // Armazenando os dados
        res.status(200).json({ mensagem: "Dados recebidos!" });
    } else {
        res.status(400).json({ erro: "Dados inválidos!" });
    }
});

// Rota GET para visualizar os dados
app.get('/dados', (req: Request, res: Response) => {
    res.json(dadosRecebidos); // Retornando os dados recebidos
});
app.use(express.static(path.join(__dirname, "../")))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../index.html"))
});


const Submit = (event: SubmitEvent) => {
    event.preventDefault(); // Impede o envio do formulário padrão

    const emailElement = document.getElementById("email") as HTMLInputElement | null;
    const nomeElement = document.getElementById("nome") as HTMLInputElement | null;
    const submitElement = document.getElementById("submit") as HTMLInputElement | null;

    if (submitElement) {
      if (emailElement && nomeElement) {
        const email = emailElement.value;
        const nome = nomeElement.value;

        if (email && nome) {
            console.log(`Nome: ${nome}, Email: ${email}`);
        } else {
          alert("Por favor, preencha todos os campos.");
        }
      } else {
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

