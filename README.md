# EVALMOVIES 🎥
BackEnd do projeto EvalMovies que tem por objetivo selecionar e avaliar Filmes e demonstrar sua Opinião.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Docker](https://www.docker.com/)
- > Veja o arquivo  [package.json](https://github.com/GuiSandoval/apievalmovies/blob/main/package.json)


## 📌 Requisitos
- NODE instalado na máquina (Tanto para rodar a aplicação quanto para utilizar o NPM)
- Docker (Para Fazer a comunicação com o Banco de dados)
###  Iniciar o Back End (servidor)
```bash
# Clone este repositório
$ git clone <https://github.com/GuiSandoval/apievalmovies>

# Acesse a pasta raiz do projeto no terminal/cmd e instale as dependências
$ npm install
or
$ yarn 

# Execute os container do Docker utilizando o docker-compose 
$ docker-compose up

# Executar as migrations do banco de dados 
$ yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento para roda a aplicação
$ npm run dev
or
$ yarn dev

# O servidor inciará na porta:3333 - acesse <https://localhost:3333/> para executar os comandos

```