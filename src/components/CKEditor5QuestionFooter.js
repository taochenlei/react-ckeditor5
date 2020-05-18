import React from 'react';
import {
    QuestionFooterStyle,
    ProgressBar,
    ProgressBar1,
    ProgressBar2,
    ProgressBar3
} from './CKEditor5QuestionFooter.style';
import UP_ARROW from './assets/up_arrow.svg';
import DOWN_ARROW from './assets/down_arrow.svg';

const QuestionFooter = ({parentState, parentNextQuestionId}) => {
    console.log('this is parentState', parentState)

    const completePercent = parseInt(parentState.numberOfAnsweredQuestion / parentState.questions.length * 100)

    return (
        <QuestionFooterStyle>
            <ProgressBar>
                <ProgressBar1>
                    <img src={UP_ARROW} alt="Up Arrow" onClick={() => parentNextQuestionId('up')} />
                    <img src={DOWN_ARROW} alt="Down Arrow" onClick={() => parentNextQuestionId('down')} />
                </ProgressBar1>

                <ProgressBar2 completePercent={completePercent}>
                    <p>{`${completePercent}% completed (${parentState.numberOfAnsweredQuestion}/${parentState.questions.length})`}</p>
                    <div id="myProgress">
                        {/* <div id="myBar" style={myBarStyle}></div> */}
                        <div id="myBar"></div>
                    </div>
                </ProgressBar2>

                <ProgressBar3>
                    <button className='saveContinueButton' onClick={() => parentNextQuestionId('down')} >
                        <p>Next</p>
                    </button>
                </ProgressBar3>
            </ProgressBar>
        </QuestionFooterStyle>
    );
}

export default QuestionFooter;
