import React from 'react';
//import styled from 'styled-components';
import { AppContainer, AppHeader, Container, Header, UserPageContainer, FormContainer } from './App.styles';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams, useHistory, Redirect
} from "react-router-dom";


const usersData = [
  {
    id: 1,
    name: "NIKE Liteforce Blue Sneakers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
    status: "Available",
  },
  {
    id: 2,
    name: "Stylised Flip Flops and Slippers",
    description:
      "Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.",
    status: "Out of Stock",
  },
  {
    id: 3,
    name: "ADIDAS Adispree Running Shoes",
    description:
      "Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.",
    status: "Available",
  },
  {
    id: 4,
    name: "ADIDAS Mid Sneakers",
    description:
      "Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.",
    status: "Out of Stock",
  },
];

export const App = () => {
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
}

const AppRouting = () => {
  return (
      <Router>
          <Route exact path="/" render={ () => (<Redirect to="/users"/>) }/>
          <Route path="/users" component={UsersList}/>
          <Route path="/addUser" render={() => <AddUserForm />}/>
          <Route
            path={`/user/:id`}
            render={(props) => <UserPage data={usersData} {...props} />}
          />
      </Router>
  );
}

const UsersList = () => {
  const usersLinksList = usersData.map((el) => {
    return (
      <li>
        <Link to={`/user/${el.id}`}>{el.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <Link to='/addUser'>addUser</Link>
      <div>
        <h3>Users</h3>
        <ul>{usersLinksList}</ul>
      </div>
    </div>
  );
};

const AddUserForm = () => {
  let history = useHistory();

  const handleBackClick = () => {
    history.push("/");
}
  return(
    <FormContainer>adding me
      <button onClick={handleBackClick}>back</button>
    </FormContainer>
  )
}

const UserPage = ( props: any ) => {
  const {match, data} = props;
  console.log('data', props)
  let history = useHistory();
  let user = data.find((el: any) => el.id === parseInt(match.params.id));
  let usersData;

  if (user)
    usersData = (
      <div>
        <h3> {user.name} </h3>
        <p>{user.description}</p>
        <h4>{user.status}</h4>
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
};
