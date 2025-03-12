import React from 'react'

const Subtracao = (props) => {
  return (
    <div>
        <h3>O resultado de {props.num1} - {props.num2} é: {props.num1 - props.num2}</h3>
    </div>
  )
}

export default Subtracao