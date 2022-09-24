import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchSearchTerm } from '../../util/fetchFromAPI'
import AnimeCategories from '../AnimeCategories'
import Genres from '../Genres'

const SearchFeed = () => {
  const [searchedAnime, setSearchedAnime] = useState([])

  const {searchTerm} = useParams()

  
  useEffect(()=>{
    const getSearchTerm=(term)=>{
      fetchSearchTerm(`?keyw=${term}`).
      then((data)=>setSearchedAnime(data));
    }

    getSearchTerm(searchTerm);
  

  },[searchTerm]);

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
          height: '90vh',
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
          Searched for: <span className='feed-span' style={{ color: 'gold', fontSize:'24px'}}>{searchTerm}</span>
        </Typography>

        <AnimeCategories videos={searchedAnime} />

  
        
      </Box>

      <Box  mt={20} p={2} mr={5} style={{ width:'300px'}}>
          <Genres/>
        </Box>
      
    </Stack>
    </>
  )
}

export default SearchFeed