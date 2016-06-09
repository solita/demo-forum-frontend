// React import, we need to do this for every component
import React from 'react';

// axios for ajax
import axios from 'axios';

// Child components
import Message from './Message';
import SendText from './SendText';

// Mock data
import MockMessages from '../mock/messages';

class SingleTopic extends React.Component{

  constructor(props) {
    super(props);

    // State that is specific to this component
    this.state = {
      id: props.topic.id,
      isActive: false,
      messages: []
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

    if (isActive) {
      axios.get(`http://localhost:8080/api/topic/${id}/message`)
      .then((response) => {
        let messages = response.data;
        this.setState({
          messages
        });
      })
      .catch((response) => {
        console.log(response);
      });
    }
  }

  // Creates new message for given topics
  // 1. Get current id from props
  // 2. Create message with POST
  // 3. Update state
  sendText(content) {
    const id = this.state.id;

    axios.post(`http://localhost:8080/topic/${id}/message`, { content })
      .then((response) => {
        let newMessage = response.data;
        let messages = [...this.state.messages, newMessage];
        this.setState({
          messages
        })
      })
      .catch((response) => {
        console.log(response);
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
        {this.state.isActive && this.state.messages.map((message, i) => <Message key={i} ref={`message-${i}`} message={message} />)}

        { /* Pass parent function as onSendText to child */ }
        {this.state.isActive && <SendText onSendText={this.sendText.bind(this)} hasH2={false} placeholder={'Type response here...'} />}
      </section>
    )
  }
}

export default SingleTopic;
