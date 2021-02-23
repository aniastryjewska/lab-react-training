import React, { Component } from 'react';

class LikeButton extends Component {



  state = {
    clickCount: 0,
  }

  clickHandler = () => {
    this.setState((state, props) => ({
      clickCount: this.state.clickCount + 1 
    }))
  }

  render() {
    let colors =['purple','blue','green','yellow','orange','red']
      let colorIndex = (this.state.clickCount + colors.length) % colors.length
    return (
      <div>
        <button onClick={this.clickHandler} style={{
        backgroundColor: colors[colorIndex]
      }}>Likes: {this.state.clickCount}</button>
      </div>
    )
  }
}


export default LikeButton;