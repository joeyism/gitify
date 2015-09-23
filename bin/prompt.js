"use strict";
var inq = require("inquirer");

var validateEmptyValue = function(value){
    return (value) ? true : "Please input a non-empty entry";
}

var forInformation = function(repo, description, user, password, callback){
    var questions = [{
        type: "input",
        message: "Please input your repository name: ",
        name: "repo",
        default: repo,
        validate: validateEmptyValue
    }, {
        type: "input",
        message: "Please input your repository description: ",
        name: "description",
        default: description
    }, {
        type: "input",
        message: "Please input your username: ",
        name: "user",
        default: user
    }, {
        type: "password",
        message: "Please input your password: ",
        name: "password"
    }];

    inq.prompt(questions, function(result){
        callback(result);
    });
};

module.exports = {
    forInformation: forInformation
}
