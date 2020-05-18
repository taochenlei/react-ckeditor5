import React, { useState, useEffect } from 'react';

// import detail components
import QuestionHeader from './CKEditor5QuestionHeader';
import QuestionSection from './CKEditor5QuestionSection';
import QuestionFooter from './CKEditor5QuestionFooter';

const CKeditor5 = (props) => {
    const defaultState = {
        questions: [], 
        currentQuestionId: 0,
        currentData: null,
        currentWords: 0,
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

    const updateWordCount = (words) => {
        setState(state => ({...state, currentWords: words}))
    }

    const getCurrentData = (data) => {
        setState({...state, currentData: data});
    }

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
        const my_response = state.questions[state.currentQuestionId].my_responses[0];
        if (my_response) {
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

    return (
        <div>
            <QuestionHeader questionSet={props.questionSet}/>
            <QuestionSection 
                parentState={state}
                parentClickCloseExampleAnswer={clickCloseExampleAnswer}
                parentUpdateWordCount={updateWordCount}
                parentGetCurrentData={getCurrentData}
                parentSaveAnswer={saveAnswer}
                parentClickShowExamplerAnswer={clickShowExamplerAnswer}
            />
            <QuestionFooter 
                parentState={state}
                parentNextQuestionId={nextQuestionId}
            />
        </div>
    );
}

export default CKeditor5;
