import React, { Component } from 'react'
import News from '../components/News'

export class Health extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-4'>Health News</h1>
        <News pageSize={12} category={"health"} country={"us"}/>
      </div>
    )
  }
}

export default Health
