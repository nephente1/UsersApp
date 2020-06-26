import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHistory, RouteComponentProps } from "react-router-dom";
import { UserPageContainer, UserPageRow, ElementTitle, ImageWrapper, Image, LinkRow, UsersTitle } from './UserPage.styles';
import { useAppStateContext } from '../AppState/AppState';


type TParams = { id: string };

export const UserPage = observer(( props: RouteComponentProps<TParams>) => {
    
    const appState = useAppStateContext();
    const data = appState.usersState.renderList;
    const { match } = props;
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
        <LinkRow to={`/userDetails/${user?.props.itemID}`}>{usersData}</LinkRow>
        <button onClick={handleBackClick}>back</button>
        </UserPageContainer>
    );
});