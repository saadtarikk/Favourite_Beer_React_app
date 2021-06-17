import React from 'react'
import ListItem from './ListItem'
import FavBeer from './FavBeer'

const BeerList = ({beers, onBeerSelect}) => {

    const handleChange = (event) => {
        console.log(event.target.value)
        const chosenBeer = beers[event.target.value];
        onBeerSelect(chosenBeer)
    }


    const beerSelectItems = beers.map((beer, index) => {
        return <ListItem beer={beer} index={index} key={index}/>
    })




    return (
        <select className="beer-list" onChange={handleChange}>
        {beerSelectItems}
        </select>
    )
}

export default BeerList
