import React from 'react'

export default function Hero(props) {
  return (
    <>
      <p>Hero: {props.name}</p>
      <img src={props.img} alt=""/>
    </>
  )
}
