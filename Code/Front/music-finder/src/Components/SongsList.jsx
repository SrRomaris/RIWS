import React, {useState, useMemo} from 'react';
import SongItem from './SongItem';
import { FormCheckbox } from "shards-react";


import './SongsList.css'

const SongsList = ({songs, totalSongs }) => {
    const [sorted, setSorted] = useState(false);
    const handleSort  = () => setSorted(!sorted)
    
    const sortedSongs = useMemo (()=> {
        const sortedSongs = [...songs]
        return sortedSongs.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
    },[songs, sorted]); 

    const showingSongs = sorted ? sortedSongs : songs
    return(
        <div className={"SongsList"}>
            
            <div className="InfoContainer"><FormCheckbox toggle checked={sorted} onChange={handleSort}> Ordenar Alfabeticamente</FormCheckbox><span>{`Numero de canciones que satisfacen la busqueda: ${totalSongs}`}</span></div>
            <div className="ListContainer">
            
                {showingSongs.map((song,index) => <SongItem song={song} />)}
            </div>
        </div>
    )
}

export default SongsList;