# GEMINI.md - Plano de Desenvolvimento do Projeto "comics-store-react"

## Persona e Objetivo Principal

Você é um desenvolvedor front-end experiente. Sua missão é construir o projeto **"comics-store-react"**. O resultado final deve ser uma réplica funcional e estrutural do projeto que se encontra na pasta `comics-store`.

Você seguirá um processo rigoroso de desenvolvimento, documentando cada passo e versionando seu código de forma contínua no repositório Git.

**Repositório do Projeto:**
`https://github.com/andreluiz2431/comics-store-react.git`

**Regra Fundamental:** Antes de executar qualquer ação, você **SEMPRE** lerá o conteúdo completo deste arquivo, `GEMINI.md`, e do arquivo `steps.md` para entender qual é a próxima tarefa pendente. **Regra**: No .gitignore conter o ".env", "marvel-comics-store", "comics-store" e "GEMINI.md".

---

## O Processo (Seu Loop de Trabalho)

Seu fluxo de trabalho para cada tarefa será o seguinte:

1.  **LER:** Analise os arquivos `GEMINI.md` e `steps.md`.
2.  **IDENTIFICAR:** Encontre a primeira tarefa não marcada (`- [ ]`) no arquivo `steps.md`.
3.  **EXECUTAR:** Realize a tarefa de codificação ou configuração descrita. Você deve replicar a funcionalidade e estrutura correspondente do projeto `comics-store`.
4.  **REGISTRAR (COMMIT):** Adicione os arquivos ao Git (`git add .`) e faça um commit com uma mensagem clara e padronizada (ex: `feat: cria o componente Header`, `chore: instala dependências`).
5.  **ENVIAR (PUSH):** Envie suas alterações para o repositório remoto (`git push origin main`).
6.  **ATUALIZAR:** Edite o arquivo `steps.md`, marcando a tarefa que você acabou de concluir como feita (`- [x]`).
7.  **REPETIR:** Inicie o ciclo novamente para a próxima tarefa.

---

## Milestone 0: Configuração do Ambiente

**Sua primeira tarefa é preparar todo o ambiente de desenvolvimento.**

Execute os seguintes comandos em ordem:

1.  Crie o diretório do projeto e entre nele: `mkdir comics-store-react && cd comics-store-react`
2.  Inicialize o repositório Git: `git init`
3.  Crie o arquivo `steps.md` com todo o plano de desenvolvimento abaixo. Este será seu guia:

    ```bash
    cat << 'EOF' > steps.md
    # Plano de Desenvolvimento - comics-store-react

    ## Etapa 0: Configuração
    - [ ] Configurar ambiente inicial (Git, steps.md, GEMINI.md)

    ## Etapa 1: Base do Projeto
    - [ ] Inicializar projeto React com Vite e instalar dependências (`styled-components`, `react-router-dom`, `@reduxjs/toolkit`, `react-redux`, `axios`)
    - [ ] Criar a estrutura de pastas padrão (`src/components`, `src/pages`, `src/store`, `src/services`, `src/styles`, `src/hooks`)
    - [ ] Configurar estilos globais com `styled-components` (`GlobalStyles.js`)

    ## Etapa 2: API e Gerenciamento de Estado
    - [ ] Criar o serviço da API da Marvel em `src/services/marvelApi.js`
    - [ ] Configurar a store do Redux Toolkit em `src/store/store.js`
    - [ ] Criar o `comicsSlice` para gerenciar a busca e estado dos quadrinhos
    - [ ] Criar o `cartSlice` para gerenciar o estado do carrinho

    ## Etapa 3: Componentes Principais
    - [ ] Criar o componente `Header.jsx`
    - [ ] Criar o componente `ComicCard.jsx`
    - [ ] Criar o componente `Spinner.jsx` para feedback de carregamento
    - [ ] Criar componentes de UI genéricos (ex: `Button.jsx`)

    ## Etapa 4: Páginas e Roteamento
    - [ ] Configurar o roteamento principal no `App.jsx` com `react-router-dom`
    - [ ] Criar a página `ComicsListPage.jsx` para exibir a lista de quadrinhos
    - [ ] Criar a página `ComicDetailPage.jsx` para detalhes de um quadrinho
    - [ ] Criar a página `CartPage.jsx` para exibir o carrinho de compras

    ## Etapa 5: Lógica e Integração
    - [ ] Implementar a lógica de busca e paginação na `ComicsListPage.jsx`
    - [ ] Implementar a lógica de busca de detalhes na `ComicDetailPage.jsx`
    - [ ] Implementar a funcionalidade de adicionar/remover/atualizar itens no carrinho
    - [ ] Implementar a funcionalidade de cupom de desconto no carrinho

    ## Etapa 6: Finalização e Estilização
    - [ ] Aplicar estilização fina e responsividade a todos os componentes e páginas
    - [ ] Adicionar animações e transições sutis para melhorar a UX
    - [ ] Criar o arquivo `README.md` final com a descrição do projeto e instruções

    ## Etapa 7: Conclusão
    - [ ] Realizar um commit final com a mensagem "build: finaliza desenvolvimento do projeto comics-store-react"
    EOF
    ```

4.  Adicione este mesmo conteúdo que você está lendo em um arquivo chamado `GEMINI.md`.
5.  Adicione o repositório remoto (substitua a URL): `git remote add origin https://github.com/andreluiz2431/comics-store-react.git`
6.  Faça seu primeiro commit: `git add . && git commit -m "chore: inicializa ambiente do projeto com arquivos de planejamento"`
7.  Envie para o repositório: `git push -u origin main`
8.  Atualize o `steps.md` marcando a primeira tarefa como concluída.

Agora, continue seguindo o processo para a próxima tarefa em `steps.md`.

---
## Próximas Tarefas

Lembre-se do seu loop de trabalho. Leia os arquivos, identifique a próxima tarefa no `steps.md` (que será "Inicializar projeto React...") e execute-a, replicando o que existe no projeto `comics-store`. Continue até que todas as tarefas estejam marcadas como concluídas.
