import React, { Component } from 'react'
import './App.css'

import Numero1 from './components/numero1'
import Numero2 from './components/numero2'
import Maior from './components/Maior'
import Soma from './components/Soma'
import Multi from './components/Multi'

export default class App extends Component{
  render() {
    return(
      <div className='container'>
        <h1>Redux calc</h1>
        <div className='line'>
          <Numero1/>
          <Numero2/>
        </div>
        <div className='line'>
          <Soma/>
          <Multi/>
          <Maior/>
        </div>
      </div>
    )
  }
}
