import styled from 'styled-components';

export const AppContainer = styled('div')`
// text-align: center;
`;

export const AppHeader = styled('div')`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    margin-top: 80px;
    color: white;
`;

export const Container = styled('div')`
    width: 900px;
`;

export const Header = styled('div')`
  height: 80px;
  position: fixed;
  top: 0;
  width: 100vw;
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
`;

export const UserPageContainer = styled('div')`
    height: 100vh;
    background: grey;
    color: white;
    position: absolute;
    padding: 0 20px;
    display: block;
    top: 0;
    left: 0;
    right: 0;
`;

export const FormContainer = styled('div')`
    height: 100%;
    background: red;
    color: white;

    padding: 0 20px;
    display: block;
    // position: absolute;
    // top: 0;
    // left: 0;
    // right: 0;
`;

export const ElementTitle = styled('div')`
    flex: 1 1 100px;
    padding: 0 15px;
`;

export const Rows = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid silver;
    width: 100vw;
    // overflow-x: scroll;
    @media screen and (min-width: 768px){
        width: 700px;
    }
`;

export const DeleteButton = styled('button')`
    border: 0px;
    color: white;
    box-shadow: 0px 0px 5px 0px #797979;
    cursor: pointer;
    border-radius: 5%;
    background: orangered;
    font-size: 18px;
    padding: 5px 15px;
    &:hover{
        background: red;
    }
`;

export const InputsContainer = styled('div')`
    display:flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
`;

export const MainTitle = styled('h1')`
    font-size: 48px;
    margin: 15px;
    color: orangered;
`;

export const AddButton = styled('button')`
    border: 0px;
    padding: 10px 15px;
    background: #b8e748;
    color: white;
    box-shadow: 0px 0px 15px 0px #797979;
    font-size: 24px;
    cursor: pointer;
    border-radius: 5%;
    &:hover{
        background: #c0ee56;
`;

export const Input = styled('input')`
    padding: 8px 12px;
    border: none;
    box-shadow: 0px 0px 10px 0px #797979;
    font-size: 22px;
    margin: 0 10px 10px 20px;;
    border-radius: 5%;
`;

export const ErrorsRow = styled('div')`
    color: white;
    background: red;
    padding: 5px 10px;
`;

export const InputContainer = styled('div')`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 768px){
        display: block;
    }
`;