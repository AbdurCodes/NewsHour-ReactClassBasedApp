import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, publishedAt, author, description, url, source, urlToImage} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
        <span className="position-absolute top-0 translate-right badge rounded-pill bg-danger">{source}</span>
            <img src={urlToImage ? urlToImage : 'https://askleo.askleomedia.com/wp-content/uploads/2004/06/image_not_found150.png'} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title} <span class="badge bg-success">{new Date(publishedAt).getDate() === new Date().getDate()-1 ? "New" : ""}</span></h5>
                <p className="card-text">{description ? description : "Description not available"}</p>
                <p className="card-text text-muted">By {author ? author : 'Unknown'} on {new Date(publishedAt).toGMTString()}</p>
                <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read full article</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem;