import React from 'react';
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import './LyricsModal.css';



const LyricsModal = ({open, lyrics, artist, toggle}) =>{
  
    return(<div>
        <Modal className={"Modal"} open={open} toggle={toggle} >
          <ModalHeader>{artist}</ModalHeader>
          <ModalBody>{lyrics}</ModalBody>
        </Modal>
      </div>)
}

export default LyricsModal;