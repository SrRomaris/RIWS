import React,{useState} from 'react';
import LyricsModal from './LyricsModal';

import {
    Card,
    CardHeader,
    CardTitle,
    CardImg,
    CardBody,
    CardFooter,
    Button
  } from "shards-react";

  

  import './SongItem.css'

const SongItem = ({song}) =>{
    const {title, artist, lyrics, artistImage, relevancy} = song;
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () =>{
        setShowModal(!showModal)
    }
    const phrases = lyrics.split("#");
    
    return(
        <>
        <LyricsModal open={showModal} lyrics={phrases.map(phrase => <p>{phrase}</p>)} artist={artist}  toggle={toggleModal}/>
        <Card className={"SongItem"}>
        <CardHeader></CardHeader>
        <CardImg src={artistImage} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <p>{artist}</p>
          <Button theme="dark" onClick={toggleModal}>Ver letra &rarr;</Button>
        </CardBody>
        <CardFooter>Likes: {relevancy}</CardFooter>
      </Card>
      </>
    )
}

export default SongItem;