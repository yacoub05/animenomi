import { Stack, Box } from "@mui/material"
import {AnimeCard} from '.'

const AnimeCategories = ({videos , direction}) => {

  if(!videos?.length) return 'Loading...'
  return (
    <Stack
        sx={{
          ml:{xs:0,md:0},
          width:{xs:'100%',sm:'100%',md:'95%'},
          justifyContent:{xs:'start'}
        }}

        
        
        direction={direction || "row"}
        flexWrap="wrap"
        
        gap={2}
    >
        {videos.map((item, idx)=>(
            <Box key={idx}>
                {item.animeId && <AnimeCard video={item}/>}   
            </Box>

        ))}
    </Stack>
  )
}

export default AnimeCategories