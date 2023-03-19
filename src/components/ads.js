
import React, { useEffect } from "react";
import axios from 'axios';

const Ads = ({ key, video }) => {
  useEffect(() => {
	console.log("key: ", key);
	console.log("video: ", video);
  }, [key, video])

  const handleDelete = async() => {
	const playlistId = "PLbxJBFCZUspJRTl80GG7FPxbyxt5TBdgp";
    const YOUTUBE_KEY = "AIzaSyAUw6tm2EpFhWQGw4afrADFydikeO-8YXw";
	axios.delete(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playlistId}&id=${video.snippet.resourceId.videoId}&key=${YOUTUBE_KEY}
	`)
	.catch(function (error) {
		console.log("error: ", error);
	})
	.then(res => {
		console.log("ads's res: ", res);
		console.log("ads's data: ", res.data.items);
	});
  };

  return (
    <>
		<li color='white'>
		<a  key={key} href={`https://youtu.be/${video.snippet.resourceId.videoId}`}>{video.snippet.title}</a>
		<button onClick={handleDelete}>DELETE</button>
		</li>
    </>
  )
};

export default Ads;
