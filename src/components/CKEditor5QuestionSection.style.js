import styled from 'styled-components';

export const QuestionSectionStyle = styled.div`
    display: flex;
    min-height: 833px;
    flex-direction: column;
    align-items: center;
    > * {width: 720px;}
`;

export const Question = styled.div`
    margin-top: 170px;
    h1 {
        font-family: 'Jotia', Arial, serif;
        font: Bold 24px/29px;
        letter-spacing: 0px;
        color: #292929;
        opacity: 0.8;
    }
    p {
        font-family: 'Roboto', Arial, serif;
        font: Regular 16px/21px;
        letter-spacing: 0px;
        color: #292929;
        opacity: 0.8;
    }
`;

export const ExamplerAnswer = styled.div`
    min-height: 514.7px;
    flex-grow: 1;
    width: 100%;
    position: relative;
    display: ${(props) => props.parentState.showExamplerAnswer ? 'flex' : 'none'};
    > * > *{
        width: 720px;
    }
    #animation {
        background: #F1F1F1;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: 0px;
        animation: mymove;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
    }
    @keyframes mymove {
        from {height: 0px;}
        to {height: 100%;}
    }
    img[alt="xIcon"] {
        width: 14px;
        height: 14px;
        position: absolute;
        margin-top: 24px;
        right: 24px;
        cursor: pointer;
    }
    #animation h1 {
        margin-top: 40px;
        font: Bold 20px/26px Roboto;
        letter-spacing: 0px;
        color: #292929;
        opacity: 0.8;
    }
    #animation p {
        font: Regular 16px/24px Roboto;
        letter-spacing: 0px;
        color: #292929;
        opacity: 0.8;
    }
`;

export const CKEditorStyle = styled.div`
    display: ${(props) => props.parentState.showExamplerAnswer ? 'none' : 'block'};
    .ck-editor__editable_inline {
        height: 260px;
        background: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 5px 20px #00000033;
        opacity: 1;
    }
    .ck.ck-editor__editable > .ck-placeholder::before {
        text-align: left;
        font-family: 'Roboto', Arial, serif;
        font: italic 16px/21px;
        letter-spacing: 0px;
        color: #737D8B;
        opacity: 1; 
    }
    .saveButton {
        margin-top: 16px;
        width: 206px;
        height: 40px;
        background: #c02424 0% 0% no-repeat padding-box;
        opacity: 1;
        border: 0px;
        padding: 0px;
        cursor: pointer;
        float: right;
    }
    .saveButton p {
        display: inline;
        text-align: center;
        font: Regular 14px/19px Roboto;
        letter-spacing: 0px;
        color: #FFFFFF;
        opacity: 1;
    }
    #wordCount {
        position: relative;
        bottom: 290px;
        left: 600px;
        width: 120px;
        height: 24px;
        text-align: center;
        border: none;
    }
`;

export const Gap = styled.div`
    flex-grow: 1;
    min-height: 100px;
    display: ${(props) => props.parentState.showExamplerAnswer ? 'none' : 'block'}
`;

export const LockBar = styled.div`
    background: #E7E7E7;
    height: 60px;
    width: 100%;
    display: ${(props) => props.blockLockBar ? 'block' : 'none'};
    cursor: ${(props) => props.my_response ? 'pointer' : 'auto'};
`;

export const Lock = styled.div`
    margin: auto;
    width: 600px;
    height: 60px;
    img {
        position: relative;
        width: 30px;
        height: 30px;
        top: 17px;
        opacity: 0.5;
    }
    p {
        position: relative;
        margin-left: 16px;
        display: inline;
        top: 20px;
        font-family: 'Roboto', Arial, serif;
        font: Regular 16px/21px;
        letter-spacing: 0px;
        color: #292929;
        opacity: 0.5;
    }
`;
