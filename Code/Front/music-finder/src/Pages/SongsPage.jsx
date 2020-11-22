import React, {useCallback, useEffect, useState} from 'react';
import {SearchForm, SongsList, ArtistsList} from "../Components/";
import SongsService from '../Service/SongsService'
import { Button } from "shards-react";
import { Link, useLocation, useHistory, useParams,FormCheckbox } from "react-router-dom";
import "./SongsPage.css";
const useQuery = () => new URLSearchParams(useLocation().search);


const splitSongs = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
       const myChunk = myArray.slice(index, index+chunk_size);
        tempArray.push(myChunk);
    }

    return tempArray;
}

const filterDuplicated = (arr, comp) =>{

    // store the comparison  values in array
const unique =  arr.map(e => e[comp])

  // store the indexes of the unique objects
  .map((e, i, final) => final.indexOf(e) === i && i)

  // eliminate the false indexes & return unique objects
 .filter((e) => arr[e]).map(e => arr[e]);

return unique;
}


const SongsPage = ({}) => {
    const [songs, setSongs] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const history = useHistory();
    const query = useQuery();
    const artist = query.get("artist")
    const title = query.get("title")
    const lyrics = query.get("lyrics")
    
   
   useEffect(()=>{
        SongsService.get("",{params:{artist,title,lyrics}}).then(result=> {
     
            setSongs(result.data)
        })
    },[artist,title,lyrics,currentPage])

    
    const handleSubmit = useCallback((data) => {
        setCurrentPage(0)
        history.push(`?artist=${data?.artista || ""}&title=${data?.titulo || ""}&lyrics=${data?.clave || ""}`)
        },[])




    const handleNextPage = () => {
        setCurrentPage(currentPage+1)
    }
    console.log(songs)
    const handlePreviousPage = () => {
        setCurrentPage(currentPage-1)
    }
    const pages = splitSongs(songs,12)
    const totalPages = Math.ceil(songs.length/12);
    
    const artists = songs.map(currentSong => ({artist:currentSong.artist, image:currentSong.artistImage, numberOfSongs: songs.filter(song => song.artist === currentSong.artist).length}))
    const uniqArtists  = filterDuplicated(artists,"artist")
   
    return(
        <div className={"SongsPage"}>
            
            <SearchForm onSubmit={handleSubmit} />
            <div className={"ListsContainer"}>
            
            <SongsList songs={ pages[currentPage] || [] } totalSongs={songs.length}  ></SongsList>
            <ArtistsList artists={uniqArtists}></ArtistsList>
            </div>
            <div className="ButtonContainer">
                { currentPage > 0 && <Button  theme="dark" onClick={handlePreviousPage}>Anterior</Button>}
                { currentPage +1 < totalPages && <Button  theme="dark" onClick={handleNextPage}>Siguiente</Button>}
            </div>
           
        </div>
        
        
    )
}

export default SongsPage;