import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export default class News extends Component {


  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  apiMainUrl =
    `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ac0b11c66fbf42b3a0482ef6bb62b17d`;

  async componentDidMount() {
    let url = `${this.apiMainUrl}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({ 
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false
    });
  }

  handlePrevious = async () => {
    console.log("Previous clicked");
    let url = `${this.apiMainUrl}&pageSize=${this.props.pageSize}&page=${this.state.page - 1}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false
    });
  };

  handleNext = async () => {
    console.log("Next clicked");
    if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
      let url = `${this.apiMainUrl}&pageSize=${this.props.pageSize}&page=${this.state.page + 1}`;
      this.setState({loading: true})
      let data = await fetch(url);
      let jsonData = await data.json(); // To get the body of the response
      this.setState({
        page: this.state.page + 1,
        articles: jsonData.articles,
        totalResults: jsonData.totalResults,
        loading: false
      });
    }
  };

  render() {
    return (
      <div className="my-3">
        {this.state.loading && <Spinner/>}
        {!this.state.loading && <div className="container">
          <div className="row">
            {this.state.articles.map((article, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={article.title}
                    description={article.description}
                    url={article.url}
                    urlToImage={article.urlToImage}
                  />
                </div>
              );
            })}
          </div>
          <div className="navButtons my-5 d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevious}
            >
              &laquo; Previous
            </button>
            <p>Page - {this.state.page}</p>
            <button
            disabled={this.state.page === Math.ceil(this.state.totalResults / this.props.pageSize)}
              type="button"
              className="btn btn-dark"
              onClick={this.handleNext}
            >
              Next &raquo;
            </button>
          </div>
        </div>}
      </div>
    );
  }
}
