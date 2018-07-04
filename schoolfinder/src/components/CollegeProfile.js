import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

import Profile from './CollegeProfile/profile';

class CollegeProfile extends Component {
    componentDidMount = () => {
        const school = this.props.match.params.school;
        this.props.getSchoolProfile(school);
    }

    render() {
      return(
        <div>
          <Profile {...this.props} />
        </div>  
    
      )}   
  }
  
 CollegeProfile.propTypes = {
    getSchoolProfile: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(CollegeProfile);
  