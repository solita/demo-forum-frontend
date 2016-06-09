import React from 'react';
import moment from 'moment';

class Message extends React.Component {

  render() {
    const message = this.props.message;
    const receivedTimeAgo = moment(message.createTime).fromNow();

    return (
      <div className="message">
        {message.content} <span className="message__datetime">{receivedTimeAgo}</span>
      </div>
    )
  }
}

export default Message;
