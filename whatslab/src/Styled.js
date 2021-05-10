import React from 'react';
import styled from 'styled-components';


export const InputUsuario = styled.input`
    border-radius: 3px;
    border-width: 1px;
    color: grey;
    display: flex;
    width: 4vw;
    height: 2vh;
    margin: 10px;
`

export const InputMensagem = styled.input`
    border-width: 1px;
    border-radius: 3px;
    background-color: white;
    color: grey;
    display: flex;
    width: 10vw;
    height: 2vh;
    margin: 10px;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: internal-light-dark(black, white);;
    width: 3vw;
    height: 2.5vh;
    margin: 10px;
    border-radius: 3px;

`

export const Container = styled.div`
    background-color: #e5ddd6;
    position: absolute;
    margin-left: 38vw;
    height: 100vh;
    width: 23vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;

    border-style: solid;
    border-width: 1px;
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
`

export const ContainerMessages = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`