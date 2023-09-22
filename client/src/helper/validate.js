import * as yup from "yup";

const passwordRule = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[`!@#$%^&*()_+\-={};':"|,.<>?~/[\]]).{6,}$/;
const emailRule = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
const nameRule = /^[a-zA-Z ]{2,40}$/;


export const loginSchema = yup.object().shape({
    username: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email")
        .required("Field Required!"),
    password: yup
        .string()
        .required("Field Required!"),
});

export const resetSchema = yup.object().shape({
    password: yup
        .string()
        .min(6)
        .matches(passwordRule, "Must have upper case letter, lover case letter, numaric number and special charactor")
        .required("Field Required!"),
    confirmPassword: yup
        .string()
        .required("Field Required!")
        .oneOf([yup.ref('password'), null], 'Passwords not match')
});

export const registerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Field Required!")
        .matches(nameRule, "Invalid name!"),
    email: yup
        .string()
        .email("Invalid Email!")
        .matches(emailRule, "Invalid Email!")
        .required("Field Required!"),
    password: yup
        .string()
        .min(6)
        .matches(passwordRule, "Must have upper case letter, lover case letter, numaric number and special charactor")
        .required("Field Required!"),
    confirmPassword: yup
        .string()
        .required("Field Required!")
        .oneOf([yup.ref('password'), null], 'Passwords not match')
});