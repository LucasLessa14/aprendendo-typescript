# TypeScript

O que é TypeScript?
---
TypeScript é um superconjunto de JavaScript desenvolvido pela Microsoft que adiciona tipagem e alguns outros recursos a linguagem. (By Google)

## Inferência de Tipos

No javascript, o tipo da variável se adapta com base no tipo do dado que é atribuído a ela. No entanto, essa característica do JavaScript pode resultar em problemas em ambiente de produção. A tipagem de variáveis vem se mostrando uma boa prática e a proposta do TypeScript é trazer essa tipagem de variáveis para o JavaScript.

## Verificação Estática

Ao atribuir tipos as variáveis, o typescript faz advertências em tempo real. Ele não permite que você atribua um valor com tipo diferente a uma variável.

## Suporte a Classes e Interfaces

Orientação a Objetos é um paradigma da programação que tratar trechos de códigos como objetos do mundo real.

## Herança

Uma classe só pode herdar caracteristicas de 1 unica outra classe. Não é possível 1 classe herdar características de várias classes.

- Classes filhas não podem fazer alterações em atributos privados de classes pais/mães.
- `Protected` permite que classes filhas façam alterações em atributos privados de classes pais/mães.

## Polimorfismo

Permite a sobre escrita de métodos para que as classes filhas tenham liberdade para definir o seu próprio comportamento (conteúdo de seus métodos) com base nos comportamentos de das classes pais. 

## Interfaces

- Interfaces não devem ter lógica, elas devem ter só os requisitos que as classes que a implementarem devem possuir.

## Código

``` javascript
npm install -g typescript

tsc app.ts // Informar a extensão é opcional

tsc -init // Inicia um projeto typescript com tsconfig.json

node ./dist/app.js
```

## Autor
- Lucas Lessa