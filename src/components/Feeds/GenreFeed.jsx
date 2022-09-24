import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchGenre} from '../../util/fetchFromAPI'
import {AnimeCategories , Genres} from '../'


const GenreFeed = () => {
  const [genreData, setGenreData] = useState([])

  const {genre} = useParams()

  
  useEffect(()=>{
    const getGenre=(term)=>{
      fetchGenre(term).
      then((data)=>setGenreData(data));
    }

    getGenre(genre);
  

  },[genreData]);

  return (
    <>
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
          Genre: <span className='feed-span' style={{ color: 'gold', fontSize:'24px'}}>{genre}</span>
        </Typography>
     
        <AnimeCategories videos={genreData} />
        
      </Box>

      <Box  mt={20} p={2} mr={5} style={{ width:'300px'}}>
          <Genres/>
        </Box>
      
    </Stack>
    </>
  )
}

export default GenreFeed