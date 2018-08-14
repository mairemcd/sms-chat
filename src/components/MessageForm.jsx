import React from 'react';

export default class MessageForm extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onMessageSend(this.state.message)
    this.setState({
      message: ''
    })
  }

  render() {
    return (
    <div className="chat-message clearfix">
      <textarea onChange={this.handleChange}
                value={this.state.message}
                name="message-to-send" 
                id="message-to-send" 
                placeholder ="Type your message" 
                rows="3">
      </textarea>    
      {/* <i className="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
      <i className="fa fa-file-image-o"></i> */}
      <button onClick={this.handleSubmit}>Send</button>
    </div> 
    )
  }
}