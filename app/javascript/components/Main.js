//PACKAGES
import React from 'react'

// DEPENDENCIES
import Home from './Home.js'
import Create from './Create.js'

//COMPONENT CLASS
class Main extends React.Component {
//STATES
  constructor(props) {
    super(props)
    this.state = {
      plants: []
    }
  }
//HANDLERS
//requests and stores all plants in the database
  fetchPlants = () => {
    fetch('/api/plants')
      .then(data => data.json())
      .then(jData => {
        this.setState({ plants: jData })
      })
  }
  // create new plants
  handleCreate = (createData) => {
    fetch('/api/plants', {
      body: JSON.stringify(createData),
      method: 'Post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(createdPlant => {
        return createdPlant.json()
      })
      .then(jsonedPlant => {
        this.props.handleView('home')
        this.setState(prevState => {
          prevState.plants.push(jsonedPlant)
          return { plants: prevState.plants }
        })
      })
      .catch(err => console.log(err))
  }
  handleDelete = (id) => {
    fetch(`/api/plants/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState(prevState => {
          const plants = prevState.plants.filter( plant => plant.id !== id)
          return { plants }
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
      .then(updatedPlant => {
        this.props.handleView('home')
        this.fetchPlants()
      })
      .catch(err => console.log(err))
  }
//LIFE CYCLES
  componentDidMount() {
    this.fetchPlants()
  }
//RENDER
  render () {
    return (
      <main>
        <h1>{this.props.view.pageTitle}</h1>
        { this.props.view.page === 'home'
          ? this.state.plants.map((plantData) => (
            <Home
              key={plantData.id}
              plantData={plantData}
              handleDelete={this.handleDelete}
              handleView={this.props.handleView}
            />
          ))
          : <Create
              handleCreate={this.handleCreate}
              handleUpdate={this.handleUpdate}
              formInputs={this.props.formInputs}
              view={this.props.view}
            />
        }
      </main>
    )
  }
}
//EXPORT
export default Main
