import React from 'react'

const Multiplicacao = (props) => {
  return (
    <div>
    <h3>O resultado de {props.num1} x {props.num2} é: {props.num1 * props.num2}</h3>
    </div>
  )
}

export default Multiplicacao