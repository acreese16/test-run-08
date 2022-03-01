import React, {useEffect, useState} from 'react';
import './App.css';
import AlbumPhoto from './AlbumPhoto';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const abortControl = new AbortController();

    const loadAlbums = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/albums?userId=1", {signal: abortControl.signal});
      const albumAPI = await response.json();
      setAlbums(albumAPI);
    };
    loadAlbums();

    return () => {
      abortControl.abort();
    }
  }, [])

  return (
    <div className="App">
      {albums.map((album, index) => (<AlbumPhoto key={index} userId={album.id} title={album.title}/>))}

    </div>
  );
}

export default App;
