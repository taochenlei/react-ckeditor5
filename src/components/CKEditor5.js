import React, { Component } from 'react';
import * as data from './db.json';
import './CKEditor5.css';
import GRIFFITH_LOGO from './assets/Griffith Logo.png';
import LOCK_ICN from './assets/lock_icn.svg';
import UP_ARROW from './assets/up_arrow.svg';
import DOWN_ARROW from './assets/down_arrow.svg';
import xIcon from './assets/xIcon.svg';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@jesse541/ckeditor5-build-classic';

class CKeditor5 extends Component {
    state = {
        questions: data.questions, 
        currentQuestionId: 0,
        currentData: null,
        words: 0,
        showLockBar: false,
        showExamplerAnswer: false
    };

    nextQuestionId = (way) => {
        const newID = way === 'up' ? this.state.currentQuestionId - 1 : this.state.currentQuestionId + 1;
        if (newID >= 0 && newID < this.state.questions.length) {
            this.setState({
                currentQuestionId: newID,
                currentData: '',
                showExamplerAnswer: false
            })
        }
    }
    
    saveAnswer = () => {
        const currentAnswer = this.state.currentData;
        if (currentAnswer) {
            const questions = this.state.questions;
            questions[this.state.currentQuestionId].answer = currentAnswer;
            this.setState({
                questions,     
            });
        } else {
            console.log(`failed. ${currentAnswer}`);
        }
    }
    clickCloseExampleAnswer = () => {
        this.setState({showExamplerAnswer: false})
    }
    clickShowExamplerAnswer = () => {
        const answer = this.state.questions[this.state.currentQuestionId].answer;
        // const examplerAnswer = this.state.questions[this.state.currentQuestionId]["example-answer"];
        if (answer) {
            this.setState({showExamplerAnswer: true})
        } else {
            console.log('can not show exampler answer')
        }
    }

    render() {
        console.log(this.state);

        const examplerAnswer = this.state.questions[this.state.currentQuestionId]["example-answer"];
        const answer = this.state.questions[this.state.currentQuestionId].answer;
        const examplerAnswerStyle = {
            display: this.state.showExamplerAnswer ? 'flex' : 'none'
        }
        const ckeditorStyle = {
            display: this.state.showExamplerAnswer ? 'none' : 'block'
        }
        const lockBarStyle = {
            display: (examplerAnswer && !this.state.showExamplerAnswer) ? 'block' : 'none',
            cursor: answer ? 'pointer' : 'auto'
        };

        return (
            <div className='multiQuestionsView'>
                <div className='questionHeader'>
                    <div className='codeOfConduct'>
                        <h1>Code of Conduct Activities</h1>
                        <p>Questions for you on the code of conduct</p>
                    </div>
                    <div className='griffithLogo'>
                        <img src={GRIFFITH_LOGO} alt="Griffith Logo" />
                    </div>
                </div>
                <div className='questionSection'>
                    <div className='questions'>
                        <h1>{this.state.questions[this.state.currentQuestionId].title}</h1>
                        <p>{this.state.questions[this.state.currentQuestionId].content}</p>
                    </div>
                    <div className='examplerAnswer' style={examplerAnswerStyle}>
                        <img src={xIcon} alt="xIcon" onClick={this.clickCloseExampleAnswer} />
                        <h1>Exemplar Answer</h1>
                        <p>{this.state.questions[this.state.currentQuestionId]["example-answer"]}</p>
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
                                        this.setState({words: stats.words})
                                    }
                                }
                            }}
                            data={this.state.currentData}
                            // onInit={ editor => {
                            //     // You can store the "editor" and use when it is needed.
                            //     console.log( 'Editor is ready to use!', editor );
                            // } }
                            // onChange={ ( event, editor ) => {
                            //     this.setState({currentData: editor.getData()});
                            //     // const data = editor.getData();
                            //     // console.log( { event, editor, data } );
                            // } }
                            onBlur={ ( event, editor ) => {
                                this.setState({currentData: editor.getData()});
                            } }
                            // onFocus={ ( event, editor ) => {
                            //     console.log( 'Focus.', editor );
                            // } }
                        />
                        <p id='wordCount'>{`${this.state.words} words`}</p>
                    </div>
                    <div className='gap'></div>
                    <div className='lockBar' style={lockBarStyle} onClick={this.clickShowExamplerAnswer} >
                        <div className='lock'>
                            <img src={LOCK_ICN} alt="Lock Icon" />
                            <p>After you have answered the question please view this exemplar answer</p>
                        </div>
                    </div>
                </div>

                <div className='footer'>
                    <div className='progressBar'>
                        <div className='progressBar1'>
                            <img src={UP_ARROW} alt="Up Arrow" onClick={() => this.nextQuestionId('up')} />
                            <img src={DOWN_ARROW} alt="Down Arrow" onClick={() => this.nextQuestionId('down')} />
                        </div>

                        <div className='progressBar2'>
                            <p>20% completed (1/5)</p>
                            <div className='progress'>
                                <div className='progress-bar' role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>

                        <div className='progressBar3'>
                            <button className='returnButton' onClick={this.saveAnswer} >
                                <p>Save</p>
                            </button>
                        </div>
                    </div>
                </div>
            
            </div>
        );
    }
}

export default CKeditor5;

