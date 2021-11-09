import React from "react";
import '../Songs/Songs.css';
import hand from '../Songs/hand_icon.gif';

export default function Songs() {
    

    return(
        <div className='song-box'>
        <img src={ hand } alt='pointer'/>
        <div className='songs-card'>
         <iframe 
         title='spotify'
         src="https://open.spotify.com/embed/playlist/4jrohYjsgd7LoX9zSAhpDM" 
         width="300" 
         height="1100" 
         frameborder="0" 
         allowtransparency="true" 
         allow="encrypted-media">       
         </iframe>
        </div>
        </div>
    );
}
