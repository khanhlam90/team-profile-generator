const inquirer = require ('inquirer');
const fs = require ('fs');

const Employee = require ('./lib/Employee');
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');

let finalTeamObj = [];

// prompt user's input for team name
function promptUser() {
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

        //after entering the team name, call fxn to enter manager's data
        addManager();
    });
};

// prompt user's input for team manager's data
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
            name: 'officeNumber',
            message: 'Enter team manager\'s office number:',
            validate: officeNumberInput => {
                if (officeNumberInput) {
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
        const managerOfficeNumber = managerData.officeNumber;
        const teamMember = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        finalTeamObj.push(teamMember);

        // after manager's data input, call fxn to ask user if they wanted to add more team members
        addTeamMember();

    });
};

// prompt user's selection to add more team members of engineer and/or intern
function addTeamMember() {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: 'addMember',
            message: 'Would you like to add team members?',
            choices: ['Yes, add an engineer','Yes, add an intern','No, generate our Team Profile'],
        },
    ])
    .then(function(addMemberData) {
        switch (addMemberData.addMember) {
            case 'Yes, add an engineer':
                // call engineer if user decided to add engineer member
                addEngineer();
                break;
            
            case 'Yes, add an intern':
                // call intern if user decided to add intern member
                addIntern();
                break;

            case 'No, generate our Team Profile':
                // if no more member addition, call fxn to create html
                pageTemplate();
                break;  
        }
    });
};

// prompt user's input for team engineer's data
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

        // continue calling fxn to ask user if they wanted to add more team members
        addTeamMember();

    });
};

// prompt user's input for team intern's data
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

        // continue calling fxn to ask user if they wanted to add more team members
        addTeamMember();

    });
};

// after no more team member needed to be added, start to construct html content
function pageTemplate() {

    //this is the final of the html content, set as an array as more objects will be pushed in here:
    const htmlFinalObj = [];

    // this is the opening and header of the html
    const htmlHeader = `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${finalTeamObj[0]}</title>
        <link rel="stylesheet" href="./style.css">
    </head>
   
    <body>
        <header>
            <h1>${finalTeamObj[0]}</h1>
        </header>

        <div class = "card-container">
    `;
    // push the current data to htmlFinalObj
    htmlFinalObj.push(htmlHeader);

    //performing the for loop to construct the html body
    for (let i = 1; i<finalTeamObj.length; i++) {
        let htmlCurrentObj = `
            <div class = "card-member"> 
                <div class = "card-header">
                    <h2>${finalTeamObj[i].name}</h2>
                    <h3>${finalTeamObj[i].role}</h3>
                </div>
                <div class = "card-body">
                    <p>Employee ID: ${finalTeamObj[i].id}</p>
                    <p>Email: <a href = "mailto: ${finalTeamObj[i].email}">${finalTeamObj[i].email}</a></p>
            `
        // if fn to check if member has office number
        if (finalTeamObj[i].officeNumber) {
            htmlCurrentObj += `
            <p>Office Number: ${finalTeamObj[i].officeNumber}</p>
            ` 
        }
        // if (finalTeamObj[i].officeNumber) {
        //     htmlCurrentObj += `
        //     <p>Office Number: ${finalTeamObj[i].officeNumber}</p>
        //     `
        // }
        // if fn to check if member has Github username
        if (finalTeamObj[i].github) {
            htmlCurrentObj += `
            <p>Github: <a href = "https://github.com/${finalTeamObj[i].github}">${finalTeamObj[i].github}</a></p>
            ` 
        }
        // if fn to check if member has school
        if (finalTeamObj[i].school) {
            htmlCurrentObj += `
            <p>School: ${finalTeamObj[i].school}</p>
            `
        }

        // add the closed div to current html
        htmlCurrentObj += `
        </div>
        </div>
        `
        //push the current html content to the final html object
        htmlFinalObj.push(htmlCurrentObj);
    }

    // add the closed div/body/html elements to the end of the html file
    const htmlClosedElements = `
    </div>
    </body>
    </html>
    `
    // push these closed elements to the final html object
    htmlFinalObj.push(htmlClosedElements);

    fs.writeFile(`./dist/${finalTeamObj[0]}.html`, htmlFinalObj.join(""), function (err) {
       console.log(`
-----------------------------------------------------------------------------
HTML file created! Please check directory "dist" for final Team Profile HTML!
-----------------------------------------------------------------------------
       `);
    });

    fs.copyFile('./src/style.css', './dist/style.css', function (err) {
        console.log(`
-----------------
CSS file created!
-----------------S
        `);
    });
};


promptUser();