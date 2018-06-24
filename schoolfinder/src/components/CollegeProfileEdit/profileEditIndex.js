import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios';

import EditProfile from './profileEdit';



class CollegeProfileIndexEdit extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
        const schoolName = 'Boston College';
        const url = 'https://api.data.gov/ed/collegescorecard/v1/schools?school.name=' + schoolName + '&api_key=rh4tn1WX9Qw3BjRF24Hv309JniKVsT64hmBhtJJS';
        console.log(url);
        axios.get(url)
        .then(res => {
            const schools = res.data;
            console.log(schools.results);
        })
    }

    render() {
      return (
        <div>
          <h1>Showing School Profile Edit</h1>
        </div>
      );
    }
  }
  
  CollegeProfileIndexEdit.propTypes = {
    getUserProfile: PropTypes.func.isRequired,
  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(CollegeProfileIndexEdit);
  