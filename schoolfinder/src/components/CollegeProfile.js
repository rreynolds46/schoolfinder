import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

import CollegeProfileIndex from './CollegeProfile/profileIndex';
import CollegeProfileIndexEdit from './CollegeProfileEdit/profileEditIndex';

class CollegeProfile extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }

    renderProfile() {

      switch(this.props.auth) {
        case null:
            return '';
        case false:
            return(
              <h1>not allowed</h1>
            );
        default:
            const collegeProf = this.props.auth._id;
            if(collegeProf === this.props.match.params.userID) {
                return (
                      <CollegeProfileIndexEdit {...this.props} />
                    );            
              } else {
                return(
                  <CollegeProfileIndex {...this.props} />
                )
              }
        }
      }

    render() {
      return(
        <div>
          <div>{this.renderProfile()}</div>
        </div>  
    
      )}   
  }
  
 CollegeProfile.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
    getStudentSurvey: PropTypes.func.isRequired,
    getStudentTest: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(CollegeProfile);
  