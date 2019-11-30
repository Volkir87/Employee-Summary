/*
Manager.js
Author: Kirill Volodkin
Created date: 2019-11-29

This script creates and supports Manager class. Manager extends Employee and has additional attribute - office number. 
*/


const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports.Manager = Manager;