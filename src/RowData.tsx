import * as React from 'react';
import {observer} from "mobx-react";
import {ElementTitle, Rows, DeleteButton} from './App.styles';
import { useAppStateContext } from './AppState/AppState';
import { Link } from 'react-router-dom';

interface RowDataPropsType {
    firstName: string;
    lastName?: string;
    email?: string;
    avatar?: string;
    itemID: number;
    indexID: number;
    handleDelete:(id: number) => void;
}

export const RowData = observer((props: RowDataPropsType) => {

    const onHandleDelete = () => {
        const {itemID, handleDelete } = props;
        handleDelete(itemID)
    }

    return (
        <Rows>
            <ElementTitle>{props.firstName}</ElementTitle>
            <ElementTitle>
            <Link to={`/user/${props.itemID}`}>{props.firstName}</Link>
            </ElementTitle>
            <DeleteButton onClick={onHandleDelete}>Delete</DeleteButton>
        </Rows>
    );
});