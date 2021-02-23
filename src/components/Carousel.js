import React, { Component } from 'react';

class Carousel extends Component {
  state = {
    clicked: 0
  }

  clickHandler(quotient) {
    this.setState((state, props) => ({
      clicked : (state.clicked + quotient + this.props.imgs.length) % this.props.imgs.length
    }))
  }

  render() {
let imageIndex = this.props.imgs[this.state.clicked]
    return <div>
    <h1>Carousel</h1> 
    <button onClick={()=>this.clickHandler(-1)}>Left</button>
    <img className="Hooman-image" src= {imageIndex} alt="hooman"/> 
    <button onClick={()=>this.clickHandler(1)}>Right</button>
     </div>
  }
}

export default Carousel;