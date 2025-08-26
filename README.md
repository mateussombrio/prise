# 📌 PRISE Fórum

O **PRISE Fórum** é uma plataforma online de discussão inspirada no Reddit, voltada para criação, compartilhamento e debate de conteúdos em comunidades temáticas. O objetivo é promover uma comunidade engajada e organizada, oferecendo ferramentas de interação, moderação e personalização para os usuários.  

---

## 👥 Equipe  
- **Alan Nascimento** – Developer Front-End  
- **Mateus Sombrio** – Developer Back-End  
- **Bruno Felipe** – Designer UX/UI  

---

## 🎯 Objetivo  
Permitir que os usuários criem e participem de discussões por meio de posts (texto, imagem, vídeo) e comentários dentro de grupos temáticos, com funcionalidades de engajamento como **upvotes**, **compartilhamento** e **moderação de conteúdo**.  

---

## ⚙️ Funcionalidades  

### 🔐 Autenticação e Perfis  
- Cadastro de usuário com **nick único, email único, senha, idade, nome completo e tópicos de interesse**.  
- Login com **nick e senha**.  
- Acesso a conteúdo público sem login.  

### 📝 Conteúdo e Interação  
- Criação de posts com **texto, imagem e vídeo**.  
- Comentários em posts (texto, imagem e vídeo).  
- Sistema de **upvotes** em posts e comentários.  
- Compartilhamento de posts em outras plataformas.  
- Sistema de denúncias com ações de moderação:  
  - Timeout temporário de usuário.  
  - Exclusão de post/comentário.  
  - Exclusão de conta.  

### 📚 Organização e Navegação  
- Grupos de temas (tópicos) com descrição de até **500 caracteres**.  
- **Barra de busca** para encontrar posts, tópicos e grupos.  
- **Hover card** em grupos exibindo descrição e número de membros.  

---

## 🛠️ Requisitos Não-Funcionais  

- **Usabilidade**:  
  - Tema claro/escuro.  
  - Tradução de conteúdo via IA.  

- **Performance**:  
  - Carregamento rápido mesmo com grande volume de posts.  
  - Busca retornando resultados em **menos de 2s**.  

- **Segurança**:  
  - Criptografia de senhas.  
  - Proteção contra SQL Injection e XSS.  

- **Escalabilidade**:  
  - Arquitetura preparada para alto volume de usuários e conteúdo.  

- **Confiabilidade**:  
  - Alta disponibilidade e uptime.  

---

## 🚀 Futuras Funcionalidades (Escopo Opcional)  
- Algoritmo de sugestão de grupos com base nos interesses do usuário.  
- Seção **"Em Alta"** com os posts mais populares.  
- **Gamificação**:  
  - Pets virtuais que evoluem com a interação.  
  - Recompensas por tempo de atividade.  
  - Pensamentos/citações diárias.  
- Chat privado entre usuários.  

---

## 🖥️ Tecnologias (sugestão inicial)  
- **Frontend**: React / Next.js  
- **Backend**: Node.js / Express  
- **Banco de Dados**: PostgreSQL ou MongoDB  
- **Autenticação**: JWT  
- **Estilização**: TailwindCSS / Styled Components  

---

## 📌 Como Contribuir  
1. Faça um fork do repositório.  
2. Crie uma branch com sua feature:  
   ```bash
   git checkout -b minha-feature
   ```
3. Faça commit das alterações:  
   ```bash
   git commit -m "Adiciona minha feature"
   ```
4. Envie para a branch:  
   ```bash
   git push origin minha-feature
   ```
5. Abra um Pull Request.  

---

## 📄 Licença  
Este projeto está sob a licença **MIT** – veja o arquivo [LICENSE](LICENSE) para mais detalhes.  
