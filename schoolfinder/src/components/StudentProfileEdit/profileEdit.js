import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';



class EditProfile extends Component {
    componentDidMount = () => {
        const userID = this.props.match.params.userID;
        this.props.getUserProfile(userID);
    }


    constructor(props) {
        super(props);
        console.log(this.props);

        this.state = {
            _user: this.props.match.params.userID,
            ...props
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    onSubmit(e) {
        const userID = this.props.match.params.userID;
        e.preventDefault();
        this.props.profileEdit(this.state, userID);
        const userURL = `/users/${userID}`;
        const { history } = this.props;
        history.push(userURL);
    }

    renderContent() {
        switch(this.props.student) {
            case null:
                return '';
            case false:
                return '';
            default:
                const profileDone = this.props.student;
                if(profileDone._id) {
                    const { student } = this.props;
                    return (
                        <div className='is-centered container'>
                            <form onSubmit={this.onSubmit}>
                                <div className='columns is-centered'>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">Name</label>
                                        <div className="control">
                                            <input defaultValue={student.name} onChange={this.onChange.bind(this)} name='name' className="input" type="text"  />
                                        </div>
                                    </div>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">High School</label>
                                        <div className="control">
                                            <input defaultValue={student.highSchool} onChange={this.onChange.bind(this)} name='highSchool' className="input" type="text"  />
                                        </div>
                                    </div>
                                </div>
                                <div className='columns is-centered'>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">GPA</label>
                                        <div className="control">
                                            <input defaultValue={student.gpa} onChange={this.onChange.bind(this)} min={0} name='gpa' className="input" step={.01} type="number"  />
                                        </div>
                                    </div>
                                    <div className="field column is-one-quarter is-centered">
                                        <label className="label">Hometown</label>
                                        <div className="control">
                                            <input defaultValue={student.hometown} onChange={this.onChange.bind(this)} name='hometown' className="input" type="text"  />
                                        </div>
                                    </div>
                                </div>

                                <section className='container column is-three-fifths'> 
                                    <Collapsible trigger="Biography">
                                                <div className='entryDiv container'>
                                                    <textarea defaultValue={student.biography} onChange={this.onChange.bind(this)} name='biography' className="textarea" rows="10"></textarea>
                                                </div>                 
                                    </Collapsible>
                                    <Collapsible trigger="Extracurriculars">
                                                <div className='entryDiv container'>
                                                    <textarea defaultValue={student.extracurricular} onChange={this.onChange.bind(this)} name='extracurricular' className="textarea" rows="10"></textarea>
                                                </div>                 
                                    </Collapsible>
                                    <Collapsible trigger="Awards">
                                                <div className='entryDiv container'>
                                                    <textarea defaultValue={student.awards} onChange={this.onChange.bind(this)} name='awards' className="textarea" rows="10"></textarea>
                                                </div>                 
                                    </Collapsible>
                                </section>
     

                                <div className="control">
                                    <button type='submit' className="button is-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    )
        } else {
            return '';
        }
    }
};

    render() {
      return (
        <div>
            {this.renderContent()}
        </div>
      )
    }
  }

  
  EditProfile.propTypes = {
    profileEdit: PropTypes.func.isRequired,
    getUserProfile: PropTypes.func.isRequired
}

  
  export default EditProfile;
  