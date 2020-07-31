import React from 'react'

export default function Hero(props) {
  return (
    <>
      <h1>{props.arena}</h1>
      <p>Hero: {props.name}</p>
      <img src={props.img} alt=""/>
    </>
  )
}
