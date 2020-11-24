import React from 'react';
import '../css/footer.css';

export default function FooterGallery(props) {
    return (
        <div className="footer">
            <p>Image Gallery using React.JS by Le Dung - Contact by email:</p>
            <a href={props.contact}> {props.contact}</a>
        </div>
    )
}
