import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

export default class MessageList extends React.Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
  }

  static defaultProps = {
    messages: [],
  }
  render() {
    return (
              
      <div className="chat-history">
      <ul>
        {this.props.messages.map((message, i) => (
          <Message key={i} {...message}/>
        ))}
      </ul>
    </div> 
    )
  }
}