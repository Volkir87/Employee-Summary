/*
Enginner.js
Author: Kirill Volodkin
Created date: 2019-11-29

This script creates and supports Engineer class. Engineer extends Employee and has additional attribute - github. 
*/

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports.Engineer = Engineer;