import React from 'react';
import { observer } from 'mobx-react-lite';
import { useAppStateContext } from "../AppState/AppState";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { UsersList } from '../UsersList/UsersList';
import { AddUserForm } from '../AddUserForm/AddUserForm';
import { UserDetailsForm } from '../UserDetailsForm/UserDetailsForm';
import { UserPage } from '../UserPage/UserPage';

export const AppRouting = observer(() => {
    const appState = useAppStateContext();

    React.useEffect ( () => {
        appState.usersState.getData();
    });

    return (
        <Router>
            <Route exact path="/" render={ () => (<Redirect to="/users"/>) }/>
            <Route path="/users" component={UsersList}/>
            <Route path="/addUser" render={ () => <AddUserForm />}/>
            <Route path="/userDetails/:id" render={ (props) => <UserDetailsForm {...props} />}/>
            <Route path={"/user/:id"} render={(props) => <UserPage {...props} />}
            />
        </Router>
    );
});