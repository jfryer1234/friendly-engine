//PACKAGES
import React from 'react'

//COMPONENT CLASS
class Home2 extends React.Component {
//RENDER
  render () {
    return (
      <article>
        <div className="post-header">
          <h4>{this.props.succulentData.name} </h4>
          <h4>{this.props.succulentData.type} </h4>
        </div>
        <div className="post-body">
          <h4>{this.props.succulentData.care}</h4>
        </div>
        <div className="post-options">
          <ul>
            <li onClick={() => {this.props.handleView('editSucculent', this.props.succulentData)}}>edit succulent</li>
            <li onClick={() => {this.props.handleDelete(this.props.succulentData.id)}}>delete succulent</li>
          </ul>
        </div>
      </article>
    )
  }
}

//EXPORT
export default Home2
