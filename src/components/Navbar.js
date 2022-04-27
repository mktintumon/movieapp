import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex' , padding: '0.5rem' , marginLeft:'1rem'}}>
          <h1>Movie App</h1>
          <h2 style={{marginLeft: '3rem' , marginTop:'0.7rem'}}>Favourites</h2>
      </div>
    )
  }
}

export default Navbar