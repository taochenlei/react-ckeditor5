import styled from 'styled-components';

export const QuestionHeaderStyle = styled.div`
    height: 107px;
    background: #c02424 0% 0% no-repeat padding-box;
    display: flex;
    > div {
        align-self: center;
    }
`;

export const QuestionHeaderTitle = styled.div`
    margin: auto;
    width: 550px;
    height: 80%;
    h1 {
        font-family: 'Jotia', Arial, serif;
        font: Bold 32px/38px;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1; 
    }
    p {
        font-family: 'Roboto', Arial, serif;
        font: Regular 16px/21px;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
`;

export const GriffithLogo = styled.div`
    margin-right: 32px;
`;
