import React, { useState, useEffect } from 'react';


import './CKEditor5.css';
import GRIFFITH_LOGO from './assets/Griffith Logo.png';
import LOCK_ICN from './assets/lock_icn.svg';
import UP_ARROW from './assets/up_arrow.svg';
import DOWN_ARROW from './assets/down_arrow.svg';
import xIcon from './assets/xIcon.svg';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@jesse541/ckeditor5-build-classic';

// const QuestionSetHeader = styled.div`
//     ${shadow};
//     ${zIndex4};
//     font-family: ${(props) => props.theme.font.family.foundrySterling};
//     color: #ffffff;
//     font-weight: 700;
//     padding: 10px;
//     border-radius: 0 0 3px 3px;
//     background: ${(props) => props.theme.color.red};
// `;

const CKeditor5 = (props) => {
    const defaultState = {
        questions: [], 
        currentQuestionId: 0,
        currentData: null,
        currentWords: 0,
        showLockBar: false,
        showExamplerAnswer: false,
        isLoading: true
    }
    const [state, setState] = useState(defaultState);

    const getNumberOfAnsweredQuestion = (questions) => {
        var numberOfAnsweredQuestion = 0;
        for (var i = 0; i < questions.length; i++) {
            if (questions[i].my_responses[0]) {
                numberOfAnsweredQuestion += 1
            }
        }
        return numberOfAnsweredQuestion
    }

    useEffect(() => {
        setState({
            ...state, 
            questions: props.questionSet.questions, 
            isLoading: false,
            numberOfAnsweredQuestion: getNumberOfAnsweredQuestion(state.questions)
        })
    }, [state.isLoading]);

    const clickCloseExampleAnswer = () => {
        setState({...state, showExamplerAnswer: false})
    };

    const saveAnswer = () => {
        // to do: will need to update later after Mick finished post api
        const currentAnswer = state.currentData;
        if (currentAnswer) {
            const questions = state.questions;
            const answer = {answer: currentAnswer}
            questions[state.currentQuestionId].my_responses.unshift(answer);
            // setState({...state, questions})
            setState({...state, numberOfAnsweredQuestion: getNumberOfAnsweredQuestion(state.questions)})
        }
    }

    const clickShowExamplerAnswer = () => {
        const my_responses = state.questions[state.currentQuestionId].my_responses;
        if (my_responses) {
            setState({...state, showExamplerAnswer: true})
        }
    }

    const nextQuestionId = (way) => {
        setState((state) => ({...state, currentData: null}))
        const newID = way === 'up' ? state.currentQuestionId - 1 : state.currentQuestionId + 1;
        if (newID >= 0 && newID < state.questions.length) {
            setState((state) => ({...state, currentQuestionId: newID, currentData: null, showExamplerAnswer: false}))
        }
    }

    console.log('this is state: ', state);

    if (state.isLoading || state.isLoading === undefined) {
        console.log('Loading Child page', state.isLoading )
        return(<p>This page is loading...</p>)
    }
    
    const examplerAnswerStyle = {
        display: state.showExamplerAnswer ? 'flex' : 'none'
    };

    const ckeditorStyle = {
        display: state.showExamplerAnswer ? 'none' : 'block'
    }

    const examplerAnswer = state.questions[state.currentQuestionId].example_content;
    const my_responses = state.questions[state.currentQuestionId].my_responses;
    const lockBarStyle = {
        display: (examplerAnswer && !state.showExamplerAnswer) ? 'block' : 'none',
        cursor: my_responses ? 'pointer' : 'auto'
    };
    const gapStyle = {
        display: (!state.showExamplerAnswer) ? 'block' : 'none',
    };
    const completePercent = parseInt(state.numberOfAnsweredQuestion / state.questions.length * 100)
    const myBarStyle = {
        width: `${completePercent}%`
    }

    return (
        <div className='multiQuestionsView'>

            <div className='questionHeader'>
                <div className='codeOfConduct'>
                    <h1>{props.questionSet.title}</h1>
                    <p>{props.questionSet.description}</p>
                </div>

                <div className='griffithLogo'>
                    <img src={GRIFFITH_LOGO} alt="Griffith Logo" />
                </div>
            </div>

            <div className='questionSection'>
                <div className='questions'>
                    <h1>{state.questions[state.currentQuestionId].title}</h1>
                    <p>{state.questions[state.currentQuestionId].question_text}</p>
                </div>

                <div className='examplerAnswer' style={examplerAnswerStyle}>
                    <div id='animation' >
                        <img src={xIcon} alt="xIcon" onClick={clickCloseExampleAnswer} />
                        <h1>Exemplar Answer</h1>
                        <p>{state.questions[state.currentQuestionId].example_content}</p>
                    </div>
                </div>

                <div className='ckeditor' style={ckeditorStyle}>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={{
                            toolbar: [ 'heading', 'alignment:left', 'alignment:justify', 'alignment:right', '|', 'bold', 'underline', 'italic', '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ],
                            heading: {
                                options: [
                                    { model: 'heading2', view: 'h2', title: 'Heading', class: 'ck-heading_heading2' },
                                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }
                                ]
                            },
                            placeholder: "Enter your response here",
                            wordCount: {
                                onUpdate: stats => {
                                    setState(state => ({...state, currentWords: stats.words}))
                                }
                            }
                        }}
                        data={
                            state.questions[state.currentQuestionId].my_responses[0] ? 
                            state.questions[state.currentQuestionId].my_responses[0].answer :
                            (state.currentData ? state.currentData : '') 
                        }
                        onInit={ editor => {

                        } }
                        onChange={ ( event, editor ) => {
                            
                        } }
                        onBlur={ ( event, editor ) => {
                            setState({...state, currentData: editor.getData()});
                        } }
                        onFocus={ ( event, editor ) => {
    
                        } }
                    />
                    <button className='saveButton' onClick={saveAnswer} >
                        <p>Save</p>
                    </button>
                    <p id='wordCount'>{`${state.currentWords} words`}</p>
                </div>

                <div className='gap' style={gapStyle} ></div>

                <div className='lockBar' style={lockBarStyle} onClick={clickShowExamplerAnswer} >
                    <div className='lock'>
                        <img src={LOCK_ICN} alt="Lock Icon" />
                        <p>After you have answered the question please view this exemplar answer</p>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <div className='progressBar'>
                    <div className='progressBar1'>
                        <img src={UP_ARROW} alt="Up Arrow" onClick={() => nextQuestionId('up')} />
                        <img src={DOWN_ARROW} alt="Down Arrow" onClick={() => nextQuestionId('down')} />
                    </div>

                    <div className='progressBar2'>
                        <p>{`${completePercent}% completed (${state.numberOfAnsweredQuestion}/${state.questions.length})`}</p>
                        <div id="myProgress">
                            <div id="myBar" style={myBarStyle}></div>
                        </div>
                    </div>

                    <div className='progressBar3'>
                        <button className='saveContinueButton' onClick={() => nextQuestionId('down')} >
                            <p>Next</p>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default CKeditor5;
