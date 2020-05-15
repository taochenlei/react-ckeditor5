import styled from 'styled-components';
import UP_ARROW from '../assets/up_arrow.svg';
import React from 'react';

const UP = styled.img`
    vertical-align: middle;
    width: 30px;
    height: 30px;
    cursor: pointer;
    background: url(${UP_ARROW});
    alt="Up Arrow"
`;

class UpArrow extends React.Component {
    render() {
        return <UP />;
    }
}
export default UpArrow;


// background-repeat: no-repeat;
// background-size: 18px;
// background-position: center;