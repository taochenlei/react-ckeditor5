import React from 'react';
import ReactDOM from 'react-dom';
import CKeditor5 from './components/CKEditor5';
import * as questionSet from './questionSet.json';

ReactDOM.render(
  <CKeditor5 questionSet={questionSet.data}/>,
  document.getElementById('root')
);
