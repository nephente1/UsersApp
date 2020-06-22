import * as React from 'react';
import { UsersState } from './UsersState';


export class AppState {
    readonly usersState: UsersState;

    constructor(){
        this.usersState = new UsersState();
    }

    static createForContext(): AppState {
        return new AppState();
    }
}

const AppContext = React.createContext(AppState.createForContext());
export const Provider = AppContext.Provider;

export const useAppStateContext = (): AppState => {
    return React.useContext(AppContext);
};