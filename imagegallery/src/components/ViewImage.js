import React from 'react'
import '../css/view.css';

export default function ViewImage(props) {
    return (
        <div className="container-view">
            <div className="view-div">
               <div className ="title-header">  
                  <p>Image filename: {props.filenameSelected}</p>
                  <button onClick={props.handleCloseView}>Close</button> 
               </div>  
               <div className="scroll-div"> 
                    <img    className="view-image" 
                            src={props.pathGalleryImages+props.filenameSelected} 
                            alt={props.filenameSelected}/>
                </div>
            </div>
        </div>
    )
}
