import React, { useState, useEffect } from "react";
import Day from "./day";

const ads = [
	"1번광고",
	"2번광고",
	"3번광고",
	"4번광고",
	"5번광고",
	"6번광고",
];
const days = [
	"월요일",
	"화요일",
	"수요일",
	"목요일",
	"금요일",
	"토요일",
	"일요일",
];

const Week = () => {
  const [persons, setPersons] = useState([]);
  const [playList, setPlayList] = useState([]);
  const playlistId = "PLbxJBFCZUspLzyAvZSyYNDtqeRLdmEvY1";
  const YOUTUBE_KEY = "AIzaSyAUw6tm2EpFhWQGw4afrADFydikeO-8YXw";



  useEffect(() => {
  }, [])

  return (
    <div>
      <h3>Week Schedule</h3>
      <div>
      {
        days.map((day) =>
          <Day day={day} />
      )}
      </div>
    </div>
  )
};

export default Week;
