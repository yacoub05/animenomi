import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"

import {fetchPopular} from '../../util/fetchFromAPI'

import AnimeCategories from "../AnimeCategories";
import Genres from "../Genres";

const PopularFeed = () => {

  const [popular, setPopular] = useState([])
  
  useEffect(()=>{
    const getPopular=()=>{
      fetchPopular().then((data)=>setPopular(data))
    }

    getPopular();

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
          Popular <span className='feed-span' style={{ color: 'gold', fontSize:'24px'}}>Series</span>
        </Typography>

        <AnimeCategories videos={popular} />
        
      </Box>

        <Box  mt={20} p={2} mr={5} style={{ width:'300px'}}>
          <Genres/>
        </Box>
      
    </Stack>
    
  )
}

export default PopularFeed