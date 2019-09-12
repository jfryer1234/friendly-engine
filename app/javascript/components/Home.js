//PACKAGES
import React from 'react'

//COMPONENT CLASS
class Home extends React.Component {
//RENDER
  render () {
    return (
      <article>
        <div className="post-header">
          <h1>{this.props.plantData.name} </h1>
          <h1>{this.props.plantData.type} </h1>
        </div>
        <div className="post-body">
          {this.props.plantData.care}
        </div>
        <div className="post-options">
          <ul>
            <li onClick={() => {this.props.handleView('editPost', this.props.postData)}}>edit plant</li>
            <li onClick={() => {this.props.handleDelete(this.props.plantData.id)}}>delete plant</li>
          </ul>
        </div>
      </article>
    )
  }
}

//EXPORT 
export default Post
