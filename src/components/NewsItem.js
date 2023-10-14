import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, publishedAt, description, url, urlToImage} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={urlToImage} className="card-img-top" alt={title}/>
            <div className="card-body">
                <p className="card-text">{publishedAt}</p>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read full article</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem;