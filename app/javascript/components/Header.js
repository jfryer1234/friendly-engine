// PACKAGES
import React from "react"

// CLASS COMPONENT
class Header extends React.Component {
  // RENDER
  render () {
    return (
      <header>
        <h1 onClick={() => {this.props.handleView("home")}}>Leaf of Faith</h1>
      </header>
    )
  }
}

// EXPORT
export default Header
