/*
app.js
Author: Kirill Volodkin
Created date: 2019-11-29

This script runs an application. It will first request user input, get the array of answers, transform it into array of objects
of respective classes (Manager, Engineer or Intern), and then generate an html based on the team array.  
*/

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const uinput = require("./lib/processUserInput");
const genHTML = require("./lib/generateHTML");
const fs = require("fs");


async function init(){
    input = new uinput.UserInput();
    await input.requestInput();

    let team = [];
    for (record of input.allAnswers) {
        let employee = {};
        if (record.type === 'Manager') {
            employee = new Manager(record.name, record.id, record.email, record.addParam);
        }
        if (record.type === 'Engineer') {
            employee = new Engineer(record.name, record.id, record.email, record.addParam);
        }
        if (record.type === 'Intern') {
            employee = new Intern(record.name, record.id, record.email, record.addParam);
        }
        team.push(employee);
    }
    let teamPage = new genHTML.TeamPage(team);
    let html = teamPage.generate();

    fs.writeFile("./output/MyTeam.html", html, (err) => {
        if (err) throw err;
        else console.log("HTML file generated successfully");
    });

}

init();