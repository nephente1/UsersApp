import React from 'react';
import { observer } from 'mobx-react-lite';
import {useAppStateContext} from "../AppState/AppState";
import { MainPageContainer, UsersTitle, TopTitlesHeader, AddUserButton } from './UsersList.style';

export const UsersList = observer(() => {
    const appState = useAppStateContext();
    const handleClick = () => {
        appState.usersState.passData = false;
        appState.usersState.renderTooltip = false;
    }

    return (
        <MainPageContainer>
            <TopTitlesHeader>
                <UsersTitle>Users</UsersTitle>
                <AddUserButton to='/addUser' onClick={handleClick}>+ add user</AddUserButton>
            </TopTitlesHeader>
            {appState.usersState.renderList}
        </MainPageContainer>
    );
});