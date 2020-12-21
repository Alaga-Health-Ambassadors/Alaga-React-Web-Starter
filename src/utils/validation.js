import moment from 'moment';

export function validateEmail(input){
    try {
        let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(input).toLowerCase());
    } catch (e) {
        return false;
    }
};

export function validatePassword(input){
    try {
        let passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{8,30}$/;
        return passwordRegex.test(input);
    } catch (e) {
        return false;
    }
};

export function validateNumber(input){
    try {
        let isNumber = /^[0-9]*$/ ;
        return isNumber.test(input);
    } catch (e) {
        return false;
    }
};

export function validateBirthday(input){
    try {
        let inputYear = moment(input).format('YYYY');
        let datenow = moment().format('YYYY');
        let diff = datenow - inputYear;
        return diff;
    } catch (e) {
        return false;
    }
};