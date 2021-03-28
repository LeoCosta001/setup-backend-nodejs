# Setup Backend com NodeJs

Data de instalação das dependências: 27/03/2021

- ## Descrição deste Setup:

Este setup contém apenas o mínimo de dependências necessárias para iniciar a construção de uma API minimamente organizada.

- ## Pacotes utilizados:

  - TypeScript
  - Babel
  - ESlint

- ## Comandos utilizados para criar o Setup:

```
yarn init -y
yarn add typescript -D
yarn tsc --init
yarn add express
yarn add @types/express -D
yarn add ts-node-dev -D
yarn add tsconfig-paths -D
yarn add eslint -D
yarn eslint --init
yarn add jest -D
yarn add @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver -D
```

> **OBS:** O comando `yarn add ts-node-dev -D` serve para instalar a dependência que permitirá reinicia o servidor automaticamente junto com o build do TypeScript (é algo como Node + Nodemon + TypeScript).

> **OBS:** O comando `yarn add tsconfig-paths -D`  serve para instalar a dependência que fará o parâmetro "path" do arquivo "<u>tsconfig.json</u>" funcione.

> **OBS:** O comando `yarn eslint --init`  iniciará as definições das configurações básicas do ESlint. As opções usadas são as seguintes:
>
>     ```
>     ✔ How would you like to use ESLint? · style
>     ✔ What type of modules does your project use? · esm
>     ✔ Which framework does your project use? · none
>     ✔ Does your project use TypeScript? · Yes
>     ✔ Where does your code run? · node
>     ✔ How would you like to define a style for your project? · guide
>     ✔ Which style guide do you want to follow? · standard
>     ✔ What format do you want your config file to be in? · JSON
>     ✔ Would you like to install them now with npm? · No
>     ```
> **OBS:** Nesta ultima opção eu selecionei "**No**" porque ele iria instalar os pacotes via "NPM" e eu estou usando o "Yarn", então eu usei o comando abaixo para instalar as dependências manualmente... Mas se você estiver usando o "NPC" basta apenas selecionar a opção "**Yes**"
>
> ```
> yarn add -D @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 @typescript-eslint/parser@latest
> ```
>
> **OBS:** Não esqueça de instalar a extensão do ESlint no VSCode.

> **OBS:** O comando `yarn add @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript babel-plugin-module-resolver -D`  serve para instalar as dependências necessárias para que a compilação do TypeScript ocorra corretamente.

- ## Scripts:

  - **yarn start**

    > Inicia o servidor no modo de "produção".
    >
    > OBS: É necessário ter os arquivos compilados do servidor (para isto utilize o comando `yarn build`).

  - **yarn dev**

    > Inicia o servidor no modo de "desenvolvimento" com auto-reload (reinicia o servidor automaticamente ao editar algim arquivo).

  - **yarn build**

    > Realiza a compilação do TypeScript utilizando o Babel para o diretório "<u>./dist</u>".

  - **yarn lint**

    > Inicia a verificação do ESlint.

- ## Observações:

  - **Alterar os "Path Mapping" do TypeScript**

    > Os "Path Mapping" é a configuração do TypeScript em que você define "pontos de partida de rotas de arquivos" para importações, exemplo:
    >
    > - **Sem** "Path Mapping": `import { UserController } from '../../../UserController.ts'`;
    > - **Com** "Path Mapping": `import { UserController } from '@controller/UserController.ts'`;

    Atualmente no projeto tem 4 "Path Mapping" que são: "`@controllers`", "`@models`", "`@views`" e "`@src`"... E para altera-los é necessário editar os arquivos de configurações tanto do TypeScript quanto do Babel (para que o build importe as rotas corretamente):

    - No arquivo "`tsconfig.json`" fazer as alterações em "`compilerOptions.paths`".
    - No arquivo "`babel.config.js`" fazer as alterações em "`plugins.[0][1].alias`".

