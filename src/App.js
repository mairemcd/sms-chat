import React, { Component } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatMember from './components/ChatMember';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import Search from './components/Search';
import './styles/styles.css';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      newMessage: "",
      messages: []
      // messages: [
      //   {time: '10:12', name: 'Vincent', body: 'Are we meeting today? Project has been already finished and I have results to show you.' , me: true},
      //   {time: '10:14', name: 'Olia', body: 'Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?' , me: false},
      //   {time: '10:17', name: 'Vincent', body: 'Actually everything was fine. Im very excited to show this to our team.' , me: true},
      //   {time: '10:19', name: 'Olia', body: 'Hello World', me: false},
      // ]
    }
  }

  componentDidMount() {
    // fetch('http://localhost:1337/token')
    // .then(response => response.json())
    // .then(data => {
    //   var syncClient = new Twilio.Sync.Client(data.token, { logLevel: 'info' });
    //   console.log(syncClient);
    // })
  }

  updateInput(key, value) {
    this.setState({ [key]: value });
    localStorage.setItem(key,value);
  }

  handleNewMessage = (text) => {
    const newMessage = {
      id: 1 + Math.random(),
      value: this.state.newMessage.slice()
    }

    let messages = [...this.state.messages]
    messages.push(newMessage)
    // const newMessage = {
    //   time: '10:25', 
    //   name: 'Vincent', 
    //   body: 'Is this working?',
    //   me: true
    // }

    this.setState({
      messages,
      newMessage: ''
    });

    localStorage.setItem("messages", JSON.stringify(messages));
    localStorage.setItem("newMessage", "");
  }

  render() {
    return (
      <div className="container clearfix">
      <div className="people-list" id="people-list">
        <Search/>
        <ul className="list">
          <ChatMember name="Vincent Porter"/>
          <ChatMember name="Aiden Chavez"/>
        </ul>
      </div>     
      <div className="chat">
        <ChatHeader/>
        <input
            type="text"
            placeholder="Type item here"
            value={this.state.newMessage}
            onChange={e => this.updateInput("newMessage", e.target.value)}
          />
                    <button
            onClick={() => this.handleNewMessage()}
            disabled={!this.state.newMessage.length}
          > Add </button>
                    <ul>
            {this.state.messages.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                </li>
              );
            })}
          </ul>
        {/* <MessageList messages={this.state.messages}/> */}
        {/* <MessageForm onMessageSend={this.handleNewMessage}/> */}
      </div> 
    </div>
    );
  }
}

