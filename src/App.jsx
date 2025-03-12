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