import React, { useState, useEffect } from "react";

const ads = [
	{"title" : "1번광고"},
	{"title" : "2번광고"},
	{"title" : "3번광고"},
	{"title" : "4번광고"},
	{"title" : "5번광고"},
	{"title" : "6번광고"},
];

const Day = ({ day }) => {

  useEffect(() => {
  }, [])

  return (
    <div style={{display: 'flex'}}>
      <p>{day}</p>
      {
        ads.map((ad) =>
          <div>{ad.title}</div>
      )}
    </div>
  )
};

export default Day;
