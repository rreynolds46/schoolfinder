import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

class SchoolSearch extends Component {
    componentDidMount = () => {
    }



    render() {
      return(
        <div>
            <div className='container is-centered'>
            <table className='table is-bordered is-striped is-hoverable is-fullwidth'>
                <thead>
                <tr>
                    <th>School Name</th>
                    <th>Location</th>
                    <th>Size</th>
                    <th>Tuition</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href='/schools/gettysburg'>Gettysburg College</a></td>
                        <td>Gettysburg, PA</td>
                        <td>2,400</td>
                        <td>$51,000</td>
                    </tr>
                </tbody>


            </table>
            </div>
        </div>  
    
      )}   
  }
  
  SchoolSearch.propTypes = {

  }
  
  function mapStateToProps(state) {
    return state;
  }
  
  export default connect(mapStateToProps, actions)(SchoolSearch);
  