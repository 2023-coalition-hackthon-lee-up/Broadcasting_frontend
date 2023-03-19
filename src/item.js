import React, { useState, useEffect } from "react";
import axios from 'axios';
import Ads from "./components/ads";

const PersonList = () => {
  const [persons, setPersons] = useState([]);
  const [playList, setPlayList] = useState([]);
  const playlistId = "PLbxJBFCZUspLzyAvZSyYNDtqeRLdmEvY1";
  const YOUTUBE_KEY = "AIzaSyAUw6tm2EpFhWQGw4afrADFydikeO-8YXw";



  useEffect(() => {
    // const option = {
    //   key:"AIzaSyAUw6tm2EpFhWQGw4afrADFydikeO-8YXw",
    //   client_id:"869260714210-sl9rg88o0sdi80if0ohniv0c6p20r59m.apps.googleusercontent.com",
    //   redirect_uri:"https://localhost:3000/callback",
    //   response_type:"token",
    //   scope:"https://www.googleapis.com/auth/youtubepartner"
    // }


    axios.get(`https://accounts.google.com/o/oauth2/auth?client_id=869260714210-sl9rg88o0sdi80if0ohniv0c6p20r59m.apps.googleusercontent.com&redirect_uri=http://localhost:3000/callback&scope=https://www.googleapis.com/auth/youtube&response_type=token`)
    .then(res => {
      console.log("auth result:", res);
    });


    axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${YOUTUBE_KEY}
    `)
    .then(res => {
      console.log("res: ", res);
      console.log("data: ", res.data.items);
      const persons = res.data.items;
      setPersons(persons);
    });
  }, [])

  const handleCreatePlayList = () => {
    console.log('handleCreatePlayList');
    axios.post(`
    https://www.googleapis.com/youtube/v3/playlists&part=snippet&key=${YOUTUBE_KEY}
    `)
    .then(res => {
      console.log("res: ", res);
      console.log("data: ", res.data.items);
      const persons = res.data.items;
    });
  };

  return (
    <>
    <ul>
      {
        persons
          .map(person =>
            <Ads key={person.id} video={person} />
          )
      }
    </ul>
    <div>
      <li>Make my playlist</li>
      <button onClick={handleCreatePlayList}>create</button>
    </div>
    </>
  )
};

export default PersonList;
