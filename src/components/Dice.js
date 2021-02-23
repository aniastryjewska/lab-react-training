import React, { Component } from 'react';

class Dice extends Component {
  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((state, props) => ({
      clicked: !this.state.clicked
    }))
  }

  render() {
    let randomNumber=Math.floor(Math.random() * Math.floor(6))+1
    return <div>
    <h1>Dice</h1> 
    {/* <img className="Dice-image" onClick={setTimeout(this.clickHandler, 1000)} src= {`./img/dice${randomNumber}.png`} alt="dice" />
    <img className="Dice-image" onClick={setTimeout(this.clickHandler, 1000)} src= {`./img/dice${randomNumber}.png`} alt="dice" /> */}
    </div>
  }
}

export default Dice;