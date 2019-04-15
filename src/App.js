import React, { Component } from "react"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pole1: [3, 2, 1],
      pole2: Array(3).fill(null),
      pole3: Array(3).fill(null),
      win: false
    }
  }
  checkWin() {
    if (
      this.state.pole3[0] === 3 &&
      this.state.pole3[1] === 2 &&
      this.state.pole3[2] === 1
    ) {
      //win do win stuff
      console.log("win, do win stuff")
    }
  }
  renderPoleGrid(myPole){
    return(
      //oh gosh what am I doing
      )
    )
  }
  render() {
    return (
      <div className="container">
        <h1>I will make this happen</h1>
        <h1>Tower of Hanoi</h1>
        <button>Reset</button>
      </div>
    )
  }
}

export default App
