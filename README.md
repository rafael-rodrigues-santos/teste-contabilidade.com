# Teste Front-end React - Contabilidade

Teste técnico para vaga de Front-end com React, desenvolvido com Vite, TypeScript e SASS.

## Tecnologias Utilizadas

*   **React** (Hooks + Componentes Funcionais)
*   **TypeScript**
*   **Vite** 
*   **SASS/SCSS Modules** (Estilização escopada e modular)
*   **ESLint** (Linting e padronização de código)

## Pré-requisitos

*   Node.js (versão 18 ou superior recomendada)
*   npm

## Como Instalar e Inicializar

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local:

1.  **Clone o repositório** (caso ainda não tenha feito) e entre na pasta do projeto:
    ```bash
    cd teste-contabilidade.com
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

4.  Acesse a aplicação no navegador através do link exibido no terminal (geralmente `http://localhost:5173`).

## Scripts Disponíveis

*   `npm run dev`: Inicia o servidor de desenvolvimento.
*   `npm run build`: Compila o projeto para produção na pasta `dist`.
*   `npm run preview`: Visualiza a versão de produção localmente após o build.
*   `npm run lint`: Executa o ESLint para verificar a qualidade do código.

## Decisões Técnicas

### Estilização: SCSS Modules
Optei por utilizar **SCSS Modules** para unir o poder dos pré-processadores à segurança do escopo local. Diferente de soluções CSS-in-JS, o SCSS Modules tem zero runtime overhead, resultando em uma melhor performance de renderização (apesar de se tratar de um projeto de teste técnico), já que os estilos são extraídos para arquivos CSS estáticos durante o build. Além disso, a ferramenta permite uma organização robusta através de variáveis (tokens de design) e aninhamento, mantendo uma clara separação de responsabilidades e facilitando a manutenção a longo prazo.

### Estrutura de Pastas e Componentes
*   **Atomic Design (Adaptado):** Componentes menores como `Button`, `Heading` e `Paragraph` são reutilizados em componentes maiores.
*   **Barrel Pattern:** Utilização de arquivos `index.ts` para centralizar exportações, permitindo imports mais limpos (ex: `import { Button } from '../../components'`).
*   **Página Orquestradora:** A página `Home` atua apenas como um orquestrador, importando e organizando seções independentes (`HeroSection`, `PlansSection`), o que facilita a manutenção e testabilidade.

## Decisões de Implementação (Pontos além do Figma)

Alguns pontos foram decididos durante a implementação para garantir uma melhor experiência de usuário e viabilidade técnica, complementando o design original:

1.  **Sobreposição de Cards (Desktop vs Mobile):**
    *   Implementado utilizando `margin-bottom` negativo e controle preciso de `z-index`.
    *   No mobile, a ordem de empilhamento e os espaçamentos foram ajustados para garantir legibilidade e toque fácil.

2.  **Responsividade:**
    *   Ajustes específicos de tamanho de fonte e alinhamento foram feitos para telas menores (ex: títulos reduzidos para `1.5rem` em mobile) para evitar quebras de layout indesejadas.
    *   O layout dos cards muda de horizontal (implícito no design desktop) para vertical empilhado em mobile.

3.  **Interatividade:**
    *   **Modal de Vídeo:** Adicionei um modal funcional para o vídeo na Hero Section, permitindo que o usuário assista ao conteúdo sem sair da página.
    *   **Botões:** Adicionei estados de `hover` e `focus` para melhor feedback visual e acessibilidade.

4.  **Acessibilidade:**
    *   Uso de tags semânticas (`section`, `header`, `article`).
    *   Adição de `aria-labels` em elementos interativos que não possuem texto visível (como o botão de fechar modal).

5.  **Conteúdo Dinâmico e Real:**
    *   **Ano Atual:** No título "Quanto custa a contabilidade online em [Ano]?", implementei o ano como uma variável dinâmica (`new Date().getFullYear()`). Notei que no site atual da empresa o ano ainda consta como anterior, e essa abordagem evita a necessidade de manutenção manual para atualizações anuais.
    *   **Vídeo do Modal:** Tomei a liberdade de utilizar no modal o mesmo vídeo institucional que está presente no site oficial da empresa, tornando a experiência do teste mais fiel e completa.
