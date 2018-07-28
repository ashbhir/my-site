import styled from 'styled-components';
import React from 'react';

const Icon = styled.a`
    width: 24px;
    height: 2px;
    background: #000;
    display: block;

    &::before {
        content: '';
        position: relative;
        top: 6px;
        width: inherit;
        height: inherit;
        display: inherit;
        background: inherit;
    }

    &::after {
        content: '';
        position: relative;
        top: 10px;
        width: inherit;
        height: inherit;
        display: inherit;
        background: inherit;
    }
`;

const Wrapper = styled.div`
    flex: 0.2;
    display: flex;
    justify-content: center;
    padding-top: 100px;
    cursor: pointer;
`;

const menuIcon = () => {
    return (
        <Wrapper><Icon/></Wrapper>
    );
}

export default menuIcon;