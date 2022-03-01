import React, { useEffect, useState } from "react";

export default function AlbumPhoto({ userId, title }) {
  const [photos, setPhotos] = useState([]);


  const titleClick = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${userId}/photos`
    );
    const photoFound = await response.json();
    setPhotos(photoFound);
  };

  return (
    <div>
      <h1 onClick={titleClick} >{title}</h1>
      <ol>
        {photos.map((photo) => (
          <li key={photo.id}>{photo.title} <img alt="album pic" src={photo.url}/></li>
        ))}
      </ol>
    </div>
  );
}
