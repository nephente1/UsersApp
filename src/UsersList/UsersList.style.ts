import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

export const TopTitlesHeader = styled('div')`
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px;
`;

export const UsersTitle = styled('h3')`
    font-size: 24px;
    color: rgba(0,0,0,0.87);
    font-weight: 400;
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
