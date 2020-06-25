import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter as Router, Route, useHistory, Redirect } from "react-router-dom";
import { AppContainer, HeaderContainer, Header, UserPageContainer, FormContainer, InputsContainer,
    InputContainer, Input, Button, MainPageContainer, UsersTitle, TopTitlesHeader, AddUserButton,
    UsersAppTitle, UsersLogoWrapper, FooterContainer, FormPageContainer, FormHeader, CancelButton,
    ChevronLeft, Label, InfoTooltip, UserPageRow, ElementTitle, ImageWrapper, Image, LinkRow, IDTitle } from './App.styles';

import {useAppStateContext} from "./AppState/AppState";


export const Footer = () => {
    return(
        <FooterContainer>
            USERS APP
        </FooterContainer>
    )
}

export const UsersApp = observer(() => {
    const appState = useAppStateContext();

    return (
        <>
        <AppContainer>
            {   appState.usersState.renderTooltip  ?
                <InfoTooltip>Thank you, your submission is pending and will appear after validation.</InfoTooltip> :
                null
            }
            <Header>
                <HeaderContainer>
                    <UsersLogoWrapper />
                    <UsersAppTitle>Users app</UsersAppTitle>
                </HeaderContainer>
            </Header>

            <AppRouting />
        </AppContainer>
        <Footer />
        </>
    );
});

const AppRouting = observer(() => {
    const appState = useAppStateContext();

    React.useEffect ( () => {
        appState.usersState.getData()
    }, [])

    return (
        <Router>
            <Route exact path="/" render={ () => (<Redirect to="/users"/>) }/>
            <Route path="/users" component={UsersList}/>
            <Route path="/addUser" render={ () => <AddUserForm />}/>
            <Route path="/userDetails/:id" render={ (props) => <UserDetailsForm {...props} />}/>
            <Route
                path={"/user/:id"}
                render={(props) => <UserPage data={appState.usersState.renderList} {...props} />}
            />
        </Router>
    );
});

const UsersList = observer(() => {
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

const AddUserForm = observer(() => {
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

const UserPage = observer(( props: any ) => {
    const {match, data} = props;

    let history = useHistory();
    let user = data.find((el: any) => el.props.itemID === parseInt(match.params.id));
    let usersData;

    if (user)
        usersData = (
            <UserPageRow>
            <div>
                <ElementTitle>id: {user.props.itemID}</ElementTitle>
                <UsersTitle>{user.props.firstName} {user.props.lastName}</UsersTitle>
                <ElementTitle>{user.props.email}</ElementTitle>
            </div>
            <ImageWrapper>
                <Image src={user.props.avatar} />
            </ImageWrapper>
            </UserPageRow>
        );
    else usersData = <h2> Sorry. Product doesn't exist </h2>;

    const handleBackClick = () => {
        history.push("/");
    }

    return (
        <UserPageContainer>
        <LinkRow to={`/userDetails/${user.props.itemID}`}>{usersData}</LinkRow>
        <button onClick={handleBackClick}>back</button>
        </UserPageContainer>
    );
});

const UserDetailsForm = observer((props: any) => {
    const appState = useAppStateContext();
    let history = useHistory();
    const {match} = props;

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
