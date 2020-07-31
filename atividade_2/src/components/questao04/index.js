import React from 'react'

import Hero from './hero';
import Enemy from './enemy';

import HeroImg from '../../assets/hero.jpeg';
import EnemyImg from '../../assets/enemy.png';

import Arena from './index';

export default function Index() {
  return (
    <>
      <Arena arena="Castelão">
        <Hero name="Flash" img={HeroImg} />
        <Enemy name="Flash reverso" img={EnemyImg} />
      </Arena>
    </>
  )
}