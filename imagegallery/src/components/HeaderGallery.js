import React from 'react';
import '../css/header.css';

export default function HeaderGallery(props) {
    return (
        <div className="app-header">
           <h1>{props.galleryName} </h1>
        </div>
    )
}
