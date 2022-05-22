# Space Age

#### By: Ryan Broadsword

#### Web application where the user enters their age and expected life expectancy and will return their age and how much longer they have to live on the planets Mercury, Venus, Mars, and Jupiter. 

## Technologies Used

* HTML
* CSS 
* Jquery
* Bootstrap
* Java Script
* Babel 7.6.4
* css-loader 3.2.0
* eslint 6.3.0
* file-loader 1.1.6
* html-loader 0.5.5
* package-json
* Jest 
* Node.js
* Node Package Manager 6.14.9
* popper.js 1.16.1
* style-loader 1.0.0
* webpack 4.39.3
* webpack-cli 3.3.8
* webpack-dev-server 3.8.0



## Description 

Project Prompt: A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Normally, we want you to follow testing best practices, which includes committing your code and test once it is passing. However, for this project, we want you to follow a different commit workflow to demonstrate your understanding of the Red, Green, Refactor workflow. Make sure that you:

Commit each test after you have written it and before writing the corresponding method in your business logic. This is the Red phase.
Then, write the business logic that corresponds to the test, verify that your test passes, and then commit your code. This is the Green phase.
Refactor your code base and tests as necessary. At the end of your work session, verify that you have 100% coverage on all tests.
The business logic of your application should take a person's age in years and create a class that does the following:

* Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
* Returns their age in Venus years. (A Venus year is .62 Earth years.)
* Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
* Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
* Determines how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user's life expectancy. You can determine average life expectancy as you see fit. A simple way to do this would be to have the user input the average life expectancy for their demographic. A more involved way to do this would be to collect other information from the user (e.g. lifestyle, country of residence, activity level, etc.) to determine their life expectancy.
* If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy. The number of years lived past life expectancy should be a positive number. Keep it simple! You do not have to use the JavaScript Date object to complete this prompt.

## Setup/Installation Requirements

* open terminal on your local computer
* clone repository from parent directory 
* open in code editor
* in terminal run "npm i" to install needed technologies
* in terminal run "npm run build"
* in terminal run "npm run start" to launch in browser
* in termianl run "npm test" to check the tests pass

## Known Bugs

* if user has lived past expected age, it gives a negative number.

## License

* not currently licensed

## Contact

* Ryan Broadsword  - rboadsword@gmail.com 
