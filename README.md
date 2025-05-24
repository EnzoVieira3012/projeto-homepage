# Homepage

🏠 **Sobre o Projeto**  
O **Homepage** é uma aplicação de exemplo desenvolvida em React com TypeScript e Chakra UI. O projeto simula uma interface de login com componentes reutilizáveis, validação de campos, feedbacks visuais e design responsivo.

Este projeto foi criado como parte de um desafio educacional da Digital Innovation One (DIO), com o objetivo de consolidar conhecimentos em React, TypeScript e testes automatizados.

---

## 🚀 Funcionalidades

### Interface de Login:
- Formulário com campos de e-mail e senha.
- Validação de campos (e-mail válido e campos obrigatórios).
- Feedback visual com mensagens de erro e sucesso.
- Botão "Entrar" funcional, exibindo uma mensagem de boas-vindas ao usuário.

### Componentes Reutilizáveis:
- **Header**: Exibe o título da aplicação com um design moderno.
- **Botão**: Componente reutilizável para ações de clique.
- **Card**: Contém o formulário de login e organiza os elementos na tela.
- **Footer**: Exibe mensagens de direitos autorais.

### Design Responsivo:
- Layout adaptável para dispositivos móveis, tablets e desktops.

### Testes Automatizados:
- Teste para validar o comportamento do botão "Entrar".
- Teste para verificar se a mensagem de boas-vindas é exibida corretamente.

---

## 🛠️ Tecnologias

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- **React** – Biblioteca para construção de interfaces de usuário.
- **TypeScript** – Superset de JavaScript com suporte a tipagem estática.
- **Chakra UI** – Biblioteca de componentes estilizados e acessíveis para React.
- **Jest** – Biblioteca para testes automatizados.
- **React Testing Library** – Utilizada para testar componentes React.

---

## 🌐 Demonstração do Projeto

[Adicione aqui um link para a demonstração online do projeto, como Vercel ou Netlify.]

---

## 📂 Estrutura do Projeto

```
homepage/
├── public/                         
├── src/                            
│   ├── components/                 
│   │   ├── Header/                 
│   │   │   ├── Header.tsx
│   │   │   ├── Header.css
│   │   ├── Button.tsx              
│   │   ├── Card.tsx                
│   │   ├── Footer.tsx              
│   ├── tests/                      
│   │   ├── App.test.tsx            
│   ├── App.tsx                     
│   ├── index.tsx                   
├── package.json                    
├── tsconfig.json                   
├── .gitignore                      
└── README.md                       
```

---

## 🧪 Testes

Para executar os testes automatizados:

```bash
npm test
```

O Jest irá executar os testes e exibir os resultados no terminal.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (versão LTS recomendada: 16.x ou superior).
- npm ou yarn para gerenciar pacotes.

### Passos

Clone o repositório:

```bash
git clone https://github.com/EnzoVieira3012/homepage.git
cd homepage
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
```

Acesse o projeto no navegador:

[http://localhost:3000](http://localhost:3000)

---

## 🎨 Melhorias Implementadas

- Estilo aprimorado com Chakra UI.
- Validação de formulário com feedback visual.
- Toast messages para erro e sucesso.
- Footer com informações de direitos autorais.
- Layout responsivo para diferentes dispositivos.

---

## 📝 Requisitos Atendidos do Desafio

- Criar componentes para a página inicial:
  - Header com o título da aplicação.
  - Botão com suporte a `onClick`.
  - Card com o formulário de login.
- Criar função de boas-vindas com alerta.
- Criar teste unitário para o comportamento.

---

## 📜 Licença

Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações.

---

## 📬 Contato

Feito com 💜 por **Enzo Vieira**.  
Se tiver dúvidas ou sugestões, entre em contato:

- [LinkedIn](https://www.linkedin.com/in/enzovieiratrabalho/)
- [GitHub](https://github.com/EnzoVieira3012)
