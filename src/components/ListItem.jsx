import React from 'react'

const ListItem = ({beer, index}) => {
    
    return (
        
        <option value={index} key={index}>{beer.name}</option>

    )
}

export default ListItem