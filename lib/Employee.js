/*
Employee.js
Author: Kirill Volodkin
Created date: 2019-11-29

This script creates and supports Employee class. Employee requires name, id and email to construct. 
*/


class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return "Employee";
    }

}

module.exports = Employee;