import * as React from 'react';
import {observer} from "mobx-react";
import {ElementTitle, UsersTitle, Rows, LinkRow, Image, ImageWrapper} from './RowData.styles';

interface RowDataPropsType {
    firstName: string;
    lastName?: string;
    email?: string;
    avatar?: string;
    itemID: number;
    indexID: number;
}

export const RowData = observer((props: RowDataPropsType) => {

    return (
        <LinkRow to={`/user/${props.itemID}`}>
            <Rows>
                <div>
                    <ElementTitle>id: {props.itemID}</ElementTitle>
                    <UsersTitle>{props.firstName} {props.lastName}</UsersTitle>
                    <ElementTitle>{props.email}</ElementTitle>
                </div>
                <ImageWrapper>
                    <Image src={props.avatar} />
                </ImageWrapper>

            </Rows>
        </LinkRow>
    );
});