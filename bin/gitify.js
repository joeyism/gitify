#!/usr/bin/env node
var prompt = require("./prompt.js");

var gitify = require('..'), 
    argv = process.argv;

var repo        =  argv[2], 
    description =  argv[3], 
    user        =  argv[4], 
    password    =  argv[5];

var gitifyObj = { 
    user        :  user,
    password    :  password, 
    repo        :  repo, 
    description :  description
}, 
gitifyCallback = function (err) {
    if (err) { 
        console.error(err);
        if (err.err && err.err.errors) console.error(err.err.errors);
        return;
    }
    console.log('The current directory was successfully gitified.');
};

if (argv.length < 6) {
    prompt.forInformation(repo, description, user, password, function(result){
        gitifyObj = { 
            user        :  result.user, 
            password    :  result.password, 
            repo        :  result.repo, 
            description :  result.description
        };
        gitify(gitifyObj, gitifyCallback);
    });
}
else {
    gitify(gitifyObj, gitifyCallback);
}

