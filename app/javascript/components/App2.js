//PACKAGES
import React from 'react';

import Header from "./Header.js"
import Nav2 from "./Nav2.js"
import Main2 from "./Main2.js"
import Footer from "./Footer.js"

class App2 extends React.Component {
//STATE
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'home2',
        pageTitle: 'your succulents'
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
  handleView = (view, succulentData) => {
    let pageTitle = ''
    let formInputs = {
      name: '',
      type: '',
      care: '',
      id: null
    }
    switch (view) {
      case 'home2':
        pageTitle = 'your succulents'
        break
      case 'addSucculent':
        pageTitle = 'add your new succulent'
        break
      case 'editSucculent':
        pageTitle = 'edit this succulent'
        formInputs = {
          name: succulentData.name,
          type: succulentData.type,
          care: succulentData.care,
          id: succulentData.id
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
        <Nav2 handleView={this.handleView}/>
        <Main2
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
export default App2
