import React from 'react';

// Child components
import SingleTopic from './SingleTopic';

// Mock data
import MockTopics from '../mock/topics';

// Style
import '../styles/components.css'

class ForumContainer extends React.Component{

  // Set initial state
  constructor(props) {
    super(props)

    const topics = MockTopics;
    this.state = {
      topics
    };
  }

  componentDidMount() {
    // 1. Get data from server
    // 2. Update current state with data received (setState)
  }



  render() {
    return (
      <div className="container">
        <h1 className="forum__title">frontend demo</h1>

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
