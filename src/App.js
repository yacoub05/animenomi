import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Box } from "@mui/material"

import { AnimeDetail } from "./components"
import {Navbar} from './components/Navigation'

import {Feed, SearchFeed, PopularFeed, MovieFeed,GenreFeed} from './components/Feeds'




const App = () =>( 

    <BrowserRouter>
        <Box sx={{backgroundColor: '#002244', width:'100%',height:'100%' }}>
            <Navbar/>
            <Routes>
                <Route path="/" exact element={<Feed />}/>
                <Route path="/popular" exact element={<PopularFeed />}/>
                <Route path="/watch/:id" element={<AnimeDetail />}/>
            
                <Route path="/search/:searchTerm" element={<SearchFeed />}/>
                <Route path="/watch/anime-movies" element={<MovieFeed />}/>
                <Route path="/genre/:genre" element={<GenreFeed />}/>
            </Routes>
            
        </Box>

    </BrowserRouter>

)

export default App
