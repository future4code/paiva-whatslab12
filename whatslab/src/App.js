import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

const ContainerPrincipal = styled.div`

`
const ContainerDeInput = styled.div`

`




function App() {
  return (
    <div className="App">
      <ContainerPrincipal>
      <ContainerDeInput>
        <input></input>
        <input></input>
        <button>Enviar</button>
      </ContainerDeInput>
      <p>Mensagens enviadas</p>
      </ContainerPrincipal>
    </div>
  );
}

export default App;
