import React from 'react'

import Hero from '../questao01/hero';
import Enemy from '../questao01/enemy';

export default props => {
  return (
    <>
      <h1>{props.arena}</h1>
      <Hero />
      <Enemy />
    </>
  )
}
