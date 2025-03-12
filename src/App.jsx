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