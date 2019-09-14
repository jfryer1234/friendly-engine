//PACKAGES
import React from 'react';

import Header from "./Header.js"
import Nav from "./Nav.js"
import Main from "./Main.js"
import Footer from "./Footer.js"

class App1 extends React.Component {
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
      type: '',
      care: '',
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
          name: plantData.name,
          type: plantData.type,
          care: plantData.care,
          id: plantData.id
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
    <div className="large-container">
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
export default App1