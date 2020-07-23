import React, { Component } from 'react'

// importar e instalar o bootstrap
// cards

export default class Index extends Component {
  render() {
    return (
      <>
        <h1>Questão {this.props.id}</h1>
        <p>Nome: {this.props.name}</p>
        <p>Curso: {this.props.course}</p>
        <p>Cidade origem: {this.props.city}</p>
      </>
    )
  }
}