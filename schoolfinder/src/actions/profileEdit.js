import axios from 'axios';

export function profileEdit(profileData, userID) {
    return dispatch => {
        return axios.put('/api/studentprofile/' + userID, profileData)
            .then(res => {
              console.log(res)   
            })
            .catch(err => {
                console.log(err)});
    }
}
