import React from 'react';
import {
    QuestionSectionStyle,
    Question,
    ExamplerAnswer,
    CKEditorStyle,
    Gap,
    LockBar,
    Lock
} from './CKEditor5QuestionSection.style';
import LOCK_ICN from './assets/lock_icn.svg';
import xIcon from './assets/xIcon.svg';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@jesse541/ckeditor5-build-classic';


const QuestionSection = ({
    parentState, 
    parentClickShowExamplerAnswer, 
    parentUpdateWordCount,
    parentGetCurrentData,
    parentSaveAnswer,
    parentClickCloseExampleAnswer}) => {

    console.log('this is parentState', parentState)

    const examplerAnswer = parentState.questions[parentState.currentQuestionId].example_content;
    const blockLockBar = examplerAnswer && !parentState.showExamplerAnswer
    const my_response = parentState.questions[parentState.currentQuestionId].my_responses[0];

    return (
        <QuestionSectionStyle>
            <Question>
                <h1>{parentState.questions[parentState.currentQuestionId].title}</h1>
                <p>{parentState.questions[parentState.currentQuestionId].question_text}</p>
            </Question>

            <ExamplerAnswer parentState={parentState} >
                <div id='animation' >
                    <img src={xIcon} alt="xIcon" onClick={parentClickCloseExampleAnswer} />
                    <h1>Exemplar Answer</h1>
                    <p>{parentState.questions[parentState.currentQuestionId].example_content}</p>
                </div>
            </ExamplerAnswer>

            <CKEditorStyle parentState={parentState} >
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
                                const words=stats.words;
                                parentUpdateWordCount(words);
                            }
                        }
                    }}
                    data={
                        parentState.questions[parentState.currentQuestionId].my_responses[0] ? 
                        parentState.questions[parentState.currentQuestionId].my_responses[0].answer :
                        (parentState.currentData ? parentState.currentData : '') 
                    }
                    onInit={ editor => {

                    } }
                    onChange={ ( event, editor ) => {
                        
                    } }
                    onBlur={ ( event, editor ) => {
                        const data = editor.getData();
                        parentGetCurrentData(data);
                    } }
                    onFocus={ ( event, editor ) => {

                    } }
                />
                <button className='saveButton' onClick={parentSaveAnswer} >
                    <p>Save</p>
                </button>
                <p id='wordCount'>{`${parentState.currentWords} words`}</p>
            </CKEditorStyle>

            <Gap parentState={parentState} />

            <LockBar blockLockBar={blockLockBar} my_response={my_response} onClick={parentClickShowExamplerAnswer} >
                <Lock>
                    <img src={LOCK_ICN} alt="Lock Icon" />
                    <p>After you have answered the question please view this exemplar answer</p>
                </Lock>
            </LockBar>
        </QuestionSectionStyle>

    );
}

export default QuestionSection;
