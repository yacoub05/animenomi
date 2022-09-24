import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"

import {SearchBar, SideBar} from "./"


const Navbar = () => (
  
  <Stack 

  direction ="row" 
  alignItems="center" 

  sx={{  position: 'sticky', background: '#002244', borderBottom: '1px solid white', top:0, justifyContent: 'space-between'}}>
    <div style={{display: 'flex', alignItems:'center'}}>
 
      <SideBar anchor='left' variant='temporary' />
      <Link to='/'  style={{display: 'flex', alignItems:'center', textDecoration:'none'}}>  
      <Typography className="logotitle1" sx={{marginLeft:{xs:'8px',sm:'8px',md:'30px'},      fontSize:{xs:'18px', md:'34px'}}} fontStyle="roboto" variant="h4" color="#e6ffe6" >Anime-</Typography>
      <Typography className="logotitle2" sx={{fontSize:{xs:'16px',sm:'18px', md:'34px'}}} fontStyle="roboto" variant="h4" color="#fefe" >Nomi</Typography>
      </Link>
    </div>
    <SearchBar />
  </Stack>

)

export default Navbar