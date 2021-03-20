import React, { Component } from 'react';
import './App.css';
import Row from './Row.js';
import requests from "./Requests.js"
import Banner from "./Banner.js";
import Nav from "./Nav.js";
import axios from './Axios.js';


function App() {
  return (
    <div className = "app">
      {<Nav/>}

      {<Banner/>}
      <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals}/>
      <Row title = "Trending Now" fetchUrl = {requests.fetchTrending}/>
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies}/>
      <Row title = "Romantic Movies" fetchUrl = {requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl = {requests.fetchDocumentaries}/>


    </div>
  );
}


export default App;
