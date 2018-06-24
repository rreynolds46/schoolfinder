import { FETCH_STUDENT_PROFILE } from '../actions/types';

export default function(state = {}, action) {
    switch (action.type) {
        case FETCH_STUDENT_PROFILE:
            // console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}
