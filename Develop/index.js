// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter a title:',
            validate: title => {
                if (title) {
                    return true
                } else {
                    console.log('Please enter a title for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a project description:',
            validate: desc => {
                if (desc) {
                    return true
                } else {
                    console.log('Please enter a description of your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:',
            validate: install => {
                if (install) {
                    return true
                } else {
                    console.log('Please enter installation instructions for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:',
            validate: usage => {
                if (usage) {
                    return true
                } else {
                    console.log('Please enter usage information for your project')
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license:',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License']
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contribution guidlines:',
            validate: contribute => {
                if (contribute) {
                    return true
                } else {
                    console.log('Please enter contribution guidlines for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter test instructions:',
            validate: test => {
                if (test) {
                    return true
                } else {
                    console.log('Please enter test instructions for your project')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter GitHub username:',
            validate: githubUsername => {
                if (githubUsername) {
                    return true
                } else {
                    console.log('Please enter your GitHub username')
                    return false;
                }
            }
        },
        {
        type: 'input',
            name: 'email',
            message: 'Enter your email:'
        }
    ])}



const mockData = {
    title: 'run buddy',
    description: 'Spicy jalapeno jerky turkey rump filet mignon, spare ribs sausage picanha ball tip hamburger venison. Ham short loin ribeye, picanha venison ham hock pancetta chuck leberkas strip steak meatloaf ball tip filet mignon turducken. Leberkas spare ribs landjaeger prosciutto, porchetta bacon ground round ball tip tri-tip. Meatball landjaeger alcatra, meatloaf pastrami porchetta tail frankfurter leberkas cow corned beef pork chop rump strip steak. Turkey pork chop shankle, pork loin shank pork cow beef ribs kielbasa picanha. Tongue short loin boudin pork loin swine, frankfurter filet mignon doner biltong. Spare ribs alcatra drumstick turducken, pastrami cupim tenderloin capicola pork loin corned beef t-bone beef. Doner flank sausage shankle strip steak bresaola rump. Porchetta cow picanha jerky jowl sausage. Kielbasa porchetta pig corned beef, fatback leberkas biltong filet mignon landjaeger ball tip spare ribs turkey sirloin pork chop.',
    installation: 'Spicy jalapeno jerky turkey rump filet mignon, spare ribs sausage picanha ball tip hamburger venison. Ham short loin ribeye, picanha venison ham hock pancetta chuck leberkas strip steak meatloaf ball tip filet mignon turducken. Leberkas spare ribs landjaeger prosciutto, porchetta bacon ground round ball tip tri-tip. Meatball landjaeger alcatra, meatloaf pastrami porchetta tail frankfurter leberkas cow corned beef pork chop rump strip steak. Turkey pork chop shankle, pork loin shank pork cow beef ribs kielbasa picanha. Tongue short loin boudin pork loin swine, frankfurter filet mignon doner biltong. Spare ribs alcatra drumstick turducken, pastrami cupim tenderloin capicola pork loin corned beef t-bone beef. Doner flank sausage shankle strip steak bresaola rump. Porchetta cow picanha jerky jowl sausage. Kielbasa porchetta pig corned beef, fatback leberkas biltong filet mignon landjaeger ball tip spare ribs turkey sirloin pork chop.',
    usage: 'Spicy jalapeno jerky turkey rump filet mignon, spare ribs sausage picanha ball tip hamburger venison. Ham short loin ribeye, picanha venison ham hock pancetta chuck leberkas strip steak meatloaf ball tip filet mignon turducken. Leberkas spare ribs landjaeger prosciutto, porchetta bacon ground round ball tip tri-tip. Meatball landjaeger alcatra, meatloaf pastrami porchetta tail frankfurter leberkas cow corned beef pork chop rump strip steak. Turkey pork chop shankle, pork loin shank pork cow beef ribs kielbasa picanha. Tongue short loin boudin pork loin swine, frankfurter filet mignon doner biltong. Spare ribs alcatra drumstick turducken, pastrami cupim tenderloin capicola pork loin corned beef t-bone beef. Doner flank sausage shankle strip steak bresaola rump. Porchetta cow picanha jerky jowl sausage. Kielbasa porchetta pig corned beef, fatback leberkas biltong filet mignon landjaeger ball tip spare ribs turkey sirloin pork chop.',
    license: 'GNU General Public License v3.0',
    contribute: 'Spicy jalapeno jerky turkey rump filet mignon, spare ribs sausage picanha ball tip hamburger venison. Ham short loin ribeye, picanha venison ham hock pancetta chuck leberkas strip steak meatloaf ball tip filet mignon turducken. Leberkas spare ribs landjaeger prosciutto, porchetta bacon ground round ball tip tri-tip. Meatball landjaeger alcatra, meatloaf pastrami porchetta tail frankfurter leberkas cow corned beef pork chop rump strip steak. Turkey pork chop shankle, pork loin shank pork cow beef ribs kielbasa picanha. Tongue short loin boudin pork loin swine, frankfurter filet mignon doner biltong. Spare ribs alcatra drumstick turducken, pastrami cupim tenderloin capicola pork loin corned beef t-bone beef. Doner flank sausage shankle strip steak bresaola rump. Porchetta cow picanha jerky jowl sausage. Kielbasa porchetta pig corned beef, fatback leberkas biltong filet mignon landjaeger ball tip spare ribs turkey sirloin pork chop.',
    test: 'Spicy jalapeno jerky turkey rump filet mignon, spare ribs sausage picanha ball tip hamburger venison. Ham short loin ribeye, picanha venison ham hock pancetta chuck leberkas strip steak meatloaf ball tip filet mignon turducken. Leberkas spare ribs landjaeger prosciutto, porchetta bacon ground round ball tip tri-tip. Meatball landjaeger alcatra, meatloaf pastrami porchetta tail frankfurter leberkas cow corned beef pork chop rump strip steak. Turkey pork chop shankle, pork loin shank pork cow beef ribs kielbasa picanha. Tongue short loin boudin pork loin swine, frankfurter filet mignon doner biltong. Spare ribs alcatra drumstick turducken, pastrami cupim tenderloin capicola pork loin corned beef t-bone beef. Doner flank sausage shankle strip steak bresaola rump. Porchetta cow picanha jerky jowl sausage. Kielbasa porchetta pig corned beef, fatback leberkas biltong filet mignon landjaeger ball tip spare ribs turkey sirloin pork chop.',
    githubUsername: 'paulkup',
    email: 'kupiszxewski'
}
questions().then(data => {
    const pageMarkdown = generateMarkdown(data);
    fs.writeFile('../readme.md', pageMarkdown, err => {
        if (err) {
          console.log(err);
          return;
        }
    })
});
    // const pageMarkdown = generateMarkdown(mockData);
    // fs.writeFile('../dist/readme.md', pageMarkdown, err => {
    //     if (err) {
    //       console.log(err);
    //       return;
    //     }
    // })