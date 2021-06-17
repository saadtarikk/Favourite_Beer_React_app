import React from 'react'

const FavBeer = ({favBeers}) => {

    const getFavBeers = favBeers.map((beer) => {
        return(

            <>
            <li>{beer.name}</li>
            <li><img className="beer-img" src={beer.image_url} alt="img"/></li>
            </>
        )

    })
    return (
        <div className="fav-beer">
            <ul>
            <h3>Your Favourites</h3>
            {getFavBeers}
            </ul>
            
        </div>
    )
}

export default FavBeer
