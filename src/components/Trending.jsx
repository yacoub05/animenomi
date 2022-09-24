import { ConstructionOutlined } from '@mui/icons-material'
import axios from 'axios'
import {useState, useEffect} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import ReactPlayer from 'react-player'
import { fetchAnime, fetchEachEpisode, fetchEpisodes, fetchFromAnime } from '../util/fetchFromAnime'
import { fetchAnimeDetails, fetchFromAPI } from '../util/fetchFromAPI'
import AnimeDetail from './AnimeDetail'
import './Trending.scss'



const Trending = ({topAiring}) => {

    const [currentSlide, setCurrentSlide] = useState(0)


    const [animeDetail, setAnimeDetail] = useState([])

    // const details = topAiring.map(async (item)=>{
    //     return await fetchAnimeDetails(item.animeId).then((response)=> response)
        
    // })
   
    let details = topAiring;
    let testing = []

// this is the slide functionality
    const slideLength = 10;
    const autoScroll = true;
    
    let slideInterval;
    let intervalTime = 5000;


    const nextSlide = () =>{
        setCurrentSlide(currentSlide === slideLength -1? 0: currentSlide + 1)
    }

    const prevSlide = () =>{
        setCurrentSlide(currentSlide === 0 ? slideLength-1: currentSlide-1)
    }

    function autoSlide(){
        slideInterval = setInterval(nextSlide, intervalTime)
    }

// End of Slide functionality




    useEffect(() => {
      setCurrentSlide(0)
      //getAnimeDetails()
      
    },[])

    
    useEffect(() => {
        
        
    
        if(topAiring){
        
        for(let i= 0; i< topAiring.length; i++){
            fetchAnimeDetails(topAiring[i]).then(data=>data).then((data)=>{
                testing.push(data)
            })
          
            
        }

        setAnimeDetail(testing)
        } 
        console.log('the details ', animeDetail)
        
      },[topAiring])


    useEffect(() => {
        if(autoScroll){
            autoSlide()
        }
        return () => clearInterval(slideInterval)
        
      },[currentSlide])


  return (
    <div className='slider'>
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide}/>
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide}/>



        {animeDetail.map((slide,index)=>(
            <div className={index===currentSlide ? 
            "slide current": "slide"} key={index}>
                {index===currentSlide && (
                    <>
                        <img src={slide.animeImg} alt="img unavailable"/>
                        <div className='content'>
                            <h4># {index+1} Spotlight</h4>
                            <h2>{slide.animeTitle}</h2>
                            <p>{slide.synopsis}</p>
                            <hr/>
                            <button className='--btn--btn-primary'>Watch Now</button>
                            <button>Detail</button>
                        </div>
                    </>
                    
                )}

            </div>
        ))}
    </div>
  )
}

export default Trending