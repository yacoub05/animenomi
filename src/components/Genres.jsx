import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { genres } from '../util/constants'

const Genres = () => {



  return (


    <div className='container-sm'>
      <h4 class="display-6" style={{color:'#fefe', fontWeight:600,textAlign:'center', marginTop:'25px'}}>Genres</h4>
        <div className='row' style={{display:'flex', padding:'15px', margin:'5px' , flexWrap:'wrap'}}>
        {genres.map((item, idx)=>(
            <div>
              <Link to={`/genre/${item}`}>
                <h5 className='genre-name' style={{ fontSize:'12px',margin:'8px', color:'gold' }}>{item }</h5>
                {/* {item.id.channelId && <ChannelCard channelDetail={item}/>} */}
              </Link>
            </div>

        ))}
        </div>
    </div>



    // <Stack
    // direction="row"
    // sx={{
    //     overflow:"auto",
    //     height: { sx:'auto', md:'95%'},
    //     flexDirection:{md:'column'},

    // }}
    // >
    //     {genres.map((genre, indx)=>(
    //         <button
    //         className="category-btn"
    //         // onClick={()=> setSelectedCategory(category.name)}
    //         style={{
    //             background:'#ee9090',
    //             color: '#1e1e1e'
    //         }}
    //         key={indx}
    //         >
    //             <span style={{ color: genre ===genre ? 'white':
    //             'green', marginRight:'15px'
    //         }}>{genre}</span>
    //             {/* <span style={{ opacity:genre === genre
    //             ? '1': '0.8'
    //             }}>{genre}</span> */}
    //         </button>
    //     ))}
    // </Stack>
  )
}

export default Genres