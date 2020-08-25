import React from 'react'

export default function Pai(props){
  return (
    <>
      <h1>Questão {props.id}</h1>
      <p>Nome: {props.name}</p>
      <p>Curso: {props.course}</p>
      <p>Cidade origem: {props.city}</p>
    </>
  )
}