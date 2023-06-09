# Scavenger Hunt

## Table of Contents
* [Features](#features)
* [Admin Features](#admin-features)
* [User Features](#user-features)
* [Feature List](#feature-list)
* [Technologies used](#technologies-used)
* [npm packages used](#npm-packages-used)
* [Prerequisites](#prerequisites)
* [Installation and setup](#installation-and-setup)

## Features
- The system consists of 2 types of users: admins, users.
- Admins: They monitor all the activities of the Users.
- Users: They are the driving users of the application who play the game.
- Each user should have an account.
- Every user also have a dashboard where they can view several things in short summary.
- Every user and Admin also have a profile page where they can see there details.
- The application provides signup, login and logout functionalities.

## Admin Features : 
- Admin can monitor every user on the dashboard
- Can check every user's scorecard.
## User Features
- User can play 3 different puzzles
- Each puzzle tests different soft skill of the User
- Please check the project, I have also added descriptions about the puzzles in the game.
- Soft skills included are : General Awareness, English Vocabulary, Color Recognition.
- Dead Ends :
- Puzzle 1 and Puzzle 2 : Only required amount of input boxes are created, so if user   - don't know about the answer, he/she has to skip it.
- Puzzle 3 : It is time based, so after time is over, he/she can't answer anymore.

## Feature List
- Added Sign-up, Login & Logout functionalities
- Added minimum 5 clues and minimum 2 dead-ends in puzzles.
- Each puzzle has 1 solution
- Progress of Each user is stored in the Profile tab.
- Added Session Management, so if you hit refresh, your progress will be saved.
- Added Dashboard for users and admin.
## Technologies used
- HTML
- CSS
- Bootstrap
- Javascript
- Node.js
- Express.js
- Mongodb
- ejs

## npm packages used
- express
- ejs
- express-ejs-layouts
- mongoose
- mongodb
- express-session
- bcryptjs
- passport
- passport-local
- connect-flash
- method-override
- dotenv
- path
