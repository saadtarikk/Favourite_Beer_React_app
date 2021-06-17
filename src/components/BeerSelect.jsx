import React from 'react'

const BeerSelect = (beers) => {

    // const beerSelectItem = beers.map((beer, index) => {
    //     return <option value={index} key={index}>{beer.name}</option>
    // })
    console.log(beers)



    // const handleChange = (event) => {
    //     const chosenBeer = beers[event.target.value]
    // }
    return (
        <select>
        <option>
            Choose a Beer:
        </option>
        {/* {beerSelectItem} */}
            
        </select>
    )
}

export default BeerSelect
