import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material"

import { Link } from "react-router-dom";
import { categories } from "../../util/constants";
import MenuIcon from '@mui/icons-material/Menu';
import Genres from "../Genres";


const SideBar = ({ variant, ...props }) => {
    const [open, setOpen] = useState(false);

    return (
      <Grid container justifyContent="flex-start" alignItems="center">
        <Grid item >
          <Drawer
            variant={variant}
            {...props}
            open={open}
            onClose={() => setOpen(false)}
            
          >
            
            
            <Stack

                onClick={() => setOpen(false)}
                direction="row"
                sx={{
                    overflow:"auto",
                    height: { sx:'100%', sm:'100%',md:'100%', lg:'100%'},
                    flexDirection:{xs:'column',md:'column'},
                    width:'200px',
                    display:'flex',
                   
                    paddingTop:'80px',
                    alignItems:'left',
                    fontWeight:'500',
                    background:'#13274F'

                }}
                >
                    
                    {categories.map((category)=>(
                      <Link to={category.name === 'Movies'? '/watch/anime-movies' : category.name ==='Most Popular' ? '/popular':'/'}>
                        <button
                        className="category-btn"

                        style={{
                            
                            color: 'white'
                        }}
                        key={category.name}
                        >
     
                            <span className= 'sidebar-span'style={{  opacity:'0.8'
                            }}>{category.name}</span>
                        </button>
                 
                        </Link>
                    ))} 
                    <div >
                           <Genres />
                           </div>
        </Stack>

        </Drawer>
        </Grid>
  
        <Grid item className="app__navbar-menu">
          <Button onClick={() => setOpen(!open)}>
          <MenuIcon sx={{ width: 30, height:30, color:'#fefe',  marginLeft:{xs:'10px',md:'30px'} }} onClick={()=>setOpen(open)}/>
          </Button>
        </Grid>
      </Grid>
    );
  };

export default SideBar