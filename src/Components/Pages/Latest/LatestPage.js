import React from 'react'
import MainTemplate from '../../templates/MainTemplate'
import MovieCard from '../HomePage/MovieCard';
import { useMoviesData } from '../../../hooks/useMoviesData'
import * as Styled from "./styles"
const LatestPage = () => {
    const {movies,loading,error} = useMoviesData("/top_rated");
    console.log(movies)
    console.log(error)
    return (
        <MainTemplate>
            <Styled.HomePage>

                <Styled.Title>
                    <h2>Latest</h2>
                    <input type="text" placeholder='Search film' />
                </Styled.Title>
                <hr />
                <Styled.Films>
                    {movies?.map(movie => <MovieCard key={movie.id} title={movie.title} img={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} />)}
                </Styled.Films>



            </Styled.HomePage>
        </MainTemplate>
    )
}

export default LatestPage