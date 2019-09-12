//PACKAGES
import React from 'react'

//COMPONENT CLASS
class Nav extends React.Component {
//RENDER
  render () {
    return (
      <nav>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>my plants</li>
          <li onClick={() => {this.props.handleView('addPlant')}}>add a plant</li>
        </ul>
      </nav>
    )
  }
}

//EXPORT
export default Nav
