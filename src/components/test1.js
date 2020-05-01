import React, { Component } from 'react';
import './test1.css';
import GRIFFITH_LOGO from './assets/Griffith Logo.png';
import LOCK_ICN from './assets/lock_icn.svg';
import UP_ARROW from './assets/up_arrow.svg';
import DOWN_ARROW from './assets/down_arrow.svg';
import RETURN_ICN from './assets/return_icn.svg';

class Test1 extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='questionHeader'>
                    <div className='codeOfConduct'>
                        <h1>Code of Conduct Activities</h1>
                        <p>Questions for you on the code of conduct</p>
                    </div>
                    <div class="griffithLogo">
                        <img src={GRIFFITH_LOGO} alt="Griffith Logo" />
                    </div>
                </div>
                <div className="mx-auto question">
                    <h1>2.2 Summary of Disciplinary Decisions</h1>
                    <p>Choose one or two of the OMARA disciplinary decisions against registered agents that are published on the OMARA website and summarise the decisions including: <br />
                    - The ground for the disciplinary sanction <br />
                    - The disciplinary sanction imposed by OMARA <br />
                    - Relevant legislative (Act and Code) provisions</p>
                </div>

                <div className='questionFotter'>
                    <div className='lock'>
                        <img src={LOCK_ICN} alt="Lock Icon" />
                        <p>After you have answered the question please view this exemplar answer</p>
                    </div>
                    <div className='progressBarContainer'>
                        <div className='progressBar'>
                            <div className='progressBar1'>
                                <img src={UP_ARROW} alt="Up Arrow" />
                                <img src={DOWN_ARROW} alt="Down Arrow" />
                            </div>

                            <div className='progressBar2'>
                                <p>20% completed (1/5)</p>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Test1;
