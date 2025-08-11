# Marvel Comics Store Front-End (React)

Este projeto é um front-end para uma loja de quadrinhos da Marvel, desenvolvido como parte de um desafio de engenharia de software, replicando a funcionalidade e estrutura do projeto original `comics-store`.

## Tecnologias Utilizadas:

*   **Framework**: ReactJS
*   **Estilização**: Styled Components
*   **Gerenciamento de Estado**: Redux Toolkit
*   **API**: [Marvel Developer API](https://developer.marvel.com)

## Funcionalidades:

*   Listagem de quadrinhos com paginação.
*   Detalhes de quadrinhos individuais.
*   Funcionalidade de carrinho de compras (adicionar, remover, atualizar quantidade).
*   Sistema de cupons de desconto (comum e raro).
*   Estilização responsiva e animações sutis para melhor UX.

## Como Rodar o Projeto Localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/andreluiz2431/comics-store-react.git
    cd comics-store-react
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Configure as variáveis de ambiente:**

    Crie um arquivo `.env.local` na raiz do projeto com suas chaves da Marvel API:

    ```
    VITE_MARVEL_API_PUBLIC_KEY=SUA_PUBLIC_KEY_AQUI
    VITE_MARVEL_API_PRIVATE_KEY=SUA_PRIVATE_KEY_AQUI
    ```

    Você pode obter suas chaves em [Marvel Developer API](https://developer.marvel.com).

4.  **Inicie o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

    O aplicativo estará disponível em `http://localhost:5173` (ou outra porta disponível).

## Cupons de Teste (para a funcionalidade de cupom):

*   `COMMON10`: Aplica 10% de desconto em itens comuns.
*   `RARE20`: Aplica 20% de desconto em itens raros.
*   `ALL5`: Aplica 5% de desconto em itens comuns.
*   `MARVELOUS`: Aplica 15% de desconto em itens raros.

## Estrutura do Projeto:

```
/src
|-- /components     # Componentes reutilizáveis (ex: Card, Button, Header)
|-- /pages          # Componentes de página (ex: Home, ComicDetails, Cart)
|-- /store          # Configuração e slices do Redux Toolkit
|   |-- /slices     # Slices individuais para cada feature
|-- /services       # Lógica de chamada da API
|-- /styles         # Estilos globais e temas
|-- /hooks          # Hooks customizados
|-- /utils          # Funções utilitárias
```