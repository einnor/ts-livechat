import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChatMessage, ChatState } from './types';
import { ChatContext } from './ChatContext';

class App extends React.Component {
  static contextType = ChatContext;

  state: ChatState = {
    messages: [
      {
        message: 'Welcome! Type a message and press Send Message to continue the chat.',
        author: 'Bot'
      }
    ],
    input: '',
  }
}

export default App;
