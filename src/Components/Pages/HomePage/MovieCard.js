import React from 'react'
import { Movie } from './styles'
const MovieCard = ({img,title}) => {
  return (
    <Movie>
        <img src={img}/>
        <span>{title}</span>
    </Movie>
  )
}

export default MovieCard