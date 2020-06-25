import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UsersLogo } from './assets/UsersLogo';
import { ChevronIcon } from './assets/ChevronIcon';

export const AppContainer = styled('div')`
    background-color: #EEF0F1;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    color: white;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);

`;

export const HeaderContainer = styled('div')`
    width: calc(100vw - 80px);
    display: flex;
    box-sizing: border-box;
    align-items: center;

    @media (min-width: 960px) {
        min-width: 960px;
        width: calc(100vw - 96px);
    }
`;

export const TopTitlesHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px;
`;

export const MainPageContainer = styled('div')`
    margin: 108px 24px 40px 24px;
    background: #fff;
    width: calc(100vw - 80px);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding: 24px 24px 8px 24px;
    border-radius: 4px;
    height: fit-content;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
    @media (min-width: 960px) {
        min-width: 960px;
        width: calc(100vw - 96px);
    }
`;

export const Header = styled('div')`
    height: 60px;
    position: fixed;
    top: 0;
    width: 100vw;
    background: #617D8B;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 15px;
`;

export const FormPageContainer = styled('div')`
    margin: 108px 24px 40px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

export const FormContainer = styled('div')`
    display: flex;
    flex-direction: column;
    width: 432px;
    min-height: 388px;
    padding: 0 20px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
`;

export const FormHeader = styled('div')`
    margin: 24px 0 24px 0;
    color: rgba(0,0,0,0.87);
    font-size: 24px;
    display: flex;
    align-items: center;
    height: 28px;
    &:last-of-type{
        justify-content: flex-end;
        height: 36px;
    }
`;

export const ElementTitle = styled('div')`
    color: rgba(0,0,0,0.6);
    font-size: 14px;
    margin-bottom: 4px;
    line-height: 20px;
    letter-spacing: 0.25px;
    &:last-of-type {
        margin-bottom: 4px;
        margin-top: 8px;
    }
`;

export const IDTitle = styled(ElementTitle)`
    margin: -20px 0 15px 32px;
`;

export const UsersTitle = styled('h3')`
    font-size: 24px;
    color: rgba(0,0,0,0.87);
    font-weight: 400;
`;

export const Rows = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 19px 12px 16px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 6px;
    margin: 0 0 16px 0;
    &:hover {
        background: #fafafa;
    }
`;

export const UserPageRow = styled(Rows)`
    background: #fafafa;
    color: rgba(0,0,0,0.6);
`;

export const UserPageContainer = styled('div')`
    height: 100vh;
    background: #fff;
    color: white;
    position: absolute;
    padding: 0 20px;
    display: block;
    top: 0;
    left: 0;
    right: 0;
`;

export const InputsContainer = styled('div')`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
`;

export const Button = styled('button')`
    border: 0px;
    padding: 10px 16px;

    border-radius: 4px;
    background-color: #E1E4E5;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);
    font-size: 14px;
    letter-spacing: 1.25px;
    cursor: pointer;
    border-radius: 6px;
    &:hover{
        background: #617D8B;
        opacity: 1;
    }
`;

export const CancelButton = styled(Button)`
    background: none;
    box-shadow: none;
    &:hover{
        background: none;
    }
`;

export const ChevronLeft = styled(ChevronIcon)`
    transform: rotate(90deg);
    height: 28px;
    width: 28px;
    padding: 7px;
    cursor: pointer;
    margin: 7px 10px 7px -7px;
`;

export const Input = styled('input')`
    height: 56px;
    width: 356px;
    border: 1px solid rgba(0,0,0,0.32);
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 0.15px;
    padding: 0 40px 0 16px;
`;

interface LabelPropsType {
    isFocused: boolean;
}

export const Label = styled.label<LabelPropsType>`
    color: #000;
    font-size: 12px;
    background: #fff;
    padding: 0 4px;
    position: absolute;
    left: 14px;
    top: -7px;
    display: ${props => props.isFocused ? 'block' : 'none'};
`;

export const InputContainer = styled('div')`
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 28px 24px 28px 52px;
    &:first-of-type {
        margin: 0px 24px 0px 52px;
    }
    &:last-of-type {
        margin: 0px 24px 0px 52px;
    }

    @media screen and (min-width: 768px){
        display: block;
    }
`;

export const LinkRow = styled(Link)`
    text-decoration: none;
`;

export const ImageWrapper = styled('div')`
    height: 83px;
    overflow: hidden;
    width: 103px;
`;

export const Image = styled('img')`
    width: 100%;
    max-width: 103px;
`;

export const AddUserButton = styled(Link)`
    background-color: #607D8B;
    padding: 10px 16px;
    text-transform: uppercase;
    color: #fff;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    letter-spacing: 1.25px;
`;

export const UsersAppTitle = styled(UsersTitle)`
    color: #fff;
    margin: 0 0 0 16px;
`;

export const UsersLogoWrapper = styled(UsersLogo)`
    width: 47px;
`;

export const FooterContainer = styled('div')`
    height: 40px;
    width: 100%;
    background-color: #E1E4E5;
    color: #607D8B;
    font-size: 12px;
    box-shadow: inset 0px 2px 2px 1px rgba(0,0,0,0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
`;

export const InfoTooltip = styled('div')`
    animation: FadeAnimation 0.3s ease-in 2s forwards;
    height: 48px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    background: #000;
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    top: 68px;
    @keyframes FadeAnimation {
        0% {
          opacity: 1;
          visibility: visible;
        }

        100% {
          opacity: 0;
          visibility: hidden;
        }
      }
`;