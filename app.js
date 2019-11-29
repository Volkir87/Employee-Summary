const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");
const uinput = require("./lib/processUserInput");
const genHTML = require("./lib/generateHTML");
const fs = require("fs");


async function init(){
    input = new uinput.UserInput();
    await input.requestInput();
    //console.log(input.allAnswers);

    let team = [];
    for (record of input.allAnswers) {
        let employee = {};
        if (record.type === 'Manager') {
            employee = new manager.Manager(record.name, record.id, record.email, record.addParam);
        }
        if (record.type === 'Engineer') {
            employee = new engineer.Engineer(record.name, record.id, record.email, record.addParam);
        }
        if (record.type === 'Intern') {
            employee = new intern.Intern(record.name, record.id, record.email, record.addParam);
        }
        team.push(employee);
    }
    //console.log(team);
    let teamPage = new genHTML.TeamPage(team);
    let html = teamPage.generate();
    console.log(html);

    fs.writeFile("./output/MyTeam.html", html, (err) => {
        if (err) throw err;
        else console.log("HTML file generated successfully");
    });

}

init();