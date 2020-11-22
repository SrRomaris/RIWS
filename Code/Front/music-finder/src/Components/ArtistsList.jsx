import React from 'react'
import './ArtistsList.css'

const ArtistList = ({artists}) =>{
    console.log(artists)

    artists.sort((a,b) => (b.numberOfSongs > a.numberOfSongs) ? 1 : ((a.numberOfSongs > b.numberOfSongs) ? -1 : 0))
    return(
    <div className={"ArtistsBar"}>
    <span><b>Apariciones por artista:</b></span>
    <div className={"ArtistList"}>

    {artists.map(artist=>
    <div className={"ArtistItem"}>
        <img className={"ArtistImage"} src={artist.image}/>
        <div className={"ArtistInfo"}>
            <span><b>{artist.artist}</b></span>
            <span>Apariciones: {artist.numberOfSongs}</span>
            </div>
            </div>)}
            
        </div>
        </div>
    )
}   

export default ArtistList