import React from 'react';
//import styled from 'styled-components';
import { AppContainer, AppHeader, Container, Header, UserPageContainer, FormContainer, InputsContainer, InputContainer, Input, AddButton } from './App.styles';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams, useHistory, Redirect
} from "react-router-dom";
import {useAppStateContext} from "./AppState/AppState";
import { UsersState } from './AppState/UsersState';
import { observer } from 'mobx-react-lite';


export const UsersApp = observer(() => {
  return (
    <AppContainer>
      <AppHeader>
      <Header><Container>Users app</Container></Header>
        <Container>
        <AppRouting />
        </Container>
      </AppHeader>
    </AppContainer>
  );
});

const AppRouting = observer(() => {
    const appState = useAppStateContext();
//     const [state] = React.useState(() => new UsersState());
//     const [myData, setMyData] = React.useState();
//     React.useEffect( () => {
//         setMyData(state.finalList);
//     }, [])
// console.log('a',myData)
    return (
        <Router>
            <Route exact path="/" render={ () => (<Redirect to="/users"/>) }/>
            <Route path="/users" component={UsersList}/>
            <Route path="/addUser" render={ () => <AddUserForm />}/>
            <Route
                path={`/user/:id`}
                render={(props) => <UserPage data={appState.usersState.renderList} {...props} />}
            />
        </Router>
    );
});

const UsersList = observer(() => {
    const appState = useAppStateContext();

    return (
        <div>
        <Link to='/addUser'>addUser</Link>
        <div>
            <h3>Users</h3>
            <ul>{appState.usersState.renderList}</ul>
        </div>
        </div>
    );
});

const AddUserForm = observer(() => {
    const appState = useAppStateContext();
    let history = useHistory();

    const handleAddClick = () => {
        appState.usersState.handleClick();
        history.push("/");
    }

    const handleBackClick = () => {
        history.push("/");
    }
    return(
        <FormContainer>adding me
            <InputsContainer>
                {/* {appState.usersState.renderError()} */}
                <InputContainer>Type name
                    <Input onChange={appState.usersState.handleChangeTitle} type="text" value={appState.usersState.inputTitle}/>
                    <AddButton onClick={handleAddClick}>ADD</AddButton>
                </InputContainer>
            </InputsContainer>
        <button onClick={handleBackClick}>back</button>
        </FormContainer>
    )
});

const UserPage = observer(( props: any ) => {
    const {match, data} = props;
    console.log(match, props)
    let history = useHistory();
    let user = data.find((el: any) => el.props.itemID === parseInt(match.params.id));
    let usersData;

    console.log('data', data)

    if (user)
        usersData = (
        <div>
            <p>id: {user.props.itemID}</p>
            <h3> {user.props.firstName} {user.props.lastName}</h3>
            <p>{user.props.email}</p>
            <h4><img src={user.props.avatar} /></h4>
        </div>
        );
    else usersData = <h2> Sorry. Product doesn't exist </h2>;

    const handleBackClick = () => {
        history.push("/");
    }

    return (
        <UserPageContainer>
        <div>{usersData}</div>
        <button onClick={handleBackClick}>back</button>
        </UserPageContainer>
    );
});
