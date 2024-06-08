# Estaciona Fácil

Sistema de aluguel de carros desenvolvido com Angular no frontend e NestJS no backend.

## Visão Geral

Estaciona Fácil é um sistema de gerenciamento de aluguel de carros. Ele permite listar carros disponíveis, cadastrar novos carros e registrar aluguéis.

## Tecnologias Utilizadas

- **Frontend**: Angular
- **Backend**: NestJS
- **Banco de Dados**: SQLite

## Estrutura do Projeto

- `frontend/` - Aplicação Angular
- `backend/` - Aplicação NestJS

## Pré-requisitos

- Node.js (versão 14 ou superior)
- Angular CLI
- NestJS CLI
- SQLite

## Instalação

### Backend (NestJS)

1. Navegue até o diretório do backend:

    ```sh
    cd backend
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

4. Execute as migrações do banco de dados (se houver):

    ```sh
    npx prisma db push && npx prisma generate
    ```

5. Inicie o servidor:

    ```sh
    npm run start:dev
    ```

### Frontend (Angular)

1. Navegue até o diretório do frontend:

    ```sh
    cd frontend
    ```

2. Instale as dependências:

    ```sh
    npm install
    ```

3. Configure a URL da API no arquivo `src/environments/environment.ts`:

    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'http://localhost:3000/api'
    };
    ```

4. Inicie o servidor de desenvolvimento:

    ```sh
    ng serve
    ```

5. Abra o navegador e acesse `http://localhost:4200`.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
