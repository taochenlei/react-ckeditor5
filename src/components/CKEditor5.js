import React, { Component } from 'react';
import * as data from './db.json';
import './CKEditor5.css';
import GRIFFITH_LOGO from './assets/Griffith Logo.png';
import LOCK_ICN from './assets/lock_icn.svg';
import UP_ARROW from './assets/up_arrow.svg';
import DOWN_ARROW from './assets/down_arrow.svg';
import RETURN_ICN from './assets/return_icn.svg';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@jesse541/ckeditor5-build-classic';

class CKeditor5 extends Component {

    previousQuestionId = () => {
        const newID = this.state.currentQuestionId - 1
        if (newID >= 0 && newID < this.state.questions.length) {
            this.setState({currentQuestionId: newID}, () => {console.log(this.state)})
        }
    }
    nextQuestionId = () => {
        const newID = this.state.currentQuestionId + 1
        if (newID >= 0 && newID < this.state.questions.length) {
            this.setState({currentQuestionId: newID}, () => {console.log(this.state)})
        }
    }

    state = { questions: data.questions, currentQuestionId: 0};
    render() {
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
                        <CKEditor
                            editor={ ClassicEditor }
                            config={{
                                toolbar: [ 'heading', 'alignment:justify', 'alignment:left', 'alignment:right', '|', 'bold', 'underline', 'italic', '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ],
                                heading: {
                                    options: [
                                        { model: 'heading2', view: 'h2', title: 'Heading', class: 'ck-heading_heading2' },
                                        { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }
                                    ]
                                },
                                placeholder: "Enter your response here",
                                wordCount: {
                                    onUpdate: stats => {
                                        // Prints the current content statistics.
                                        console.log( `Characters: ${ stats.characters }\nWords: ${ stats.words }` );
                                    }
                                }
                            }}
                            // data="<p>Hello from CKEditor 5!</p>"
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                console.log( 'Editor is ready to use!', editor );
                            } }
                            onChange={ ( event, editor ) => {
                                const data = editor.getData();
                                console.log( { event, editor, data } );
                            } }
                            onBlur={ ( event, editor ) => {
                                console.log( 'Blur.', editor );
                            } }
                            onFocus={ ( event, editor ) => {
                                console.log( 'Focus.', editor );
                            } }
                        />
                    </div>
                </div>
                <div className='questionFooter1'>
                    <div className='lock'>
                        <img src={LOCK_ICN} alt="Lock Icon" />
                        <p>After you have answered the question please view this exemplar answer</p>
                    </div>
                </div>
                <div className='questionFooter2'>
                    <div className='progressBarContainer'>
                        <div className='progressBar'>
                            <div className='progressBar1'>
                                <img src={UP_ARROW} alt="Up Arrow" onClick={this.previousQuestionId} />
                                <img src={DOWN_ARROW} alt="Down Arrow" onClick={this.nextQuestionId} />
                            </div>

                            <div className='progressBar2'>
                                <p>20% completed (1/5)</p>
                                <div className='progress'>
                                    <div className='progress-bar' role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            <div className='progressBar3'>
                                <button className='returnButton'>
                                    <p>Save & Continue</p>
                                    <div className='returnIcon'>
                                        <p>Shift +</p>
                                        <img src={RETURN_ICN} alt="Return Icon" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CKeditor5;

