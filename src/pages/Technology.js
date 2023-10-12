import React, { Component } from 'react'
import News from '../components/News'

export class Technology extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-4'>Technology News</h1>
        <News pageSize={12} category={"technology"} country={"us"}/>
      </div>
    )
  }
}

export default Technology
