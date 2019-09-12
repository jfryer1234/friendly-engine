//PACKAGES
import React from 'react'

//COMPONENT CLASS
class Create extends React.Component {
  //STATE
  constructor() {
    super()
    this.state = {
      name: '',
      type: '',
      care: '',
      id: null
    }
  }

//HANDLERS
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // if the current view is addPlant!! then create:
    if(this.props.view.page === 'addPlant') {
      this.props.handleCreate(this.state)
    } else if(this.props.view.page === 'editPlant') { // else if edit:
      this.props.handleUpdate(this.state)
    }
  }
//LIFE CYCLES
  componentDidMount() {
    this.setState({
      name: this.props.formInputs.name,
      type: this.props.formInputs.type,
      care: this.props.formInputs.care,
      id: this.props.formInputs.id
    })
  }
//RENDER
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="name of plant" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label>
        <label>
          type
          <input type="text" placeholder="type of plant" id="type" value={this.state.type} onChange={this.handleChange}/>
        </label>
        <label id="post-form">
          care
          <textarea placeholder="care instructions" id="care" value={this.state.care} onChange={this.handleChange}></textarea>
        </label>
        <input type="submit" value="share"/>
      </form>
    )
  }
}

//EXPORT 
export default Form
