# Node.js: Formação DIO

Exercícios e projetos em **Node.js** feitos na formação de Node.js da [DIO](https://www.dio.me/).

## Projetos

| Projeto | O que é |
|---|---|
| [Simulador de Corridas do Mario Kart](./projeto%201%20-%20Simulador%20de%20Corridas%20do%20Mario%20Kart) | Simulação de corrida entre personagens no terminal, com atributos e sorteio de dados a cada rodada |
| [Carrinho de Compras da Shopee](./projeto-2-Carrinho-de-Compras-da-Shopee-com-Node) | Carrinho que armazena itens e calcula subtotais e total automaticamente |
| [Gerador de QR Code](./projeto-3-qr-code) | CLI interativa que gera QR Codes no terminal (`prompt`, `qrcode-terminal`, `chalk`) |

## Exercícios

| Pasta | Assunto |
|---|---|
| `01-helloworld` | Primeiro script em Node |
| `02-meu-primeiro-projeto` | Estrutura básica de projeto com `package.json` |
| `04-commonjs-modules` | Módulos CommonJS (`require` / `module.exports`) |
| `05-esm-modules` | ES Modules (`import` / `export`) |
| `07-npm-package-basic` | Instalação e uso de pacotes do npm |
| `08-npm-script` | Scripts no `package.json` |
| `09-npm-enviroment` | Variáveis de ambiente por ambiente (`.env.development`, `.env.prod`) |

## Como executar

```bash
# Gerador de QR Code
cd projeto-3-qr-code
npm install
npm start

# Demais projetos e exercícios
cd <pasta>
npm install
node src/index.js
```
