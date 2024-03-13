# Teste Técnico Stefanini

Este projeto foi desenvolvido utilizando o React Native com Expo para o front-end e Spring Boot/PostgreSQL para a API.

## Pré-requisitos

Antes de iniciar o projeto, certifique-se de ter o seguinte software instalado em seu sistema:

- Docker
- Node.js e npm
- Expo CLI

## Inicializando o Projeto

### API

1. Navegue até a pasta `API`:
cd API
2. Entre na pasta `database-docker` e inicie o Docker:
cd database-docker docker compose up -d
3. Volte para a pasta `API`
4. Entre no package tarefa
cd .\src\main\java\api\tarefa\
5. Compile e execute a classe MainApplication
### Expo Web

1. Navegue até a pasta `ReactExpo`:
cd ../ReactExpo
2. Instale as dependências do projeto:
npm install
3. Instale as dependências específicas do Expo:
npx expo install react-native-web react-dom @expo/metro-runtime
4. Inicie o servidor Expo:
npx expo start

Agora você deve ser capaz de acessar a aplicação em seu navegador.

## Endpoints da API

| Método HTTP | Endpoint          | Descrição                                           |
|-------------|-------------------|-----------------------------------------------------|
| POST        | /tarefas          | Cria uma nova tarefa com base nos dados fornecidos |
| GET         | /tarefas          | Retorna todas as tarefas existentes                 |
| GET         | /tarefas/{tarefaId} | Retorna uma tarefa específica com base no ID      |
| PUT         | /tarefas/{tarefaId} | Atualiza os dados de uma tarefa existente com base no ID |
| DELETE      | /tarefas/{tarefaId} | Deleta uma tarefa existente com base no ID           |



