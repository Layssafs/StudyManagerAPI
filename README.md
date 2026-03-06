# 📚 StudyManager API

API desenvolvida para gerenciamento de Usuários, Cursos e Matrículas, permitindo cadastro, consulta, atualização e exclusão de registros.
O sistema também permite matricular usuários em cursos e consultar os cursos em que um usuário está matriculado.

# ⚙️ Tecnologias Utilizadas

Node.js

Express.js

Prisma ORM

PostgreSQL

dotenv

# 🏗️ Arquitetura do Projeto

O projeto foi organizado em camadas para separar responsabilidades e facilitar manutenção e escalabilidade.

Routes → definem os endpoints da API

Controllers → recebem as requisições HTTP e retornam respostas

Services → concentram as regras de negócio

Repositories → fazem o acesso ao banco de dados usando Prisma

Config → configuração da conexão com o banco

Essa organização segue princípios de Clean Code e Arquitetura em Camadas, evitando lógica de negócio nos controllers e reduzindo acoplamento entre as partes da aplicação.

# 📂 Estrutura de Pastas

![Arquitetura da API](./docs/preview.png)

# ⚡ Executar rapidamente
git clone <https://github.com/Layssafs/StudyManagerAPI>

cd studyManager

npm install

npx prisma generate

npm run dev

Servidor disponível em:

http://localhost:3000

# ⚙️ Configuração do Banco de Dados

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="postgresql://usuario:senha@localhost:5432/studymanager"

# Exemplo de Resposta da API:
![Exemplo de saída 1](./docs/Captura%20de%20tela%202026-03-06%20001354.png)
![Exemplo de saída 2](./docs/Captura%20de%20tela%202026-03-06%20001436.png)
![Exemplo de saída 3](./docs/Captura%20de%20tela%202026-03-06%20001517.png)

# 📌 Observação

Este projeto foi desenvolvido para fins acadêmicos como parte de um trabalho sobre desenvolvimento de APIs REST utilizando Node.js, Express e Prisma ORM, aplicando princípios de Clean Code e arquitetura em camadas.

# 👩‍💻 Autora </>
Coded by Layssa Fernandes da Silva.
