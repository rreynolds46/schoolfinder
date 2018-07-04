import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';

import './testEdit.css';

class EditTest extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getStudentTest(userID);
        
    }

    constructor(props) {
        super(props);
        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value*1});
    }

    onSubmit(e) {
        const userID = this.props.match.params.userID;
        e.preventDefault();
        this.props.testEdit(this.state, userID);
        const userURL = `/users/${userID}`;
        const { history } = this.props;
        history.push(userURL);
    }

    renderContent() {
        switch(this.props.tests) {
            case null:
                return '';
            case false: 
                return '';
            default:
                const testDone = this.props.test;
                if(testDone._id) {
                    const { test } = this.props;
                    return (
                    <section className='container column is-three-fifths'> 
                    <form onSubmit={this.onSubmit}>
                        <Collapsible trigger="AP Capstone">
                            <div className='entryDiv container'>
                                <div className="columns is-multilined is-centered">
                                    <div className="field is-three-fifths column">
                                        <label className="label">AP Research</label>
                                        <div className="control">
                                            <input defaultValue={test.APresearch} onChange={this.onChange.bind(this)} name='APresearch' className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">AP Seminar</label>
                                        <div className="control">
                                            <input defaultValue={test.APseminar}  name='APseminar' onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="Arts">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Art History</label>
                                        <div className="control">
                                            <input name='AParthistory' defaultValue={test.AParthistory} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art 2-D</label>
                                        <div className="control">
                                            <input name='APstudioart2d' defaultValue={test.APstudioart2d} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art 3-D</label>
                                        <div className="control">
                                            <input name='APstudioart3d' defaultValue={test.APstudioart3d} onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Studio Art Drawing</label>
                                        <div className="control">
                                            <input name='APstudioartdrawing' defaultValue={test.APstudioartdrawing} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Music</label>
                                        <div className="control">
                                            <input name='APmusic' defaultValue={test.APmusic} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="English">
                            <div className='entryDiv container'>
                                <div className="columns is-multilined is-centered">
                                    <div className="field is-three-fifths column">
                                        <label className="label">English Language</label>
                                        <div className="control">
                                            <input name='APenglishlang'  defaultValue={test.APenglishlang} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-three-fifths">
                                        <label className="label">English Literature</label>
                                        <div className="control">
                                            <input name='APenglishlit' defaultValue={test.APenglishlit} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="History and Social Science">
                        <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                            <label className="label">Comparative Government</label>
                                            <div className="control">
                                                <input name='APcomparativegov' defaultValue={test.APcomparativegov} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">European History</label>
                                            <div className="control">
                                                <input name='APeuro' defaultValue={test.APeuro} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                       
                                        <div className="field column is-two-fifths">
                                            <label className="label">Georgraphy</label>
                                            <div className="control">
                                                <input name='APgeography' defaultValue={test.APgeography} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Macroeconomics</label>
                                            <div className="control">
                                                <input name='APmacro' defaultValue={test.APmacro} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                        
                                        <div className="field column is-two-fifths">
                                            <label className="label">Microeconomics</label>
                                            <div className="control">
                                                <input name='APmicro' defaultValue={test.APmicro} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Psychology</label>
                                            <div className="control">
                                                <input name='APpsych' defaultValue={test.APpsych} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>                        
                                        <div className="field column is-two-fifths">
                                            <label className="label">US Government</label>
                                            <div className="control">
                                                <input name='APusgov' defaultValue={test.APusgov} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">US History</label>
                                            <div className="control">
                                                <input name='APushistory' defaultValue={test.APushistory} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">World History</label>
                                            <div className="control">
                                                <input name='APworldhistory' defaultValue={test.APworldhistory} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </Collapsible>
                        <Collapsible trigger="Math and Computer Science">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Calculus AB</label>
                                        <div className="control">
                                            <input name='APcalcAB' defaultValue={test.APcalcAB} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Calculus BC</label>
                                        <div className="control">
                                            <input name='APcalcBC' defaultValue={test.APcalcBC} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Computer Science A</label>
                                        <div className="control">
                                            <input name='APcompsciA' defaultValue={test.APcompsciA} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Computer Science P</label>
                                        <div className="control">
                                            <input name='APcompsciP' defaultValue={test.APcompsciP} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Statistics</label>
                                        <div className="control">
                                            <input name='APstat' defaultValue={test.APstat} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="Sciences">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Biology</label>
                                        <div className="control">
                                            <input name='APbio' defaultValue={test.APbio} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Chemistry</label>
                                        <div className="control">
                                            <input name='APchem' defaultValue={test.APchem} onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Environmental Sciences</label>
                                        <div className="control">
                                            <input name='APenvironment' defaultValue={test.APenvironment} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics Electricity</label>
                                        <div className="control">
                                            <input name='APphysicsElect' defaultValue={test.APphysicsElect} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics Mechanical</label>
                                        <div className="control">
                                            <input name='APphysicsMech' defaultValue={test.APphysicsMech} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics 1</label>
                                        <div className="control">
                                            <input name='APphysics1' defaultValue={test.APphysics1} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Physics 2</label>
                                        <div className="control">
                                            <input name='APphysics2' defaultValue={test.APphysics2} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Collapsible>
                        <Collapsible trigger="World Languages and Cultures">
                            <div className='entryDiv container'>
                                <div className="columns is-multiline is-centered">
                                    <div className="field column is-two-fifths">
                                        <label className="label">Chinese</label>
                                        <div className="control">
                                            <input name='APchinese' defaultValue={test.APchinese} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">French</label>
                                        <div className="control">
                                            <input name='APfrench' defaultValue={test.APfrench} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">German</label>
                                        <div className="control">
                                            <input name='APgerman' defaultValue={test.APgerman} onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Italian</label>
                                        <div className="control">
                                            <input name='APitalian' defaultValue={test.APitalian} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Japanese</label>
                                        <div className="control">
                                            <input name='APjapanese' defaultValue={test.APjapanese} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Latin</label>
                                        <div className="control">
                                            <input name='APlatin' defaultValue={test.APlatin} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Spanish Language</label>
                                        <div className="control">
                                            <input name='APspanishlang' defaultValue={test.APspanishlang} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>
                                    <div className="field column is-two-fifths">
                                        <label className="label">Spanish Language</label>
                                        <div className="control">
                                            <input name='APspanishlit' defaultValue={test.APspanishlit} onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                        </div>
                                    </div>  
                                </div>
                            </div>                      
                        </Collapsible>
                        <div className="control">
                            <button type='submit' className="button is-primary">Submit</button>
                        </div>
                    </form>
                </section>
                    )
                } else {
                    return (
                        <section className='container column is-three-fifths'> 
                        <form onSubmit={this.onSubmit}>
                            <Collapsible trigger="AP Capstone">
                                <div className='entryDiv container'>
                                    <div className="columns is-multilined is-centered">
                                        <div className="field is-three-fifths column">
                                            <label className="label">AP Research</label>
                                            <div className="control">
                                                <input  onChange={this.onChange.bind(this)} name='APresearch' className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-three-fifths">
                                            <label className="label">AP Seminar</label>
                                            <div className="control">
                                                <input   name='APseminar' onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="Arts">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Art History</label>
                                            <div className="control">
                                                <input name='AParthistory'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Studio Art 2-D</label>
                                            <div className="control">
                                                <input name='APstudioart2d'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Studio Art 3-D</label>
                                            <div className="control">
                                                <input name='APstudioart3d'  onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Studio Art Drawing</label>
                                            <div className="control">
                                                <input name='APstudioartdrawing'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Music</label>
                                            <div className="control">
                                                <input name='APmusic'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="English">
                                <div className='entryDiv container'>
                                    <div className="columns is-multilined is-centered">
                                        <div className="field is-three-fifths column">
                                            <label className="label">English Language</label>
                                            <div className="control">
                                                <input name='APenglishlang'   onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-three-fifths">
                                            <label className="label">English Literature</label>
                                            <div className="control">
                                                <input name='APenglishlit'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="History and Social Science">
                            <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                                <label className="label">Comparative Government</label>
                                                <div className="control">
                                                    <input name='APcomparativegov'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">European History</label>
                                                <div className="control">
                                                    <input name='APeuro'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>                       
                                            <div className="field column is-two-fifths">
                                                <label className="label">Georgraphy</label>
                                                <div className="control">
                                                    <input name='APgeography'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">Macroeconomics</label>
                                                <div className="control">
                                                    <input name='APmacro'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>                        
                                            <div className="field column is-two-fifths">
                                                <label className="label">Microeconomics</label>
                                                <div className="control">
                                                    <input name='APmicro'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">Psychology</label>
                                                <div className="control">
                                                    <input name='APpsych'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>                        
                                            <div className="field column is-two-fifths">
                                                <label className="label">US Government</label>
                                                <div className="control">
                                                    <input name='APusgov'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">US History</label>
                                                <div className="control">
                                                    <input name='APushistory'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                            <div className="field column is-two-fifths">
                                                <label className="label">World History</label>
                                                <div className="control">
                                                    <input name='APworldhistory'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Collapsible>
                            <Collapsible trigger="Math and Computer Science">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Calculus AB</label>
                                            <div className="control">
                                                <input name='APcalcAB'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Calculus BC</label>
                                            <div className="control">
                                                <input name='APcalcBC'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Computer Science A</label>
                                            <div className="control">
                                                <input name='APcompsciA'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Computer Science P</label>
                                            <div className="control">
                                                <input name='APcompsciP'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Statistics</label>
                                            <div className="control">
                                                <input name='APstat'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="Sciences">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Biology</label>
                                            <div className="control">
                                                <input name='APbio'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Chemistry</label>
                                            <div className="control">
                                                <input name='APchem'  onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Environmental Sciences</label>
                                            <div className="control">
                                                <input name='APenvironment'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics Electricity</label>
                                            <div className="control">
                                                <input name='APphysicsElect'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics Mechanical</label>
                                            <div className="control">
                                                <input name='APphysicsMech'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics 1</label>
                                            <div className="control">
                                                <input name='APphysics1'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Physics 2</label>
                                            <div className="control">
                                                <input name='APphysics2'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Collapsible>
                            <Collapsible trigger="World Languages and Cultures">
                                <div className='entryDiv container'>
                                    <div className="columns is-multiline is-centered">
                                        <div className="field column is-two-fifths">
                                            <label className="label">Chinese</label>
                                            <div className="control">
                                                <input name='APchinese'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">French</label>
                                            <div className="control">
                                                <input name='APfrench'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">German</label>
                                            <div className="control">
                                                <input name='APgerman'  onChange={this.onChange.bind(this)}  className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Italian</label>
                                            <div className="control">
                                                <input name='APitalian'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Japanese</label>
                                            <div className="control">
                                                <input name='APjapanese'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Latin</label>
                                            <div className="control">
                                                <input name='APlatin'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Spanish Language</label>
                                            <div className="control">
                                                <input name='APspanishlang'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>
                                        <div className="field column is-two-fifths">
                                            <label className="label">Spanish Language</label>
                                            <div className="control">
                                                <input name='APspanishlit'  onChange={this.onChange.bind(this)} className="input" type="number" placeholder="Score" min="0" max="5"/>
                                            </div>
                                        </div>  
                                    </div>
                                </div>                      
                            </Collapsible>
                            <div className="control">
                                <button type='submit' className="button is-primary">Submit</button>
                            </div>
                        </form>
                    </section>
                    )
                }
        }
    }




    render() {
        const { test } = this.props;
        console.log(test);
        return (

            <div className='container is-centered'>
                { this.renderContent() }
            </div>
 
      );
    }
  }

  EditTest.propTypes = {
      testEdit: PropTypes.func.isRequired,
      getStudentTest: PropTypes.func.isRequired
  }
  
  export default EditTest;
  
