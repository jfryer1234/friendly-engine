// PACKAGES
import React from "react";

// DEPENDENCIES
import Main1 from "./Main1.js"
// import Header from "./Header.js"
// import Nav from "./Nav.js"
// import Footer from "./Footer.js"

//CLASS COMPONENTS
class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        goPlants: false
      }
  }
//HANDLERS
handleClick = () => {
  this.setState({
    goPlants: true
  })
}

//RENDER
render () {
  return (
    <div>
    <h1>Welcome to Leaf of Faith</h1>
    <button onClick={this.handleClick}>Plants</button>
    {this.state.goPlants ? <Main1 /> : null}
    <button onClick={this.handleClick}>Succulents</button>
    {this.state.goPlants ? <Main1 /> : null}
    </div>
  )
}
}


export default App
