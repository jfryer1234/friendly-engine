//PACKAGES
import React from 'react'

//COMPONENT CLASS
class Home extends React.Component {
//RENDER
  render () {
    return (
      <article>
        <div className="post-header">
          <h4>{this.props.plantData.name} </h4>
          <h4>{this.props.plantData.type} </h4>
        </div>
        <div className="post-body">
          <h4>{this.props.plantData.care}</h4>
        </div>
        <div className="post-options">
          <ul>
            <li onClick={() => {this.props.handleView('editPost', this.props.plantData)}}>edit plant</li>
            <li onClick={() => {this.props.handleDelete(this.props.plantData.id)}}>delete plant</li>
          </ul>
        </div>
      </article>
    )
  }
}

//EXPORT
export default Home
