import styled from 'styled-components';
import { ChevronIcon } from '../assets/ChevronIcon';
import { ElementTitle } from '../RowData/RowData.styles';

export const FormPageContainer = styled('div')`
    margin: 108px 24px 40px 24px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`;

export const FormContainer = styled('div')`
    display: flex;
    flex-direction: column;
    width: 432px;
    min-height: 388px;
    padding: 0 20px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);
`;

export const FormHeader = styled('div')`
    margin: 24px 0 24px 0;
    color: rgba(0,0,0,0.87);
    font-size: 24px;
    display: flex;
    align-items: center;
    height: 28px;
    &:last-of-type{
        justify-content: flex-end;
        height: 36px;
    }
`;

export const InputsContainer = styled('div')`
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
`;

export const Button = styled('button')`
    border: 0px;
    padding: 10px 16px;
    border-radius: 4px;
    background-color: #E1E4E5;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);
    font-size: 14px;
    letter-spacing: 1.25px;
    cursor: pointer;
    border-radius: 6px;
    &:hover{
        background: #617D8B;
        opacity: 1;
    }
`;

export const CancelButton = styled(Button)`
    background: none;
    box-shadow: none;
    &:hover{
        background: none;
    }
`;

export const ChevronLeft = styled(ChevronIcon)`
    transform: rotate(90deg);
    height: 28px;
    width: 28px;
    padding: 7px;
    cursor: pointer;
    margin: 7px 10px 7px -7px;
`;

export const Input = styled('input')`
    height: 56px;
    width: 356px;
    border: 1px solid rgba(0,0,0,0.32);
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 0.15px;
    padding: 0 40px 0 16px;
`;

interface LabelPropsType {
    isFocused: boolean;
}

export const Label = styled.label<LabelPropsType>`
    color: #000;
    font-size: 12px;
    background: #fff;
    padding: 0 4px;
    position: absolute;
    left: 14px;
    top: -7px;
    display: ${props => props.isFocused ? 'block' : 'none'};
`;

export const InputContainer = styled('div')`
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 28px 24px 28px 52px;
    &:first-of-type {
        margin: 0px 24px 0px 52px;
    }
    &:last-of-type {
        margin: 0px 24px 0px 52px;
    }

    @media screen and (min-width: 768px){
        display: block;
    }
`;

export const IDTitle = styled(ElementTitle)`
    margin: -20px 0 15px 32px;
`;