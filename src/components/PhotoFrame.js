import React from 'react';

export const PhotoFrame = (props) => {
   return(
    <div className='photoFrame'>
         <img src={props.pic}/>
         <p className='par'>{props.par}</p>
    </div>
   )  
}