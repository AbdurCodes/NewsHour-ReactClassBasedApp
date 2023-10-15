import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import About from "./pages/About";


export default class App extends Component {
  pageSize = 15;
  country = "in"
  render() {
    return (
      <div>
        <BrowserRouter>

          <Navbar />

          <Routes>

            <Route
              path="/" exact element={ <>
                <h1 className='text-center mt-4'>News Homepage</h1>
              <News key='general' pageSize={this.pageSize} category={"general"} country={this.country} /> 
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
              <News key='business' pageSize={this.pageSize} category={"business"} country={this.country} /> 
              </>} 
            />

            <Route
              path="/entertainment" exact element={ <>
                <h1 className='text-center mt-4'>Entertainment News</h1>
              <News key='entertainment' pageSize={this.pageSize} category={"entertainment"} country={this.country} /> 
              </>} 
            />

            <Route
              path="/health" exact element={ <>
                <h1 className='text-center mt-4'>Health News</h1>
              <News key='health' pageSize={this.pageSize} category={"health"} country={this.country} /> 
              </>} 
            />

            <Route
              path="/science" exact element={ <>
                <h1 className='text-center mt-4'>Science News</h1>
              <News key='science' pageSize={this.pageSize} category={"science"} country={this.country} /> 
              </>} 
            />

            <Route
              path="/sports" exact element={ <>
                <h1 className='text-center mt-4'>Sports News</h1>
              <News key='sports' pageSize={this.pageSize} category={"sports"} country={this.country} /> 
              </>} 
            />


            <Route
              path="/technology" exact element={ <>
                <h1 className='text-center mt-4'>Technology News</h1>
              <News key='technology' pageSize={this.pageSize} category={"technology"} country={this.country} /> 
              </>} 
            />


              {/* <Route path="*" element={<NoPage />} /> */}

          </Routes>

        </BrowserRouter>
      </div>
    );
  }
}
