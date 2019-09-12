// PACKAGES
import React from "react"

// DEPENDENCIES
import Main from "./Main.js"
import Header from "./Header.js"
import Nav from "./Nav.js"
import Footer from "./Footer.js"

//CLASS COMPONENTS
class App extends React.Component {
//STATE
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home',
        pageTitle: 'your plants'
      },
      formInputs: {
        name: null,
        type: null,
        care: null,
        id: null
      }
    }
  }

  // HANDLERS
  handleView = (view, plantData) => {
    let pageTitle = ''
    let formInputs = {
      name: '',
      image: '',
      body: '',
      id: null
    }
    switch (view) {
      case 'home':
        pageTitle = 'your plants'
        break
      case 'addPlant':
        pageTitle = 'add your new plant'
        break
      case 'editPlant':
        pageTitle = 'edit this plant'
        formInputs = {
          name: postData.name,
          type: postData.type,
          care: postData.care,
          id: postData.id
        }
        break
      default:
        break
    }
    this.setState({
      view: {
        page: view,
        pageTitle: pageTitle
      },
      formInputs: formInputs
    })
  }
//RENDER
  render () {
    return (
      <h1>something is connecting</h1>
      <div className="large-container">
        <Header/>
        <div className="main-container">
          <Nav handleView={this.handleView}/>
          <Main
            handleView={this.handleView}
            view={this.state.view}
            formInputs={this.state.formInputs}
          />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
