const inquirer = require ('inquirer');
const fs = require ('fs');

const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

let finalTeamObj = [];

function userPrompt() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'teamname',
            message: 'This is Team Profile Generator. Please enter your team name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter your team name!');
                    return false;
                }
            }
        }
    ])
    .then (function (teamNameData) {
        const teamName = teamNameData.teamname;
        finalTeamObj.push(teamName);
        addManager();
    });
};

function addManager() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team manager\'s name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter team manager\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter team manager\'s ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('Please enter team manager\'s ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team manager\'s email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter team manager\'s email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'number',
            message: 'Enter team manager\'s office number:',
            validate: numberInput => {
                if (numberInput) {
                    return true;
                } else {
                    console.log ('Please enter team manager\'s office number!');
                    return false;
                }
            }
        },
    ])
    .then(function(managerData) {
        const managerName = managerData.name;
        const managerId = managerData.id;
        const managerEmail = managerData.email;
        const managerOfficeNumber = managerData.number;
        const teamMember = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        finalTeamObj.push(teamMember);

        addTeamMembers();

    });
};

function addTeamMembers() {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add team members?',
            choices: ['Yes, add an engineer','Yes, add an intern','No, continue processing team profile'],
        },
    ])
    .then(function(addMemberData) {
        switch (addMemberData.addMember) {
            case 'Yes, add an engineer':
                addEngineer();
                break;
            
            case 'Yes, add an intern':
                addIntern();
                break;

            case 'No, continue processing team profile':
                pageTemplate();
                break;  
        }
    });
};


