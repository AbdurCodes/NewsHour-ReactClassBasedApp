import React, { Component } from 'react'
import News from '../components/News'

export class General extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-4'>General News</h1>
        <News pageSize={12} category={"general"} country={"us"}/>
      </div>
    )
  }
}

export default General
