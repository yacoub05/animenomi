import React, {useState, useEffect} from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoVideoUrl } from '../../util/constants';


import './EpisodeCard.css'
import Pagin from './Pagin';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const EpisodeCard=({animeDetail})=> {


  const [currentPage, setCurrentPage] = useState(1)
  const [episodesPerPage, setEpisodesPerPage] = useState(50)


  

  const sortAnime = animeDetail.episodesList.sort((a, b) => a.episodeNum - b.episodeNum )
  console.log('inside epissoooodee ', sortAnime)


  const indexOfLastEpisode = currentPage * episodesPerPage;
  const indexOfFirstEpisode = indexOfLastEpisode - episodesPerPage;
  const currentEpisodes = sortAnime.slice(indexOfFirstEpisode,indexOfLastEpisode)
  
  

  const paginate =(pageNumber)=>setCurrentPage(pageNumber);
  return (

    <div className='App'>
      <Pagin indexOfLastEpisode ={indexOfLastEpisode} episodesPerPage={episodesPerPage} totalEpisodes={sortAnime.length} paginate={paginate}/>
      <div className='container '>
          {currentEpisodes.map((item)=> (
            <div className='card '>
              
              <Link to={item.episodeId ? `/watch/${item.episodeId}` : demoVideoUrl}>
                <Typography sx={{fontSize:{xs:'12px', sm:'14px', md:'18px'}}}>{item.episodeNum}</Typography>
              </Link>
             
              
            </div>
            
          ))}

        
      </div>
      
    </div>


     
  );
}

export default EpisodeCard