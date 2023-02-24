import React from 'react'
import { useMoviesData } from '../../../hooks/useMoviesData'

const HomePage = () => {
    const {movies,loading,error} = useMoviesData("/popular");
    return (
        <div>

        {movies.map((movie)=> <p key={movie.id}>{movie.original_title}</p>)}

        </div>
    )
}

export default HomePage