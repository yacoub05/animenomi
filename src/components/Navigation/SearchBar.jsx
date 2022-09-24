import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {Paper, IconButton} from '@mui/material'
import {Search} from '@mui/icons-material' 

const SearchBar = () => {
  
  
  const [searchTerm, setSearchTerm] = useState('')
  const navigate =useNavigate()

  
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(searchTerm){
        navigate(`/search/${searchTerm}`)
        setSearchTerm('')

    }
  }



    return (
    <Paper
    component="form"
    onSubmit={handleSubmit}
    className='search-paper'
    sx={{
        borderRadius:20,
        border: '1px solid #e3e3e3',
        pl:{xs:3,sm:3, md:3},
        pb:{xs:3, sm:3, md:3},
        boxShadow:'none',
        mr: {xs:2,sm:5, md:2},
        mb:{xs:2, sm:2,md:2},
        mt:{xs:2, sm:2,md:2},
        height: {xs:'16px',sm:'20px', md:40}
    }}
    >
        <input
        
            className="search-bar"
            placeholder="Search Anime..."
            value={searchTerm}
            onChange ={(e)=>setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{
            marginBottom:'5px',
            p:{xs:0,sm:0,md:'10px'}, color:'green'
        }}>
            <Search  fontSize='small' />
        </IconButton>
    </Paper>
  )
}

export default SearchBar