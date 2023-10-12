import React, { Component } from 'react'
import News from '../components/News'

export class business extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-4'>Business News</h1>
        <News pageSize={12} category={"business"} country={"us"}/>
      </div>
    )
  }
}

export default business
