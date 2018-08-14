import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default class Message extends React.Component {
  render() {
    return (
    <div>
      {this.props.me && (
        <li>
          <div className="message-data">
            <span className="message-data-name">
              <i className="fa fa-circle online" />
              {this.props.name}
            </span>
            <span className="message-data-time">{this.props.time}, Today</span>
          </div>
          <div className="message my-message">{this.props.body}</div>
        </li>
      )}

      {!this.props.me && (
        <li className="clearfix">
          <div className="message-data align-right">
            <span className="message-data-time">{this.props.time}, Today</span>{" "}
            &nbsp; &nbsp;
            <span className="message-data-name">{this.props.name}</span>{" "}
            <i className="fa fa-circle me" />
          </div>
          <div className="message other-message float-right">
            {this.props.body}
          </div>
        </li>
      )}
    </div>
    )
  }
}
