import React from 'react';

export default class ChatMember extends React.Component {
  render () {
    return (
      <li className="clearfix">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_10.jpg" alt="avatar" />
      <div className="about">
        <div className="name">{this.props.name}</div>
      </div>
    </li>
    )
  }
}
