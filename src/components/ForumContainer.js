import React from 'react';

// axios for ajax
import axios from 'axios';

// Child components
import SingleTopic from './SingleTopic';
import SendText from './SendText';

// Mock data
import MockTopics from '../mock/topics';

// Style
import '../styles/components.css'

class ForumContainer extends React.Component{

  // Set initial state
  constructor(props) {
    super(props)

    this.state = {
      topics: []
    };
  }

  componentDidMount() {
    // 1. Get data from server
    // 2. Update current state with data received (setState)
    axios.get('http://localhost:8080/topic')
      .then((response) => {
        let topics = response.data;
        this.setState({
          topics
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }

  // SendText child will call this function
  // 1. Send message to server
  // 2. Set state to have the newly created topic prepended to topics
  sendText(title) {
    console.log(title);
    axios.post('http://localhost:8080/topic', { title })
      .then((response) => {
        let newTopic = response.data;
        let topics = [newTopic, ...this.state.topics];
        this.setState({
          topics
        });
      })
      .catch((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="container">
        <h1 className="forum__title">frontend demo</h1>

        { /* Pass parent function as onSendText to child */ }
        <SendText onSendText={this.sendText.bind(this)} hasH2={true} placeholder={'Type topic title here...'} />

        { /* Mapping over multiple items is done with JavaScript */ }
        {this.state.topics.map((topic, i) => <SingleTopic key={topic.id} topic={topic} ref={'item' + topic.id} />)}

        { /* start with mock data
        <pre>{JSON.stringify(MockTopics, null, 2) }</pre>
        */ }
      </div>
    )
  }
}

export default ForumContainer;
