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
    return (
      <>
        <button onClick={this.clickHandler} style={{
        backgroundColor: colors[this.state.clickCount]
      }}>Likes: {this.state.clickCount}</button>
      </>
    )
  }
}


export default LikeButton;