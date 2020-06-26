import styled from 'styled-components';
import { UsersLogo } from '../assets/UsersLogo';
import { UsersTitle } from '../UsersList/UsersList.style';

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

export const HeaderWrapper = styled('div')`
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

export const UsersAppTitle = styled(UsersTitle)`
    color: #fff;
    margin: 0 0 0 16px;
`;

export const UsersLogoWrapper = styled(UsersLogo)`
    width: 47px;
`;