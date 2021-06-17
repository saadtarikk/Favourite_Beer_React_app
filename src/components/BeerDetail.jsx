import React from 'react'
import FavBeer from './FavBeer'
const BeerDetail = ({beer, saveFavBeer}) => {

    return (
        <div className="beer-detail">
            <h4>{beer.name}</h4>
            <img className="beer-img" src={beer.image_url} alt="beer"/>
            <h5>{beer.tagline}</h5>
            <button type="submit" onClick={() => {saveFavBeer(beer)}}>Add to FAV</button>   
            {/* <p>Ingredients</p>
            {getIngredients} */}
        </div>
    )
}

export default BeerDetail
