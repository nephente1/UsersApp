import React from 'react';
import {observable, action, computed} from 'mobx';
import { RowData } from '../RowData/RowData';

interface Row {
    id: number;
    first_name: string;
    last_name?: string;
    email?: string;
    avatar?: string;
}

export class UsersState {
    @observable name: string = '';
    @observable surname: string = '';
    @observable email: string = '';
    @observable usersData: Array<Row> = [];
    @observable passData: boolean = false;
    @observable counter: number = 0;
    @observable renderTooltip = false;

    //constructor() {}

    @action async getData() {
        try {
            const response = await fetch('https://reqres.in/api/users');
            const respJson = await response.json();
            this.usersData = respJson.data;
        }
        catch(err){
            console.log('failed fetch')
        }

    }

    @action postData() {
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.counter++,
                first_name: this.name,
                surname: this.surname,
                email: this.email
            })
        })
        .then(res => res.json())
        .then(data => console.log('posted data', data))
        .catch(err => console.log(err));
    }

    @action handleClick = () => {
        this.postData();
        this.renderTooltip = true;
        if ( this.name.length > 1 || this.surname.length > 0 || this.email.length > 0 ) {
            this.passData = true;
            this.name = '';
            this.surname = '';
            this.email = '';
        }
    }

    @action handleCancel = () => {
        this.name = '';
        this.surname = '';
        this.email = '';
    }

    handleChangeName = (e: React.FormEvent<HTMLInputElement>) => {
        this.name = e.currentTarget.value;
    }
    handleChangeSurname = (e: React.FormEvent<HTMLInputElement>) => {
        this.surname = e.currentTarget.value;
    }
    handleChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
        this.email = e.currentTarget.value;
    }

    @computed get renderList() {
        const out = Array.from(this.usersData).map((el, i) => <RowData
            key={i}
            firstName={el.first_name}
            lastName={el.last_name}
            email={el.email}
            avatar={el.avatar}
            itemID={el.id}
            indexID={i}
            />
        )
        return out;
    }

}