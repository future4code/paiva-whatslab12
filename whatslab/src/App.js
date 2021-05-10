import logo from './logo.svg';
import './App.css';
import { Button } from './Styled';
import { InputUsuario } from './Styled';
import { InputMensagem } from './Styled';
import { Container } from './Styled';
import React, { Component } from 'react';
import { ContainerButtons } from './Styled';
import { ContainerMessages } from './Styled';


class App extends React.Component {
  state = {
    posts: [
      {
        remetente: "",
        conteudo: ""
      }],
        novoRemetente: "",
        novoConteudo: ""
  }

  onChangeInputNovoRemente = event => {
    this.setState({ novoRemetente: event.target.value })
  }

  onChangeInputNovoConteudo = event => {
    this.setState({ novoConteudo: event.target.value })
  }

  onKeyUpPostarMensagem = event => {
    if (event.code === "Enter" && this.state.novoRemetente !== "" && this.state.novoConteudo !== "") {
      this.novaMensagemPostada()
    }
  }

  novaMensagemPostada = () => {
    const novaMensagem = {
      remetente: this.state.novoRemetente,
      novoConteudo: this.state.novoConteudo
    }

  const mensagensAtualizadas = [...this.state.posts, novaMensagem]
    this.setState({ posts: mensagensAtualizadas })
    this.setState({ novoRemetente: "", novoConteudo: "" })
  }

  deletarMensagem = (event) => {
    let excluir = event.target
    excluir.remove()
  }

render() {

    const mensagemsComponentes = this.state.posts.map((post) => {
      return (
        <div
          id={post.remetente} 
          onDoubleClick={this.deletarMensagem}>
            <p>{post.remetente}</p>
            <p>{post.novoConteudo}</p>
        </div>
      )
    })


    return (
      <div className="App">
        <Container>
        <ContainerMessages>
        {mensagemsComponentes}
        </ContainerMessages>
        <ContainerButtons>
        <InputUsuario 
          placeholder="Usuário" 
          value={this.state.novoRemetente}
          onChange={this.onChangeInputNovoRemente} 
          onKeyDown={this.onKeyUpPostarMensagem}
        />
        <InputMensagem
          placeholder="Mensagem" 
          value={this.state.novoConteudo}
          onChange={this.onChangeInputNovoConteudo}
          onKeyDown={this.onKeyUpPostarMensagem} 
        />
        <Button onClick={this.novaMensagemPostada}>Enviar</Button>
        </ContainerButtons>
        </Container>
      </div>
    );
  }
}

export default App;
