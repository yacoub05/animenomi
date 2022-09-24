import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { demoVideoUrl, demoVideoTitle} from "../util/constants"

const AnimeCard = ({video}) => {
  let animeTitle = video?.animeId
  return (
    <Card 
    sx={{ 
        width:{ xs:'100px', sm:'110px', md:'110px'},
        height:{xs:'170px', sm:'180px', md:'180px'},
        boxShadow:'none', borderRadius:'0'
        }}>
        <Link to={
          {
            pathname:video.episodeId ? `/watch/${video.episodeId}` : video.animeId ? `/watch/${video.animeId}-episode-1`: demoVideoUrl,
            state: video.animeId ? video.animeId : demoVideoTitle
          
          }
          
          } >
            <CardMedia 
            
            image={video.animeImg}
            alt={video?.animeTitle}
            sx={{ width:{ xs: '100%', sm:'100%', md:'100%'}, height:{xs:100,sm:110,md:110} }}
            />
        </Link>
        <CardContent 
            sx={{ pt:1, display:'flex', flexWrap:'wrap', backgroundColor:'#5072A7', height: {xs:70,sm:70, md:70}}}
        >
            <Link to={video.episodeId ? `/watch/${video.episodeId}` : video.animeId ? `/watch/${video.animeId}-episode-1`: demoVideoUrl}>
                <Typography 
                    variant="subtitle1"
                    fontWeight="bold"
                    color="gold"

                    sx={{ 
                      fontSize:{xs:'9px',sm:'11px', md:'11px'},
                      padding:0,
                      marginTop:0,
                      pb:'10px',
                    
                    }}
                >
                    {video?.animeTitle.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
           
        </CardContent>
    </Card>
  )
}

export default AnimeCard