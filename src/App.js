import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
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
              path="/" exact element={ <>
                <h1 className='text-center mt-4'>News Homepage</h1>
              <News key='general' pageSize={12} category={"general"} country={"us"} /> 
              </>} 
            />

            <Route
             path="/about" exact element={ <>
             <h1 style={{color: "green"}} className='text-center mt-4'>About NewsHour</h1>
             <About />
             </>} 
            />

            <Route
              path="/business" exact element={ <>
                <h1 className='text-center mt-4'>Business News</h1>
              <News key='business' pageSize={12} category={"business"} country={"us"} /> 
              </>} 
            />

            <Route
              path="/entertainment" exact element={ <>
                <h1 className='text-center mt-4'>Entertainment News</h1>
              <News key='entertainment' pageSize={12} category={"entertainment"} country={"us"} /> 
              </>} 
            />

            <Route
              path="/health" exact element={ <>
                <h1 className='text-center mt-4'>Health News</h1>
              <News key='health' pageSize={12} category={"health"} country={"us"} /> 
              </>} 
            />

            <Route
              path="/science" exact element={ <>
                <h1 className='text-center mt-4'>Science News</h1>
              <News key='science' pageSize={12} category={"science"} country={"us"} /> 
              </>} 
            />

            <Route
              path="/sports" exact element={ <>
                <h1 className='text-center mt-4'>Sports News</h1>
              <News key='sports' pageSize={12} category={"sports"} country={"us"} /> 
              </>} 
            />


            <Route
              path="/technology" exact element={ <>
                <h1 className='text-center mt-4'>Technology News</h1>
              <News key='technology' pageSize={12} category={"technology"} country={"us"} /> 
              </>} 
            />


              {/* <Route path="*" element={<NoPage />} /> */}

          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}
