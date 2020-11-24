import React, { useState, useEffect } from "react";
import HeaderGallery from "../components/HeaderGallery";
import MainGallery from "../components/MainGallery"
import FooterGallery from "../components/FooterGallery";
import ViewImage from "./ViewImage";


const contact = "ledung1974@gmail.com";
const galleryName = "Edmonton Image Gallery";
const pathGalleryThumbnail = "../thumbnail/";
const pathGalleryImages = "../images/";
const dataPort = '3005';


const getThumbnailList = async (port) => {
  const url = window.location.protocol + "//" + window.location.hostname + ":" + port;
  let response = await fetch(url);
  if (response.ok) { // if HTTP-status is 200-299
    return await response.json();
  } else {
    alert("HTTP-Error: " + response.status);
    return [];
  }
}

export default function App() {
  const [isViewOn, setViewOn] = useState(false);// true when a thumbnail image was clicked
  const [thumbnailList, setThumbnailList] = useState([]);//List all file in Thumbnail Folder 
  const [imageToView, setImageToView] = useState("");//Image filename to view 

  useEffect(() => {
    async function fetchData() {
            let response = await getThumbnailList(dataPort);
            setThumbnailList(response);
    };
    fetchData();
  }, []);

  const handleViewImage = (filename) => {
    setImageToView(filename);
    setViewOn(true);
  }

  const handleCloseView = () => {
    setViewOn(false);
  }

  return (
    <div className="App">
      <HeaderGallery galleryName={galleryName} />
      <MainGallery pathGalleryThumbnail={pathGalleryThumbnail} thumbnailList={thumbnailList} handleViewImage={handleViewImage} />
      {isViewOn ? <ViewImage filenameSelected={imageToView} pathGalleryImages={pathGalleryImages} handleCloseView={handleCloseView} />
        : null}
      <FooterGallery contact={contact} />
    </div>
  );
}

