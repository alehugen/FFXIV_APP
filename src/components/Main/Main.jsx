import React from "react";
import Aside from "../Aside/Aside";
import Topics from "../Topics/Topics";
import '../Main/Main.css';

export default function Main() {
   return(
       <div className='main-box'>
        <Aside />
        <Topics />
       </div>
   );
}
