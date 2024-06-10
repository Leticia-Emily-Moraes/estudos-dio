import React from 'react'
import { InputContainer } from './style'

function Input({value, onChange}) {
  return (
    <InputContainer>
        <input value={value} onChange={onChange}/>
    </InputContainer>
  )
}


export default Input
