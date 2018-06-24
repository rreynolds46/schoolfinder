import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';


class Header extends Component {
    

renderContent() {
    switch(this.props.auth) {
        case null:
            return '';
        case false:
            return(
            <div className='navbar-end'>
                <a className='navbar-item' href='/register'>Register</a>
                <a className='navbar-item' href='/login'>Login</a> 
            </div>
            );
        default:
            const studentProf = this.props.auth._id;
            if(this.props.auth.grouping === 'student') {
                return (
                    <div className='navbar-end'>
                        <a className='navbar-item' href={'/users/' + studentProf}>Profile</a>
                        <a className='navbar-item' href='/'>Schools</a>
                        <a className='navbar-item' href='/api/signout'>Logout</a>
                    </div>
                    );      
            } else {
            return (
            <div className='navbar-end'>
                <a className='navbar-item' href={'/schools/' + studentProf}>Profile</a>
                <a className='navbar-item' href='/'>Students</a>
                <a className='navbar-item' href='/api/signout'>Logout</a>
            </div>
            );     
        }
        }
}

    render() {
      return (
    <nav className='navbar is-primary'>
        <div className='navbar-brand'>
            <a className='navbar-item' href='/'>schoolfinder</a>
        </div>
        <div className='navbar-end'>
            {this.renderContent()}
        </div>

    </nav>
      );
    }
  }

  function mapStateToProps({ auth }) {
    return { auth };
  }
  
  export default connect(mapStateToProps, actions)(Header);
  