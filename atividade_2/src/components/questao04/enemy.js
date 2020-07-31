import React from 'react'

export default function Enemy(props) {
  return (
    <>
      <h1>{props.arena}</h1>
      <p>Enemy: {props.name}</p>
      <img src={props.img} alt=""/>
    </>
  )
}
