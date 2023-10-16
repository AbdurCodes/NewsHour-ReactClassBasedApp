import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'



export default class News extends Component {
  // default values of props but it can be overridden by passing a different value to the component
  static defaultProps = {
    category: 'general',
    country: 'us',
    pageSize: 15,
  }

  // property used to define the data types of the props that the component expects to receive
  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number,
  }

  capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    // for category to be defined, we need to pass props to the constructor and super
    document.title = `Top ${this.capitalizeWord(this.props.category)} News - NewsHour`;
  }



  async updateNews () {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ac0b11c66fbf42b3a0482ef6bb62b17d&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      loading: false
    });
  }
    

  async componentDidMount() {
    this.updateNews();
  }

  handlePrevious = async () => {
    console.log("Previous clicked");
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  handleNext = async () => {
    console.log("Next clicked");
    // if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({page: this.state.page + 1});
      this.updateNews();
    // }
  };

  render() {
    return (
      <div className="my-3">
        {this.state.loading && <Spinner/>}
        {!this.state.loading && <div className="container">
        <h1 className='text-center mb-3 mt-4'>{`NewsHour - Top ${this.capitalizeWord(this.props.category)} Headlines`}</h1>
        
          <div className="row">
            {this.state.articles.map((article, index) => {
              // console.log(article);
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    publishedAt={article.publishedAt}
                    source={article.source.name}
                    author={article.author}
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
