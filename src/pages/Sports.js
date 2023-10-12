import React, { Component } from 'react'
import News from '../components/News'

export class Sports extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-4'>Sports News</h1>
        <News pageSize={12} category={"sports"} country={"us"}/>
      </div>
    )
  }
}

export default Sports
