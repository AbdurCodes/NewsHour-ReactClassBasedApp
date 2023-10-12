import React, { Component } from 'react'
import News from '../components/News'

export class Science extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-4'>Science News</h1>
        <News pageSize={12} category={"science"} country={"us"}/>
      </div>
    )
  }
}

export default Science
