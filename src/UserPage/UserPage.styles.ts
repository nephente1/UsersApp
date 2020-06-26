import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Rows } from '../RowData/RowData.styles';

export const ElementTitle = styled('div')`
    color: rgba(0,0,0,0.6);
    font-size: 14px;
    margin-bottom: 4px;
    line-height: 20px;
    letter-spacing: 0.25px;
    &:last-of-type {
        margin-bottom: 4px;
        margin-top: 8px;
    }
`;

export const UserPageRow = styled(Rows)`
    background: #fafafa;
    color: rgba(0,0,0,0.6);
`;

export const UserPageContainer = styled('div')`
    height: 100vh;
    background: #fff;
    color: white;
    position: absolute;
    padding: 0 20px;
    display: block;
    top: 0;
    left: 0;
    right: 0;
`;

export const LinkRow = styled(Link)`
    text-decoration: none;
`;

export const ImageWrapper = styled('div')`
    height: 83px;
    overflow: hidden;
    width: 103px;
`;

export const Image = styled('img')`
    width: 100%;
    max-width: 103px;
`;

export const UsersTitle = styled('h3')`
    font-size: 24px;
    color: rgba(0,0,0,0.87);
    font-weight: 400;
`;