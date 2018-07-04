import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CustomizedSlider from '../StyleComponents/slider';



class EditSurvey extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getStudentSurvey(userID);
    }

    constructor(props) {
        super(props);
        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    renderContent() {
        switch(this.props.survey) {
            case null:
                return '';
            case false:
                return '';
            default:
                const surveyDone = this.props.survey;
                if(surveyDone._id) {
                    const { survey } = this.props;
                    return (
                    
                        <div className='container is-centered'>
                            <form onSubmit={this.onSubmit}>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.campusSetting} name='campusSetting' title='Ideal Campus Setting' minMark='Rural' midMark='Suburban' highMark='Urban' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.schoolSize} name='schoolSize' title='Ideal Campus Size' minMark='Very Small (<2000)' midMark='Average (10,000)' highMark='Very Large (>30,000)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.reputation} name='reputation' title='Ideal School Reputation' minMark='Not prestigious' midMark='Prestigious' highMark='Extremely Prestigious' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.diversity} name='diversity' title='Ideal School Diversity' minMark='Not Diverse' midMark='Diverse' highMark='Extremely Diverse' />
                                <br/>       
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.classSize} name='classSize' title='Ideal Class Size' minMark='Very Small (<10 Students)' midMark='Average (30 Students)' highMark='Very Large (>60 Students)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.homework} name='homework' title='Ideal Academic Program' minMark='Not Rigorous' midMark='Rigorous' highMark='Extremely Rigorous' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.courseRequirements} name='courseRequirements' title='Ideal Course Schedule' minMark='Very Flexible' midMark='Somewhat Structured' highMark='Extremely Structured' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.studyAbroad} name='studyAbroad' title='Ideal Study Abroad Program' minMark='Not Encouraged' midMark='Encouraged' highMark='Extremely Encouraged' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.campusHousing} name='campusHousing' title='Ideal Campus Housing' minMark='Mostly Off-Campus' midMark='Mix of On and Off-Campus' highMark='Mostly On-Campus' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.greekLife} name='greekLife' title='Ideal Campus Greek Life' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/> 
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.sports} name='sports' title='Ideal School Sports' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={survey.arts} name='arts' title='Ideal School Arts' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>      
                                <div className="control">
                                    <button type='submit' className="button is-primary">Submit</button>
                                </div>
                            </form>
                        </div>
            
                );
                } else {
                    return (
                    
                        <div className='container is-centered'>
                            <form onSubmit={this.onSubmit}>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='campusSetting' title='Ideal Campus Setting' minMark='Rural' midMark='Suburban' highMark='Urban' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='schoolSize' title='Ideal Campus Size' minMark='Very Small (<2000)' midMark='Average (10,000)' highMark='Very Large (>30,000)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='reputation' title='Ideal School Reputation' minMark='Not prestigious' midMark='Prestigious' highMark='Extremely Prestigious' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='diversity' title='Ideal School Diversity' minMark='Not Diverse' midMark='Diverse' highMark='Extremely Diverse' />
                                <br/>       
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='classSize' title='Ideal Class Size' minMark='Very Small (<10 Students)' midMark='Average (30 Students)' highMark='Very Large (>60 Students)' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='homework' title='Ideal Academic Program' minMark='Not Rigorous' midMark='Rigorous' highMark='Extremely Rigorous' />
                                <br/>   
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='courseRequirements' title='Ideal Course Schedule' minMark='Very Flexible' midMark='Somewhat Structured' highMark='Extremely Structured' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='studyAbroad' title='Ideal Study Abroad Program' minMark='Not Encouraged' midMark='Encouraged' highMark='Extremely Encouraged' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='campusHousing' title='Ideal Campus Housing' minMark='Mostly Off-Campus' midMark='Mix of On and Off-Campus' highMark='Mostly On-Campus' />
                                <br/>
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='greekLife' title='Ideal Campus Greek Life' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/> 
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='sports' title='Ideal School Sports' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>  
                                <CustomizedSlider onChange={this.onChange.bind(this)} defaultValue={5} name='arts' title='Ideal School Arts' minMark='Nonexistent' midMark='Average' highMark='Large Part of Culture' />
                                <br/>      
                                <div className="control">
                                    <button type='submit' className="button is-primary">Submit</button>
                                </div>
                            </form>
                        </div>
            
                );
                }
                
        }
    }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
      }

    onSubmit(e) {
        const userID = this.props.match.params.userID;
        e.preventDefault();
        this.props.surveyEdit(this.state, userID);
        const userURL = `/users/${userID}`;
        const { history } = this.props;
        history.push(userURL);    }

    render() {
        return(
        <div>
            {this.renderContent()}
        </div>
        )
    }
  }

  EditSurvey.propTypes = {
      surveyEdit: PropTypes.func.isRequired,
      getStudentSurvey: PropTypes.func.isRequired
  }
  
  export default EditSurvey;
  