import React from 'react';
import { observer } from 'mobx-react-lite';
import {useAppStateContext} from "../AppState/AppState";
import { useHistory } from "react-router-dom";

import { FormContainer, InputsContainer,
    InputContainer, Input, Button, FormPageContainer, FormHeader, CancelButton,
    ChevronLeft, Label } from './AddUserForm.styles';

export const AddUserForm = observer(() => {
    const appState = useAppStateContext();
    const [focus, setFocus] = React.useState(false);
    let history = useHistory();

    if (appState.usersState.name.length > 0 || appState.usersState.surname.length > 0 || appState.usersState.email.length > 0) {
        appState.usersState.passData = true;
    } else {
        appState.usersState.passData = false;
    }

    const handleFocus = () => {
        setFocus(appState.usersState.passData)
    }

    const handleAddClick = () => {
        if(appState.usersState.passData){
            appState.usersState.handleClick();
            history.push("/");
        } else {
            console.log('hold on!')
            setFocus(true)
        }
    }

    const handleBackClick = () => {
        history.push("/");
        appState.usersState.handleCancel();
    }

    return(
        <FormPageContainer>
        <FormContainer>
            <FormHeader>  <ChevronLeft onClick={handleBackClick}/> New user details</FormHeader>
            <InputsContainer>
                <InputContainer>
                    <Label isFocused={appState.usersState.passData || focus} htmlFor="name">Name</Label>
                    <Input id="name" onFocus={handleFocus} placeholder='name' onChange={appState.usersState.handleChangeName} type="text" value={appState.usersState.name}/>
                </InputContainer>
                <InputContainer>
                    <Label isFocused={appState.usersState.passData || focus} htmlFor="surname">Surname</Label>
                    <Input id="surname" onFocus={handleFocus} placeholder='Surname' onChange={appState.usersState.handleChangeSurname} type="text" value={appState.usersState.surname}/>
                </InputContainer>
                <InputContainer>
                    <Label isFocused={appState.usersState.passData || focus} htmlFor="email">Email</Label>
                    <Input id="email" onFocus={handleFocus} placeholder='Email' onChange={appState.usersState.handleChangeEmail} type="text" value={appState.usersState.email}/>
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