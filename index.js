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

        addTeamMember();

    });
};

function addTeamMember() {
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

function addEngineer() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team engineer\'s name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter team engineer\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter team engineer\'s ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('Please enter team engineer\'s ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team engineer\'s email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter team engineer\'s email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter team engineer\'s Github username:',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ('Please enter team engineer\'s Github username!');
                    return false;
                }
            }
        },
    ])
    .then(function(engineerData) {
        const engineerName = engineerData.name;
        const engineerId = engineerData.id;
        const engineerEmail = engineerData.email;
        const engineerGithub = engineerData.github;
        const teamMember = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
        finalTeamObj.push(teamMember);

        addTeamMember();

    });
};

function addIntern() {
    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team intern\'s name:',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter team intern\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter team intern\'s ID:',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('Please enter team intern\'s ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter team intern\'s email address:',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter team intern\'s email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter team intern\'s school:',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ('Please enter team intern\'s school!');
                    return false;
                }
            }
        },
    ])
    .then(function(internData) {
        const internName = internData.name;
        const internId = internData.id;
        const internEmail = internData.email;
        const internSchool = internData.school;
        const teamMember = new Intern(internName, internId, internEmail, internSchool);
        finalTeamObj.push(teamMember);

        addTeamMember();

    });
};

function pageTemplate() {
    
}
