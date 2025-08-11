# Plano de Desenvolvimento - comics-store-react

## Etapa 0: Configuração
- [x] Configurar ambiente inicial (Git, steps.md, GEMINI.md)

## Etapa 1: Base do Projeto
- [x] Inicializar projeto React com Vite e instalar dependências (`styled-components`, `react-router-dom`, `@reduxjs/toolkit`, `react-redux`, `axios`)
- [x] Criar a estrutura de pastas padrão (`src/components`, `src/pages`, `src/store`, `src/services`, `src/styles`, `src/hooks`)
- [x] Configurar estilos globais com `styled-components` (`GlobalStyles.js`)

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
