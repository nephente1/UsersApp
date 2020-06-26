import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkRow = styled(Link)`
    text-decoration: none;
`;

export const Rows = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 19px 12px 16px;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 6px;
    margin: 0 0 16px 0;
    &:hover {
        background: #fafafa;
    }
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