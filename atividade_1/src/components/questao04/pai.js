import React, { Component } from 'react'

import { Card } from 'react-bootstrap' // cards
import { ListGroup } from 'react-bootstrap';

export default class Index extends Component {
  render() {
    return (
      <Card>
        <Card.Header as="h1">Questão {this.props.id}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item as="p">Nome: {this.props.name}</ListGroup.Item>
          <ListGroup.Item as="p">Curso: {this.props.course}</ListGroup.Item>
          <ListGroup.Item as="p">Cidade origem: {this.props.city}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  }
}

/**
 * <h1>Questão {this.props.id}</h1>
  <p>Nome: {this.props.name}</p>
  <p>Curso: {this.props.course}</p>
  <p>Cidade origem: {this.props.city}</p>
 */