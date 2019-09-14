//PACKAGES
import React from 'react'

//COMPONENT CLASS
class Nav2 extends React.Component {
//RENDER
  render () {
    return (
      <nav>
        <ul>
          <li onClick={() => {this.props.handleView('home2')}}>my succulents</li>
          <li onClick={() => {this.props.handleView('addSucculent')}}>add a succulent</li>
        </ul>
      </nav>
    )
  }
}

//EXPORT
export default Nav2
