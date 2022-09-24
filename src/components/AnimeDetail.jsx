import { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { fetchAnimeDetails, fetchFromAPI } from '../util/fetchFromAPI'
import EpisodeCard from './Episodes/EpisodeCard'


const AnimeDetail = () => {
  const {id} = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [animeDetail, setAnimeDetail] = useState(null)

  const animeTitle = id.replace(id.substring(id.indexOf('-episode') + 1),"").slice(0, -1)
  const episode = id.substring(id.indexOf('-episode') + 1)

  
  useEffect(() => {
    fetchFromAPI(`vidcdn/watch/${id}`)
    .then((data)=>setVideoDetail(data.sources));

    fetchAnimeDetails(animeTitle).then(data=>data).then((data)=>{
      setAnimeDetail(data)
  })
  
  }, [id,animeTitle])
  

  if(!videoDetail) return <Box minHeight='90vh'><Typography color="gold" variant="h4" fontWeight="bold" p={2} mt={5} >Loading...</Typography></Box>

  return (

   <Box sx={{overflow:'hidden', height:{md:'100vh'}, maxHeight:{xs:"92vh", sm:'95vh', md:'95vh', lg:'95vh'}}}   >
      <Stack marginTop='10px' position='sticky' display='flex' sx={{flexDirection:{xs:'column',sm:'column',md:'row'}}}  >
        <Box sx={{width:{xs:'100%', sm:'100%', md:'50%'}, marginTop:{xs:0,sm:'10px',md:0} }} display='flex' position='sticky'  alignItems='space-evenly' flex={1}    direction={{ xs: 'column', sm: 'row' }}>
          
            

                    <Box sx={{display:'flex', flexDirection:'column', ml:{xs:'15px',sm:'20px',md:'30px'}, width:'100%', position:'sticky', mt:{xs:'10px', sm:'20px',md:'40px'}}}>
                    <ReactPlayer url={videoDetail?.[0]?.file}
                    className="react-player"  alt='Video Not Available' controls />
                    
                    <Typography sx={{ fontSize:{xs:'14px', sm:'18px', md:'19px',lg:'20px'}}} color="gold" variant="h5" fontWeight="bold" p={2}>
                      {animeDetail.animeTitle} <span className='animeDetail-span' >{episode.replace("-"," ")} </span>
                    </Typography>
                   
                    </Box>
        </Box>

        <Box sx={{ width:{xs:'100%',sm:'100%',md:'50%', lg:'50%'}, height:{xs:'100%', sm:'100%', md:'100%'}, mt:{xs:0}}}>
        <EpisodeCard animeDetail = {animeDetail}/>
        </Box>
       
      </Stack>
      
   </Box>
  )
}

export default AnimeDetail