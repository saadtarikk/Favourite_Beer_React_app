import React, {useEffect, useState} from 'react'
import BeerList from '../components/BeerList'
import BeerSelect from '../components/BeerSelect'
import BeerDetail from '../components/BeerDetail'
import FavBeer from '../components/FavBeer'
const BeerContainer = () => {

    const [beers, setBeers] = useState([])
    const [selectedBeer, setSelectedBeer] = useState(null)
    const [favBeer, setFavBeer] = useState([])

    useEffect(() => {
        getBeers();
    }, [])


    const getBeers = function(){
        fetch('https://api.punkapi.com/v2/beers')
        .then(res => res.json())
        .then(beers => setBeers(beers))
    }

    
    const onBeerSelect = (beer) => {
        setSelectedBeer(beer)
        
        
    }

    const handleFavBeer = (beer) => {
        console.log("handleFavBeer called")
        const newFavBeer = [...favBeer, beer]
        setFavBeer(newFavBeer)

    }


    return (
        <div className="beer-container">
            {/* <h2>Beer Container</h2> */}
            <BeerList beers={beers} onBeerSelect={onBeerSelect}/>
            { selectedBeer ? <BeerDetail beer={selectedBeer} saveFavBeer={handleFavBeer} /> : null}
            <FavBeer className="fav-beer" favBeers={favBeer}/>

                     
        </div>
    )
}

export default BeerContainer
