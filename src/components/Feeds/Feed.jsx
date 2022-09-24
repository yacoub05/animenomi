import { useState, useEffect } from "react"
import { Box, Stack, Typography } from "@mui/material"
import {fetchPopular,fetchRecentRelease,fetchTopAiring} from '../../util/fetchFromAPI'

import {AnimeCategories, Genres} from "../";


const Feed = () => {

  const [recentRelease, setRecentRelease] = useState([])
  const [popular, setPopular] = useState([])
  const [topAiring, setTopAiring] = useState([])

  useEffect(()=>{
    const getRecentRelease=()=>{
      fetchRecentRelease().
      then((data)=>setRecentRelease(data));
    }
  
    const getPopular=()=>{
      fetchPopular().then((data)=>setPopular(data))
    }
  
    const getTopAiring=()=>{
      fetchTopAiring().then((data)=>setTopAiring(data))
    }

    getRecentRelease();
    getPopular();
    getTopAiring();


  },[]);

  let animeId = topAiring.map(item=>item.animeId)

  return (


    <Stack sx={{
      display: "flex",
      justifyContent: "center", 
      alignContent: "center", 
      padding: { xs: "40px 4px 4px 4px", sm:"30px 2px 2px 2px", md: "20px 0 0 0" } ,
      flexDirection: {
        sx:"column", md:"row"
      }
    }}>
     
      <Box 
        
        sx={{
          p:{xs:0, sm:1, md:2},
          ml:{xs:2, sm:4, md:0},
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
          color:'#fefe'
        }}
        >
          Recent <span className='feed-span' style={{ color: 'gold', fontSize:'24px'}}>Releases</span>
        </Typography>
    
        <AnimeCategories videos={recentRelease} />

        <Typography 
        variant="h4"
        fontWeight="bold"
      
        mb={3}
        mt={10}
        sx={{
          ml:{xs:0, sm:0, md:0},
          fontSize:'24px',
          color:'#fefe'
        }}
        >
          Popular <span className='feed-span' style={{ color: 'gold', fontSize:'24px'}}>Series</span>
        </Typography>
    
        <AnimeCategories videos={popular} />
        
      </Box>

        <Box  mt={{xs:5,md:20}} p={2} mr={5} style={{ width:'300px'}}>
          <Genres/>
        </Box>
      
    </Stack>
    
  )
}

export default Feed