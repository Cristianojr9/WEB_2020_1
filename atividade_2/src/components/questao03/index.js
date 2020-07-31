import React from 'react'

import Arena from '../questao01/arena'
import World from './world';

export default function Index() {
  return (
    <World>
      <Arena />
      <Arena />
      <Arena />
    </World>
  );
}
