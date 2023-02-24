import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage/HomePage";
import MoviePage from "./Components/Pages/MoviesPage/MoviePage";
import { useMoviesData } from "./hooks/useMoviesData";

function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/movie/:id" element={<MoviePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
