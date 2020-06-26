import React from 'react';
import { observer } from 'mobx-react-lite';

import { HeaderContainer, HeaderWrapper,
    UsersAppTitle, UsersLogoWrapper } from './Header.styles';

export const Header = observer(() => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <UsersLogoWrapper />
                <UsersAppTitle>Users app</UsersAppTitle>
            </HeaderContainer>
        </HeaderWrapper>
    );
});