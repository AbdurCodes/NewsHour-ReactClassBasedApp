import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
// import { useState } from 'react';
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import General from "./pages/General";
import Health from "./pages/Health";
import Science from "./pages/Science";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import About from "./pages/About";


export default class App extends Component {
  name = "AbdurCodes";
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
        <BrowserRouter>

          <Navbar />

          <Routes>

            <Route
              path="/"
              exact
              element={ <>
                <h1 className='text-center mt-4'>News Homepage</h1>
              <News pageSize={12} category={"general"} country={"us"} /> 
              </>
            }
            />

            <Route
             path="/about" 
             exact
             element={<About />}>
            </Route>

            <Route
             path="/business" 
             exact
             element={<Business />}>
            </Route>

            <Route
             path="/entertainment" 
             exact
             element={<Entertainment />}>
            </Route>

            <Route
             path="/general" 
             exact
             element={<General />}>
            </Route>
            <Route
             path="/health" 
             exact
             element={<Health />}>
            </Route>
            <Route
             path="/science" 
             exact
             element={<Science />}>
            </Route>
            <Route
             path="/sports" 
             exact
             element={<Sports />}>
            </Route>
            <Route
             path="/technology" 
             exact
             element={<Technology />}>
            </Route>


              {/* <Route path="*" element={<NoPage />} /> */}

          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}
