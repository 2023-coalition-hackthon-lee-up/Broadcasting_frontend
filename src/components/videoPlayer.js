import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './videoPlayer.css';

const VideoPlayer = ({ videos, metas }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const handleProgress = (state) => {
    const duration = state.duration ? state.duration : getDuration(metas[currentVideoIndex]);

    if (state.playedSeconds >= 10 || state.playedSeconds >= duration) {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
      console.log('current idx:', currentVideoIndex);
    }
  };

  const getDuration = (durationFormat) => {
    const durationMatch = durationFormat.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = (durationMatch[1] !== undefined) ? parseInt(durationMatch[1]) : 0;
    const minutes = (durationMatch[2] !== undefined) ? parseInt(durationMatch[2]) : 0;
    const seconds = (durationMatch[3] !== undefined) ? parseInt(durationMatch[3]) : 0;

    const durationInSeconds = (hours * 3600) + (minutes * 60) + seconds;
    return durationInSeconds;
  }

  const handlePlay = (state) => {
    console.log('tried to unmute!: ', state);
    //setIsMuted(false);
    console.log('unmuted');
  }

  const currentVideoUrl = videos[currentVideoIndex];

  useEffect(() => {
  console.log('videoPlayer.js videos: ', videos);
  }, [videos]);

  return (
  <div className="video-container">
    <ReactPlayer
      url={currentVideoUrl}
      onProgress={handleProgress}
      onPlay={handlePlay}
      playing={true}
      muted={true}
      progressInterval={1000}
      config={{
      youtube: {
        playerVars: { autoplay: 1, controls: 0, loop: 1 },
        embedOptions: { allow: 'autoplay' }
      }
      }}
      width="100%"
          height="100%"
    />
  </div>
  );
};

export default VideoPlayer;
