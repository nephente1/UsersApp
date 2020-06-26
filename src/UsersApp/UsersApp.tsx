import React from 'react';
import { observer } from 'mobx-react-lite';
import {useAppStateContext} from "../AppState/AppState";
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { AppRouting } from '../AppMainFiles/AppRouting';
import { AppContainer, InfoTooltip } from './UsersApp.styles';

export const UsersApp = observer(() => {
    const appState = useAppStateContext();

    return (
        <>
            <AppContainer>

                { appState.usersState.renderTooltip  ?
                    <InfoTooltip>Thank you, your submission is pending and will appear after validation.</InfoTooltip> :
                    null
                }
                <Header />
                <AppRouting />

            </AppContainer>
            <Footer />
        </>
    );
});
