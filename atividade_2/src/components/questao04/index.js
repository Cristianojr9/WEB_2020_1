import React from 'react'

import Arena from './arena';
import Hero from './hero';
import Enemy from './enemy';

import HeroImg from '../../assets/hero.jpeg';
import EnemyImg from '../../assets/enemy.png';

export default function Index() {
  return (
    <>
      <Arena arena="Castelao">
        <Hero name="Flash" img={HeroImg} />
        <Enemy name="Flash Reverso" img={EnemyImg} />
      </Arena>
    </>
  )
}