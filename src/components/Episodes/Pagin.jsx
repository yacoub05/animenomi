import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const Pagin = ({episodesPerPage, totalEpisodes, paginate, indexOFLastEpisode}) => {

    const pageNumbers = []

    for(let i =1; i<=Math.ceil(totalEpisodes / episodesPerPage); i++){
        pageNumbers.push(i)
    }

  return (
    <Dropdown>
    <Dropdown.Toggle variant="dark" id="dropdown-basic">
      Episodes
    </Dropdown.Toggle>

               
                   <Dropdown.Menu variant="dark" style={{ height: 'auto', maxHeight: '200px', overflowX: 'hidden'}}>
                   {pageNumbers.map(number=>(
                   <Dropdown.Item onClick={()=>paginate(number)}>{(number*50)-49} - {number *50}</Dropdown.Item>
                 
                   ))}
                   </Dropdown.Menu>


  </Dropdown>
);

  
}

export default Pagin