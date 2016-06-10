// React import, we need to do this for every component
import React from 'react';

// Mock data
import MockMessages from '../mock/messages';

class SingleTopic extends React.Component{

  constructor(props) {
    super(props);

    // State that is specific to this component
    const messages = MockMessages;
    this.state = {
      id: props.topic.id,
      isActive: false,
      messages
    };
  }

  // When single topic is clicked
  // 1. Set isActive
  // 2. Check if this topic is active
  // 3. Fetch messages for this topics from server
  // 4. Update current state with setState with received data
  getMessagesFor(id) {
    let isActive = !this.state.isActive;
    this.setState({
      isActive
    });
  }

  render() {
    // Shorter calls for prop
    const topic =  this.props.topic;
    // DOM class strings that are changed depending on the current
    // active state
    let topicClass = this.state.isActive ? 'topic is-active' : 'topic';
    let topicTitleClass = this.state.isActive ? 'topic__title is-active' : 'topic__title';

    return (
      <section className={topicClass}>

        <h2 onClick={() => this.getMessagesFor(topic.id)} className={topicTitleClass}>
          {topic.title}
          <span className="topic__message-count">{topic.messageCount}</span>
        </h2>

        { /* Pass message forward to child component as prop */ }
        {this.state.isActive && this.state.messages.map((message, i) => <p key={i}>{message.content}</p>)}

      </section>
    )
  }
}

export default SingleTopic;
