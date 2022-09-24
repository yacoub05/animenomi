import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../../util/fetchFromAPI';
import {AnimeCategories} from '../';
import Genres from '../Genres';

const MovieFeed = () => {

    const [movies, setMovies] = useState([])

    useEffect(()=>{
      const getMovies=()=>{
        fetchMovies().
        then((data)=>setMovies(data));
      }

      getMovies()
  
    },[]);

  return (
    <Stack sx={{
        flexDirection: {
          sx:"column", md:"row"
        }
      }}>
       
        <Box 
          p={2}
          sx={{
            overflowY: 'auto',
            height: {sm:'100vh',md:'100vh',lg:'100vh'},
            flex: 2
          }}
        >
          <Typography 
          variant="h4"
          fontWeight="bold"
          
          mb={3}
          mt={10}
          sx={{
            fontSize:'24px',
            ml:{xs:0, sm:0, md:0},
            mt:{xs:0},
            color:'#fefe'}}
          >
            Movies 
          </Typography>

          <AnimeCategories videos={movies} />
    
        </Box>
  
        <Box  mt={20} p={2} mr={5} style={{ width:'300px'}}>
          <Genres/>
        </Box>
        
        
      </Stack>
  )
}

export default MovieFeed