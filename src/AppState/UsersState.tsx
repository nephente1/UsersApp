import React from 'react';
import {observable, action, computed} from 'mobx';
import {RowData} from '../RowData';


interface Row {
    // itemID: number;
    id: number;
    first_name: string;
    last_name?: string;
    email?: string;
    avatar?: string;
}

export class UsersState {
    @observable inputTitle: string = '';
    @observable usersData: Array<Row> = [];
    @observable errors: Array<string> = [];
    @observable komunikat: string = '';
    @observable counter: number = 0;

    constructor() {
        //this.usersData = [];
        this.usersData = [
            {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},{"id":2,"email":"janet.weaver@reqres.in","first_name":"Janet","last_name":"Weaver","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},{"id":3,"email":"emma.wong@reqres.in","first_name":"Emma","last_name":"Wong","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},{"id":4,"email":"eve.holt@reqres.in","first_name":"Eve","last_name":"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},{"id":5,"email":"charles.morris@reqres.in","first_name":"Charles","last_name":"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},{"id":6,"email":"tracey.ramos@reqres.in","first_name":"Tracey","last_name":"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}]
        this.counter = this.usersData.length + 1;
    }

    @action handleClick = () => {
        this.errors = [];
        //const regex = /^s$|^m$|^l$|^\x+s$|^\x+l$/;
        const regex = '';
        const matchRegex = this.inputTitle.match(regex);

        //validation conditions
        if(this.inputTitle.length < 1){
            this.errors.push("Title should have at least 1 characters");
        };

        if(!matchRegex){
            this.errors.push("not match to regex");
        };
//&& matchRegex && this.usersData.map(el => el.name).includes(this.inputTitle) === false
        if(this.inputTitle.length > 1 ) {
            this.usersData.push({
                first_name: this.inputTitle,
                id: this.counter++
                // itemID: this.counter++
            });
            this.inputTitle = '';
        };

        if(this.inputTitle.length >= 1) {
            this.inputTitle = '';
        };
        return null;
    }

    handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) => {
        this.inputTitle = e.currentTarget.value;
    }


    @action handleDelete = (idToDelete: number ) => {
        const newList = this.usersData.filter((el) => el.id !== idToDelete );
        this.usersData = newList;
    }

    @computed get renderList() {
        //this.getData();
        const out = Array.from(this.usersData).map((el, i) => <RowData
            firstName={el.first_name}
            lastName={el.last_name}
            email={el.email}
            avatar={el.avatar}
            itemID={el.id}
            indexID={i}
            handleDelete={this.handleDelete}
            />
        )
        return out;
    }

    // renderError() {
    //     if(this.errors.length > 0) {
    //         return this.errors.map(
    //             (el, id) => <Errors message={el} key={id}/>
    //         );
    //     }
    // }

}