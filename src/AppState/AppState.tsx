import * as React from 'react';
import { UsersState } from './UsersState';
import { DataState } from './DataState';


export class AppState {
    readonly usersState: UsersState;
    readonly dataState: DataState;

    constructor(){
        this.usersState = new UsersState();
        this.dataState = new DataState();
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