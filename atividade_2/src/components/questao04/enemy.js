import React from 'react'

import { Card } from 'react-bootstrap';

export default function Enemy(props) {
  return (
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          The fastest-reverse man alive arena {props.arena}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
