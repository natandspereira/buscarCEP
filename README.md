# 📍 buscarCEP

**buscarCEP** é uma aplicação web desenvolvida para facilitar a busca de endereços a partir de um **CEP** (Código de Endereçamento Postal) informado. O projeto utiliza tecnologias modernas como **Vite**, **TypeScript**, **JavaScript**, **HTML** e **CSS**, garantindo uma interface rápida, responsiva e fácil de usar.

## 🚀 Funcionalidades

✅ **Consulta de Endereço por CEP** – Informe um CEP válido e obtenha os dados do endereço correspondente.  
✅ **Validação de CEP** – Impede buscas com valores inválidos ou incompletos.  
✅ **Experiência Rápida** – A aplicação é leve e otimizada para carregamento rápido.  
✅ **Interface Simples e Intuitiva** – Layout amigável para fácil navegação.  

## 🛠️ Tecnologias Utilizadas

O projeto é construído com:

- **[Vite](https://vitejs.dev/)** → Ferramenta de build ultrarrápida para desenvolvimento web moderno.
- **[TypeScript](https://www.typescriptlang.org/)** → Superset do JavaScript que adiciona tipagem estática para maior segurança e escalabilidade.
- **JavaScript (ES6+)** → Linguagem principal para manipulação da API e interatividade da aplicação.
- **HTML5 + CSS3** → Estruturação e estilização responsiva da interface do usuário.
- **[API ViaCEP](https://viacep.com.br/)** → Serviço gratuito utilizado para consultar endereços com base no CEP informado.

## 📡 Como Funciona?
1. O usuário insere um CEP no campo de busca.
2. A aplicação valida se o CEP possui 8 dígitos numéricos.
3. Se o CEP for válido, é feita uma requisição à API ViaCEP.
4. A API retorna os dados do endereço correspondente (rua, bairro, cidade, estado).
5. Os dados são exibidos na tela de forma organizada e clara.

## 🎨 Interface da Aplicação
A interface do buscarCEP segue um design minimalista e responsivo, garantindo boa experiência tanto em dispositivos móveis quanto em computadores.

## ▶️ Como Executar o Projeto

### 📌 Pré-requisitos:
- **[Node.js](https://nodejs.org/)** instalado na máquina (versão recomendada: 16+)
- **[npm](https://www.npmjs.com/)** ou **[yarn](https://yarnpkg.com/)** instalado para gerenciar dependências

### 📥 Passo a passo para rodar localmente:

1. **Clone este repositório**:
git clone https://github.com/natandspereira/buscarCEP.git

2. **Acesse o diretório do projeto**:
cd buscarCEP/searchAddress/vite-project

3. **Instale as dependências**:
npm install ou yarn install

4. **Inicie o servidor de desenvolvimento**:
npm run dev ou yarn dev

5. **Abra o navegador e acesse**:
http://localhost:5173/







