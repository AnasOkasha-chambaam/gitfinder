import React, { Component } from 'react'

export class Form extends Component {
  state = {
    text: ''
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
    // console.log(this.state.text)
  }
  onSubmit(e){
    e.preventDefault();
    if(e.target.value === ''){
      console.log('error')
    } else {
      this.props.searchUsers(this.state.text)
      this.setState({text: ''})
    }
  }
  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name="text" value={this.state.text} onChange={this.onChange.bind(this)} placeholder="Type a name and press ENTER..."/>
        </form>
      </div>
    )
  }
}

export default Form
