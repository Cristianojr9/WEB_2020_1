import React from 'react'

export default function Enemy(props) {
  return (
    <>
      <p>Enemy: {props.name}</p>
      <img src={props.img} alt=""/>
    </>
  )
}
