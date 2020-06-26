import React from 'react';
import { observer } from 'mobx-react-lite';

import {useAppStateContext} from "../AppState/AppState";
import { useHistory, RouteComponentProps } from "react-router-dom";
import { FormContainer, InputsContainer,
    InputContainer, Input, Button, FormPageContainer, FormHeader, CancelButton,
    ChevronLeft, Label, IDTitle } from './UserDetailsForm.styles';


type TParams = { id: string };

export const UserDetailsForm = observer((props: RouteComponentProps<TParams>) => {

    const appState = useAppStateContext();
    let history = useHistory();
    const { match } = props;

    const data = appState.usersState.usersData;
    let user = data.find((el: any) => el.id === parseInt(match.params.id));

    const handleAddClick = () => {
        appState.usersState.handleClick();
        history.push("/");
    }

    const handleBackClick = () => {
        history.push("/");
        appState.usersState.handleCancel();
    }

    return(
        <FormPageContainer>
        <FormContainer>
            <FormHeader>  <ChevronLeft onClick={handleBackClick}/>{user?.first_name} {user?.last_name}</FormHeader>
            <IDTitle>ID: {user?.id}</IDTitle>
            <InputsContainer>
                <InputContainer>
                    <Label isFocused={appState.usersState.passData} htmlFor="name">Name</Label>
                    <Input id="name" placeholder='name' onChange={appState.usersState.handleChangeName} type="text" value={user?.first_name}/>
                </InputContainer>
                <InputContainer>
                    <Label isFocused={appState.usersState.passData} htmlFor="surname">Surname</Label>
                    <Input id="surname" placeholder='Surname' onChange={appState.usersState.handleChangeSurname} type="text" value={user?.last_name}/>
                </InputContainer>
                <InputContainer>
                    <Label isFocused={appState.usersState.passData} htmlFor="email">Email</Label>
                    <Input id="email" placeholder='Email' onChange={appState.usersState.handleChangeEmail} type="text" value={user?.email}/>
                </InputContainer>
            </InputsContainer>
            <FormHeader>
                <CancelButton onClick={handleBackClick}>CANCEL</CancelButton>
                <Button onClick={handleAddClick}>SUBMIT TO REVIEW</Button>
            </FormHeader>

        </FormContainer>
        </FormPageContainer>
    )
});