import React from 'react';
import {observable, action, computed} from 'mobx';


interface Row {
    id: number;
    first_name: string;
    last_name?: string;
    email?: string;
    avatar?: string;
}

export class DataState {
    @observable usersDatas: Array<Row> = [];


    constructor() {
    }

    @action async getData() {
        const response = await fetch('https://reqres.in/api/users');
        const respJson = await response.json();
        this.usersDatas = respJson.data;
    }

    @computed get usersData() {
        return this.usersDatas;
    }
}