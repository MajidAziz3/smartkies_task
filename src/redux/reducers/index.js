import {combineReducers} from 'redux';
import ApplicantId from './ApplicantId';
import ImageArray from './ImageArray';
import Onfido from './Onfido';
import Token from './Token';

export default combineReducers({
    imageArray:ImageArray,
    token:Token,
    onfidoId:Onfido,
    applicantId:ApplicantId
})