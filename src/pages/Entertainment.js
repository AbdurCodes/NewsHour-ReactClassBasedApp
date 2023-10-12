import React, { Component } from 'react'
import News from '../components/News'

export class Entertainment extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-4'>Entertainment News</h1>
        <News pageSize={12} category={"entertainment"} country={"us"}/>
      </div>
    )
  }
}

export default Entertainment
