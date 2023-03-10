import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage/HomePage";
import LatestPage from "./Components/Pages/Latest/LatestPage";
import MoviePage from "./Components/Pages/MoviesPage/MoviePage";


function App() {


  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/latest" element={<LatestPage/>}/>
      <Route path="/movie/:id" element={<MoviePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
