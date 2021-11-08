import React from "react";
import Aside from "../Aside/Aside";
import Topics from "../Topics/Topics";
import Songs from "../Songs/Songs";
import '../Main/Main.css';

export default function Main() {
   return(
       <div className='main-box'>
        <Aside />
        <Topics />
        <Songs />
       </div>
   );
}
