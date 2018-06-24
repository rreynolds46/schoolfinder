import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            passwordConfirmation: '',
            grouping: ''
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    onSubmit(e) {
        const { history } = this.props;
        e.preventDefault();
        this.props.userSignup(this.state);
        history.push('/');
    }

    render() {
      return (
        <div>
            <section className='container column is-one-fifth'>
                <form onSubmit={this.onSubmit}>
                    <div className="field">
                        <div className="control">
                            <input className="input"
                             value={this.state.username} 
                             onChange={this.onChange.bind(this)}
                             type="text" 
                             name='username' 
                             placeholder="E-Mail" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <input className="input" 
                            type="password" 
                            value={this.state.password} 
                            onChange={this.onChange.bind(this)}
                            name='password' 
                            placeholder="Password" />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control is-expanded">
                            <div className="select is-fullwidth">
                            <select name='grouping' value={this.state.grouping} onChange={this.onChange.bind(this)}>
                                <option value="" selected disabled hidden>Select Account Type</option>
                                <option value='student'>Student</option>
                                <option value='teacher'>Teacher</option>
                                <option value='adviser'>Adviser</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="control">
                        <button type='submit' className="button is-primary">Submit</button>
                    </div>


                </form>
            </section>

                
            


        </div>
      );
    }
  }

  Register.propTypes = {
      userSignup: PropTypes.func.isRequired
  }
  
  export default Register;
  