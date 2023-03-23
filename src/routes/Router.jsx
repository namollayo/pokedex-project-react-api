import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../Components/Header";
import  { ErrorPage }  from "../Pages/ErrorPage"
import { MyPokedexPage } from "../Pages/MyPokedexPage";
import { PokemonDetailPage } from "../Pages/PokemonDetailPage";
import { PokemonsListPage } from "../Pages/PokemonsListPage";


export const Router = () =>{

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<PokemonsListPage/>}/>
                <Route path="/mypokedex/" element={<MyPokedexPage/>}/>
                <Route path="/pokemon/:id" element={<PokemonDetailPage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}