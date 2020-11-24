import React from 'react';
import '../css/main.css';

export default function MainGallery(props) {
    return (
        <div className="container-main">
            <div className="gallery-grid">
                        {props.thumbnailList.map((filename,i) => (
                          <div key={i} className="cell-div">  
                             <img    
                                key ={i}   
                                className="cell-image" 
                                src={props.pathGalleryThumbnail+filename}
                                alt={filename}
                                onClick={()=>props.handleViewImage(filename)}   
                             />
                          </div>
                        ))}
            </div>
        </div>
    )
}