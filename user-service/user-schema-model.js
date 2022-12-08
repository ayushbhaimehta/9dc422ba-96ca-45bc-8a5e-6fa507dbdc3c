const Joi = require('joi');
const mongoose = require('mongoose');
const Logger = require('../logger/logger');
const log = new Logger('User-Schema-Model');
const bcrypt = require('bcrypt');

const loginUserInputSchemaModel = {
    username: Joi.string().min(3).required(),
    password: Joi.string().min(8).required()
}

const registerInputUserSchemaModel = {
    firstname: Joi.string().min(1),
    lastname: Joi.string().min(1),
    fatherName: Joi.string(),
    emailId: Joi.string().email(),
    dateOfBirth: Joi.date().iso(),
    username: Joi.string().min(6),
    password: Joi.string().min(8),
    phoneNo: Joi.string().min(10).max(10),
    city: Joi.string().min(3),
    state: Joi.string().min(3),
    country: Joi.string().min(3),
    pin: Joi.string().min(6),
    aadharID: Joi.string(),
    panNo: Joi.string(),
    gender: Joi.string(),
    annualincome: Joi.string(),
    marital: Joi.string().min(3),
}

const updatePasswordInputSchemaModel = {
    username: Joi.string().min(6).required(),
    password: Joi.string().min(8).required(),
    emailId: Joi.string().email().required(),
    dateOfBirth: Joi.date().iso().required()
}

const updateEmailInputSchemaModel = {
    username: Joi.string().min(6).required(),
    emailId: Joi.string().email().required()
}

const updatePhoneNoInputSchemaModel = {
    username: Joi.string().min(6).required(),
    phoneNo: Joi.string().min(10).max(10).required()
}

const getUserByUsernameInputSchemaModel = {
    username: Joi.string().min(6).required(),
}

const getUserByPhoneNoInputSchemaModel = {
    phoneNo: Joi.string().min(10).max(10).required()
}

const mongoUserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    emailId: String,
    username: { type: String, unique: true },
    dateOfBirth: Date,
    password: String,
    phoneNo: String,
    city: String,
    state: String,
    country: String,
    pin: String,
    aadharID: String,
    panNo: String,
    gender: String,
    annualincome: String,
    marital: String,
});

mongoUserSchema.methods.encryptPassword = function () {
    return bcrypt.hashSync(this.password, 10, (err) => {
        if (err) {
            log.error('Unable to ecrypt password: ' + err);
        }
    });
}

module.exports = {
    registerInputUserSchemaModel,
    loginUserInputSchemaModel,
    updatePasswordInputSchemaModel,
    updateEmailInputSchemaModel,
    updatePhoneNoInputSchemaModel,
    getUserByUsernameInputSchemaModel,
    getUserByPhoneNoInputSchemaModel,
    mongoUserSchema
}