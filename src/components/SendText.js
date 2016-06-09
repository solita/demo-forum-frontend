import React from 'react';

class SendText extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      hasH2: props.hasH2,
      placeholder: props.placeholder
    };
  }

  // 1. Stop event propagation
  // 2. Pass text forward to parent
  sendText(event, text) {
    event.preventDefault();
    this.props.onSendText(text);
    this.refs.textInput.value = '';
  }

  render() {
    { /*
      Destructor, we are getting the state we want as scoped variables via let */ }
    let {hasH2, placeholder} = this.state;

    return (
      <div className="send-text">
        {hasH2 && <h2>Create new topic</h2>}
        <form className="send-text__form">
          <input className="send-text__content" ref="textInput" type="text" placeholder={placeholder} />
          { /*
             * Notice that we pass the actual event to the function
             * Using ES6 arrow function we do not need to bind the function with * .bind(this)
             */ }
          <button onClick={(event) => this.sendText(event, this.refs.textInput.value)} className="send-text__send" type="submit">Send</button>
        </form>
      </div>
    )
  }
}

export default SendText;
