import './App.css';
import PersonList from './item';
import Week from './components/week';
import Slideshow from './components/slideshow';
import io from 'socket.io-client';
import { useEffect, useState } from 'react';
import VideoPlayer from './components/videoPlayer';


const socket = io('http://localhost:8000/');

const App = () => {
  const [videos, setVideos] = useState([]);
  const [metas, setMetas] = useState([]);

  const handleConnect = () => {
    //console.log('handleConnect!');
  }
  const handleBroadcast = (playlist, metaList) => {
    // console.log('handleBroadcast playlist@ : ', playlist);
    // console.log('handleBroadcast metaList@ : ', metaList);
    let parseVideoList = playlist.map((video, idx) => `https://youtu.be/${video.snippet.resourceId.videoId}`);
    let parseMetaList = metaList.map((meta) => meta.contentDetails.duration );
    setVideos(parseVideoList);
    setMetas(parseMetaList);

  }
  socket.on('connect', handleConnect);
  socket.on('playlist', handleBroadcast);

  useEffect(() => {
    // console.log('App.js Videos: ', videos);
    // console.log('App.js Metas: ', metas);
  }, [videos, metas]);

  return (
    <div className="App">
      {/* <h1>42ADS</h1> */}
      <VideoPlayer videos={videos} metas={metas} />
      <Slideshow />
      <header className="App-header">
        {/* <Week /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
