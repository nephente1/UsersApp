import React from 'react';
import {observable, action, computed} from 'mobx';
import {RowData} from '../RowData';


interface Row {
    itemID: number;
    title: string;
}

export class UsersState {
    @observable inputTitle: string = '';
    @observable mainItems: Array<Row>;
    @observable errors: Array<string> = [];
    @observable komunikat: string = '';
    @observable counter: number = 0;

    constructor() {
        this.mainItems = [];
    }

    @action handleClick = () => {
        this.errors = [];
        const regex = /^s$|^m$|^l$|^\x+s$|^\x+l$/;
        const matchRegex = this.inputTitle.match(regex);

        //validation conditions
        if(this.inputTitle.length < 1){
            this.errors.push("Title should have at least 1 characters");
        };

        if(!matchRegex){
            this.errors.push("not match to regex");
        };

        if(this.inputTitle.length <= 2 && matchRegex && this.mainItems.map(el => el.title).includes(this.inputTitle) === false) {
            this.mainItems.push({
                title: this.inputTitle,
                itemID: this.counter++
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

    @computed get mainList() {
        return this.mainItems;
    }

    @action handleDelete = (idToDelete: number ) => {
        const newList = this.mainItems.filter((el) => el.itemID !== idToDelete );
        this.mainItems = newList;
    }

    @computed get renderList() {
        const out = Array.from(this.mainList).map((el, i) => <RowData rowTitle={el.title} itemID={el.itemID} indexID={i} handleDelete={this.handleDelete}/>)
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