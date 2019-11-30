/*
Intern.js
Author: Kirill Volodkin
Created date: 2019-11-29

This script creates and supports Intern class. Intern extends Employee and has additional attribute - school. 
*/


const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports.Intern = Intern;