import React from 'react';
import {
    QuestionHeaderStyle,
    QuestionHeaderTitle,
    GriffithLogo
} from './CKEditor5QuestionHeader.style';
import GRIFFITH_LOGO from './assets/Griffith Logo.png';

const QuestionHeader = (props) => {
    console.log('this is props', props)
    return (
        <QuestionHeaderStyle>
            <QuestionHeaderTitle>
                <h1>{props.questionSet.title}</h1>
                <p>{props.questionSet.description}</p>
            </QuestionHeaderTitle>

            <GriffithLogo>
                <img src={GRIFFITH_LOGO} alt="Griffith Logo" />
            </GriffithLogo>
        </QuestionHeaderStyle>
    );
}

export default QuestionHeader;
