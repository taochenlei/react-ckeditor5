import styled from 'styled-components';
import UP_ARROW from '../assets/up_arrow.svg';
import React from 'react';

const UP = styled.button`
    width: 20px;
    height: 20px;
    border: none;
    background: url(${UP_ARROW});
    background-repeat: no-repeat;
    background-size: 18px;
    background-position: center;
`;

class UpArrow extends React.Component {
    render() {
        return <UP />;
    }
}
export default UpArrow;
