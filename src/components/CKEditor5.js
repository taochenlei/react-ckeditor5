import React, { Component, useState, useEffect } from 'react';
import './CKEditor5.css';
import GRIFFITH_LOGO from './assets/Griffith Logo.png';
import LOCK_ICN from './assets/lock_icn.svg';
import UP_ARROW from './assets/up_arrow.svg';
import DOWN_ARROW from './assets/down_arrow.svg';
import xIcon from './assets/xIcon.svg';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@jesse541/ckeditor5-build-classic';

const CKeditor5 = (props) => {
    console.log('this is the props: ', props)
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

    useEffect(() => {
        console.log('useEffect from child ', state.isLoading, state.questions);
        setState({...state, questions:props.questionSet.questions, isLoading: false})
    }, [state.isLoading]);

    const clickCloseExampleAnswer = () => {
        setState({...state, showExamplerAnswer: false})
    };

    const saveAnswer = () => {
        const currentAnswer = state.currentData;
        if (currentAnswer) {
            const questions = state.questions;
            questions[state.currentQuestionId].my_responses.push(currentAnswer);
            setState({...state, questions})
        }
    }

    const clickShowExamplerAnswer = () => {
        const my_responses = state.questions[state.currentQuestionId].my_responses;
        if (my_responses) {
            setState({...state, showExamplerAnswer: true})
        } else {
            console.log('can not show exampler answer')
        }
    }

    const nextQuestionId = (way) => {
        const newID = way === 'up' ? state.currentQuestionId - 1 : state.currentQuestionId + 1;
        if (newID >= 0 && newID < state.questions.length) {
            setState((state) => ({...state, currentQuestionId: newID, currentData: '', showExamplerAnswer: false}))
            console.log(`current question id is ${defaultState.currentQuestionId}, new question id is ${newID}`)
        }
    }

    // const saveAndContinue = () => {
    //     const currentAnswer = state.currentData;
    //     console.log(currentAnswer);
    //     if (currentAnswer) {
    //         console.log('saveAnswering...')
    //         const questions = state.questions;
    //         questions[state.currentQuestionId].my_responses.push(currentAnswer);
    //         setState(state => ({...state, questions}))
    //     }
    //     const newID = state.currentQuestionId + 1;
    //     if (newID < state.questions.length) {
    //         setState(state => ({...state, currentQuestionId: newID, currentData: '', showExamplerAnswer: false}))
    //         console.log('nextQuestioning..., currentQuestionID is :', state.currentQuestionId)
    //     }
    // }

    const updateWrodCount = (stats) => {
        console.log(stats)
        const currentWords = stats.words;
        console.log('words: ', currentWords)
        setState(state => ({...state, currentWords}))
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

    // const numberOfQuestionWithResponse = () => {
    //     // var i;
    //     // for (i = 0; i < cars.length; i++) {
    //     // text += cars[i] + "<br>";
    //     // }

    //     const num = 0;
    //     var i;
    //     for (i = 0; i < state.questions.length; i++) {
    //         if (i / 2 === 0) {
    //             num = num + 1;
    //         }
    //     }
    //     return num;

    // }

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
                    <img src={xIcon} alt="xIcon" onClick={clickCloseExampleAnswer} />
                    <h1>Exemplar Answer</h1>
                    <p>{state.questions[state.currentQuestionId].example_content}</p>
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
                                    updateWrodCount(stats)
                                }
                            }
                        }}
                        data={state.currentData}
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

                <div className='gap'></div>

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
                            <p>{`10% completed (1/${state.questions.length})`}</p>
                            <div className='progress'>
                                <div className='progress-bar' role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
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
