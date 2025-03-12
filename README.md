# Exercicíos da aula 01

### Este repositório contém os dois exercícios da primeira aula de React:

- A) Crie 4 componentes no seu projeto: Adicao, Subtracao, Multiplicacao e Divisao. Esses componentes devem renderizar a seguinte frase dentro de uma tag 'h1': “O resultado de num1 + num2 é igual a resultado”. Use:
  (-) para subtração
  (*) para multiplicação
  (/) para divisão
  As variáveis 'num1' e 'num2' são atributos do seu componente. Importe esses componentes criados para o App.js e passe os valores de num1 e num2 como propriedade com o objetivo de exibir a frase inteira na tela.

- B) Crie um componente chamado “PrecisoEstudar.jsx”. Esse componente deve renderizar a seguinte frase dentro de uma tag 'h1': “Preciso estudar NOME-DE-ALGUMA-TECNOLOGIA”. O componente deve ter uma propriedade chamada “nomeDaTecnologia” que irá exibir o nome da tecnologia na frase. Importe esse componente criado para o App.jsx e passe o nome da tecnologia como propriedade com o
objetivo de exibir a frase inteira na tela.

### Soluções:

- A) Criei os quatro componentes na pasta 'components', salvando-os com a extensão .jsx. Cada componente consiste em uma função, que recebe como argumento o objeto 'props', que por sua vez recebe seu valor quando o componente é utilizado dentro da aplicação (App.jsx) e retorna o resultado da operação solicitada, dentro de uma tag 'h1'. O elemento é renderizado e em seguida compilado em javascript.
Por exemplo, o componente "Adicao.jsx" tem o seguinte código (as demais operações seguem o mesmo padrão):

  ```
  import React from 'react'

  const Adicao = (props) => {
    return (
      <div>
        <h3>O resultado de {props.num1} + {props.num2} é: {props.num1 + props.num2}</h3>
      </div>
      )
  }
    
  export default Adicao
  ```

Após a criação dos componentes, fiz a importação de todos dentro do 'App.jsx', e atribuí os valores das variáveis 'num1' e 'num2':

```
import React from 'react'
import Adicao from './components/adicao'
import Subtracao from './components/subtracao'
import Multiplicacao from './components/multiplicacao'
import Divisao from './components/Divisao'

const App = () => {
  return (
    <div>
      <Adicao num1={9} num2={3} />
      <Subtracao num1={9} num2={3} />
      <Multiplicacao num1={9} num2={3} />
      <Divisao num1={9} num2={3} />
    </div>
  )
}

export default App
``` 
O resultado na tela do navegador é:

![image](https://github.com/user-attachments/assets/4bf9d3bd-46c9-4758-af38-6d1ddc70cef2)

- B) Criei o  componente “PrecisoEstudar.jsx” na pasta 'components'. De forma semelhante ao exercício anterior, este componente contém uma função que recebe o objeto 'props' como argumento, contendo a propriedade 'nomeDaTecnologia', que é atribuída ao utiliza-lo dentro da aplicação 'App.jsx':

```
import React from 'react'

const PrecisoEstudar = (props) => {

  return (
    <div>
         <h1>Preciso estudar {props.nomeDaTecnologia}!!! </h1>
    </div>
  )

}

export default PrecisoEstudar
  
```

Agora, o 'App.jsx' ficou assim, com o acréscimo do componente PrecisEstudar:

```
import React from 'react'
import Adicao from './components/adicao'
import Subtracao from './components/subtracao'
import Multiplicacao from './components/multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'



const App = () => {
  return (
    <div>
      <Adicao num1={9} num2={3} />
      <Subtracao num1={9} num2={3} />
      <Multiplicacao num1={9} num2={3} />
      <Divisao num1={9} num2={3} />
      <div>
        <hr></hr>
        <PrecisoEstudar nomeDaTecnologia={'Apache Spark'}/>
      </div>
    </div>
   
  )
}

export default App
```

E o resultado na tela do navegador:

![image](https://github.com/user-attachments/assets/a263078c-5552-423f-b511-db09ac8cea42)


