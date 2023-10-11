import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import { useState } from 'react';



export default class App extends Component {

  name = 'AbdurCodes';
  render() {
    




      // .then(async function(response) {
      //   let resp = await response.json();
      //   console.log(response.json());
    

    // let apiURL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=ac0b11c66fbf42b3a0482ef6bb62b17d"

          // let {title} = resp.title;
          // let description = resp.description;
          // let url = resp.url;
          // let urlToImage = resp.urlToImage;
// })
    return (
      <div>
        <Navbar/>
        <News pageSize={3}/>
      </div>
    )
  }
}