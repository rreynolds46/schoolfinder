import { combineReducers } from 'redux';
import authReducer from './authReducer';
import  { routerReducer } from 'react-router-redux';
import studentProfileReducer from './studentProfileReducer';
import studentSurveyReducer from './studentSurveyReducer';
import studentTestReducer from './studentTestReducer';
import studentEssayReducer from './studentEssayReducer';

export default combineReducers({
    auth: authReducer,
    router: routerReducer,
    student: studentProfileReducer,
    survey: studentSurveyReducer,
    essay: studentEssayReducer,
    test: studentTestReducer

});