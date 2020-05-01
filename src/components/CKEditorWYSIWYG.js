import React, { Component } from 'react';
import styled from 'styled-components';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {EditorState} from "draft-js";

const CKHolder = styled.div`
    & .ck-editor__editable_inline {
        min-height: 150px !important;
    }
`;

class CKEditorWYSIWYG extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: '',
            hasInitialised: false,
            editorData: this.props.htmlInput !== '' ? this.props.htmlInput : ''
        }
    };

    componentDidUpdate(prevProps,prevState) {
        if (prevProps.htmlInput !== this.props.htmlInput) {
            this.setState({
                editorData: this.props.htmlInput
            });
        }
    }

    render() {
        return (
            <CKHolder>
                <CKEditor
                    editor={ ClassicEditor }
                    config={{
                        toolbar: [ 'heading', '|', 'bold', 'italic', '|', 'bulletedList', 'numberedList', '|', 'undo', 'redo' ],
                        heading: {
                            options: [
                                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                                { model: 'heading2', view: 'h2', title: 'Heading', class: 'ck-heading_heading2' }
                            ]
                        },
                        alignment: {
                            options: [ 'left', 'right' ]
                        }
                    }}
                    data={this.state.editorData}
                    onInit={ editor => {

                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        const isAllowTrcking = this.props.allowDescriptionTracking == undefined ? false : this.props.allowDescriptionTracking;
                        if (this.state.hasInitialised !== false && isAllowTrcking)
                        {
                            //console.log("ck data", { data } );
                            this.props.onChange(data)
                        }
                        else
                        {
                            this.setState({
                                hasInitialised: true
                            });
                            if (this.props.changeDescriptionTracking !== undefined)
                            { this.props.changeDescriptionTracking(true) }

                            if(isAllowTrcking) {
                                this.props.onChange(data);
                            }
                        }
                    } }
                    onBlur={ ( event, editor ) => {

                    } }
                    onFocus={ ( event, editor ) => {

                    } }
                />
            </CKHolder>
        );
    }
}

export default CKEditorWYSIWYG;
