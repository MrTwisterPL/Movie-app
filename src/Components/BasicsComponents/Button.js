import React from 'react'
import * as Styles from "./Styles"
const Button = ({text,icon,page}) => {
  return (
    <Styles.Button to={page}>{icon}{text}</Styles.Button>
  )
}

export default Button