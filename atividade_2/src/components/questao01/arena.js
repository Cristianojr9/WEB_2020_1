import React from 'react'

import Hero from './hero';
import Enemy from './enemy';

import HeroImg from '../../assets/hero.jpeg';
import EnemyImg from '../../assets/enemy.png';

// questão 02 implementada aqui!!

export default function Arena() {
  return (
    <>
      <Hero name="Flash" img={HeroImg} />
      <Enemy name="Flash reverso" img={EnemyImg} />
    </>
  )
}