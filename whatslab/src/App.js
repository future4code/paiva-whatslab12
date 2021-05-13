import logo from './logo.svg';
import './App.css';
import { Button } from './Styled';
import { InputUsuario } from './Styled';
import { InputMensagem } from './Styled';
import { Container } from './Styled';
import React, { Component } from 'react';

class App extends Component {
  state = {
    fields: {
      user: "",
      message: "",
    },
    messages: []
  }
  handleChange = (name, value) => {
    this.setState({ fields: { ...this.state.fields, [name]: value, } })
  }

  handleClick = () => {
    const newMessages = this.state.messages
    newMessages.push(this.state.fields)
    this.setState({ messages: newMessages })

    this.setState({
      fields: {
        user: "",
        message: ""
      }
    })
  }

  render() {
    return (
      <>

        <Container className="App">
          {this.state.messages.map(message => {
            return (
                <h1>{message.user}</h1>,
                <p>{message.message}</p>
            )
          })}
          <InputUsuario onChange={(e) => this.handleChange("user", e.target.value)} value={this.state.fields.user} type='text' placeholder="Usuario" />
          <InputMensagem onChange={(e) => this.handleChange("message", e.target.value)} value={this.state.fields.message} type='text' placeholder="Mensagem" />
          <Button onClick={() => this.handleClick()}>Enviar</Button>
        </Container>
      </>
    );
  }
}

export default App;
