import logo from './logo.svg';
import './App.css';
import {Button} from './Styled';
import {InputUsuario} from './Styled'; 
import {InputMensagem} from './Styled'; 
import {InputContainer} from './Styled';

function App() {
  return (
    <InputContainer className="App">
      <InputUsuario placeholder="Usuario" />
      <InputMensagem placeholder="Mensagem" />
      <Button>Enviar</Button>
    </InputContainer>

  );
}

export default App;
