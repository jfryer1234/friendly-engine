// PACKAGES
import React from "react";

// DEPENDENCIES
import App1 from "./App1.js"
import Header from "./Header.js"
import App2 from "./App2.js"
// import Nav from "./Nav.js"
// import Footer from "./Footer.js"

//CLASS COMPONENTS
class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        goPlants: false,
        goSucculents: false
      }
  }
//HANDLERS
handleClick = () => {
  this.setState({
    goPlants: true,
    goSucculents: true
  })
}


//RENDER
render () {
  return (
    <div>
    <Header />
    <button onClick={this.handleClick}>Plants</button>
    {this.state.goPlants ? <App1 /> : null}
    <button onClick={this.handleClick}>Succulents</button>
    {this.state.goSucculents ? <App2 /> : null}
    </div>
  )
}
}


export default App
