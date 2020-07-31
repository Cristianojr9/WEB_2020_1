import React from 'react'

export default props => <> {
    React.Children.map(
      props.children,
      (personagem) => {
        return React.cloneElement(personagem, {arena:props.arena})
      }
    )
  }
</>