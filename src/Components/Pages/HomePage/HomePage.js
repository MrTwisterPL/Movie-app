import React from 'react'
import { useMoviesData } from '../../../hooks/useMoviesData'
import MainTemplate from '../../templates/MainTemplate';
import MovieCard from './MovieCard';
import * as Styled from "./styles"
const HomePage = () => {
    const {movies,loading,error} = useMoviesData("/popular");
    console.log(movies)
    return (
        <div>

        <MainTemplate>
            <Styled.HomePage>

                <Styled.Title>
                <h2>Popular</h2>
                <input type="text" placeholder='Search film'/>
                </Styled.Title>
                <hr/>
                <Styled.Films>
                   {movies.map(movie => <MovieCard title={movie.title} img={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}/> )}
                </Styled.Films>



            </Styled.HomePage>
        </MainTemplate>
        

        </div>
    )
}

export default HomePage