import React, { Component } from 'react';
import './app.css';
import GRIFFITH_LOGO from './assets/Griffith Logo.png';
import LOCK_ICN from './assets/lock_icn.svg';
import UP_ARROW from './assets/up_arrow.svg';
import DOWN_ARROW from './assets/down_arrow.svg';
import RETURN_ICN from './assets/return_icn.svg';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';



// import CKEditor from '@ckeditor/ckeditor5-react';

// import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';




// import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
// import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
// import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import Indent from '@ckeditor/ckeditor5-indent/src/indent';
// import Link from '@ckeditor/ckeditor5-link/src/link';
// import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
// import Table from '@ckeditor/ckeditor5-table/src/table';
// import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
// import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

// import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';     // <--- ADDED


class App extends Component {
    render() {
        return (
            <div class="container-lg">
                <div class="row questionHeader">
                    <div class="col-11 codeOfConduct">
                        <h1>Code of Conduct Activities</h1>
                        <p>Questions for you on the code of conduct</p>
                    </div>
                    <div class="col-1 logo">
                        <img src={GRIFFITH_LOGO} alt="Griffith Logo" />
                    </div>
                </div>
                <div className="mx-auto question">
                    <h1>2.2 Summary of Disciplinary Decisions</h1>
                    <p>Choose one or two of the OMARA disciplinary decisions against registered agents that are published on the OMARA website and summarise the decisions including: <br />
                    - The ground for the disciplinary sanction <br />
                    - The disciplinary sanction imposed by OMARA <br />
                    - Relevant legislative (Act and Code) provisions</p>
                    <CKEditor
                        editor={ ClassicEditor }
                        config={{
                            toolbar: [ 'heading', '|', 'italic', 'bold', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ],
                            heading: {
                                options: [
                                    { model: 'heading2', view: 'h2', title: 'Heading', class: 'ck-heading_heading2' },
                                    { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' }
                                ]
                            },
                            placeholder: "Enter your response here"
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

                <div className='row questionFotter'>
                    <div className='lock'>
                        <img src={LOCK_ICN} alt="Lock Icon" />
                        <p>After you have answered the question please view this exemplar answer</p>
                    </div>
                </div>
                <div className='row progressBar'>
                        <div className='col'></div>
                        <div className='col progressBar1'>
                            <img src={UP_ARROW} alt="Up Arrow" />
                            <img src={DOWN_ARROW} alt="Down Arrow" />
                        </div>
                        <div className='col progressBar2'>
                            <p>20% completed (1/5)</p>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div className='col progressBar3'>
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
        );
    }
}

export default App;





