import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Profile from './profile';



class CollegeProfileIndex extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }

    render() {
      return (
        <div>
          <h1>Showing School Profile</h1>
        </div>
      );
    }
  }
  
  CollegeProfileIndex.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(CollegeProfileIndex);
  