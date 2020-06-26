import styled from 'styled-components';

export const AppContainer = styled('div')`
    background-color: #EEF0F1;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    color: white;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);
`;

export const InfoTooltip = styled('div')`
    animation: FadeAnimation 0.3s ease-in 2s forwards;
    height: 48px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    background: #000;
    color: #fff;
    position: absolute;
    right: 0;
    left: 0;
    margin: auto;
    top: 68px;
    @keyframes FadeAnimation {
        0% {
          opacity: 1;
          visibility: visible;
        }

        100% {
          opacity: 0;
          visibility: hidden;
        }
      }
`;