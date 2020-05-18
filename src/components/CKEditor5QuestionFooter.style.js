import styled from 'styled-components';

export const QuestionFooterStyle = styled.div`
    height: 80px;
    background: #292929 0% 0% no-repeat padding-box;
    width: 100%;
    height: 80px;
`;

export const ProgressBar = styled.div`
    margin: 0 auto;
    width: 720px;
    height: 100%;
    display: flex;
`;

export const ProgressBar1 = styled.div`
    width: 62px;
    line-height: 80px;
    img[alt="Up Arrow"] {
        vertical-align: middle;
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
    img[alt="Down Arrow"] {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
`;

export const ProgressBar2 = styled.div`
    margin-left: 170px;
    width: 200px;
    p{
        text-align: left;
        font-family: 'Roboto', Arial, serif;
        font: Medium 11px/15px;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
        margin-top: 20px;
        margin-bottom: 0px;
    }
    #myProgress {
        width: 100%;
        background-color: rgba(255,255,255,.19);
    } 
    #myBar {
        height: 3px;
        background-color: #FFFFFF;
        width: ${(props) => props.completePercent}%;
    }
`;

export const ProgressBar3 = styled.div`
    margin-left: 83px;
    .saveContinueButton {
        margin-top: 16px;
        width: 206px;
        height: 40px;
        background: #c02424 0% 0% no-repeat padding-box;
        opacity: 1;
        border: 0px;
        padding: 0px;
        cursor: pointer;
    }
    .saveContinueButton p {
        display: inline;
        text-align: center;
        font: Regular 14px/19px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
`;
