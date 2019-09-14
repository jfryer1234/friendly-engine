//PACKAGES
import React from 'react'

// DEPENDENCIES
import Home2 from './Home2.js'
import Create2 from './Create2.js'

//COMPONENT CLASS
class Main2 extends React.Component {
//STATES
  constructor(props) {
    super(props)
    this.state = {
      succulents: []
    }
  }
//HANDLERS
//requests and stores all plants in the database
  fetchSucculents = () => {
    fetch('/api/succulents')
      .then(data => data.json())
      .then(jData => {
        this.setState({ succulents: jData })
      })
  }
  // create new plants
  handleCreate = (createData) => {
    fetch('/api/succulents', {
      body: JSON.stringify(createData),
      method: 'Post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdSucculent => {
        return createdSucculent.json()
      })
      .then(jsonedSucculent => {
        this.props.handleView('home2')
        this.setState(prevState => {
          prevState.succulents.push(jsonedSucculent)
          return { succulents: prevState.suculents }
        })
      })
      .catch(err => console.log(err))
  }
  handleDelete = (id) => {
    fetch(`/api/succulents/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState(prevState => {
          const succulents = prevState.succulents.filter( succulent => succulent.id !== id)
          return { succulents }
        })
      })
      .catch(err => console.log(err))
  }

  handleUpdate = (updateData) => {
    fetch(`/api/plants/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(updatedSucculent => {
        this.props.handleView('home2')
        this.fetchSucculents()
      })
      .catch(err => console.log(err))
  }
//LIFE CYCLES
  componentDidMount() {
    this.fetchSucculents()
  }
//RENDER
  render () {
    return (
      <div>
        <h1>{this.props.view.pageTitle}</h1>
        { this.props.view.page === 'home2'
          ? this.state.succulents.map((succulentData) => (
            <Home2
              key={succulentData.id}
              plantData={succulentData}
              handleDelete={this.handleDelete}
              handleView={this.props.handleView}
            />
          ))
          : <Create2
              handleCreate={this.handleCreate}
              handleUpdate={this.handleUpdate}
              formInputs={this.props.formInputs}
              view={this.props.view}
            />
        }
      </div>
    )
  }
}
//EXPORT
export default Main2
