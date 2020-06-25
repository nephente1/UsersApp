import * as React from 'react';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';

interface PropsType {
    className?: string;
    onClick?: () => void;
}

const SvgElement = styled('svg')<PropsType>`
    height: auto;
`;

export const ChevronIcon = observer(({ className, onClick }: PropsType): JSX.Element => {
    return(
        <SvgElement fill="#000" onClick={ onClick } className={ className } xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32" >
        <path fill="#fill" fillRule="evenodd" d="M30.06 6L32 8.07 16 25.2 0 8.07 1.93 6 16 21.05z"/>
        </SvgElement>
    );

});