# benrinote-api 

This is the api for a note-taking react-application.
  + [Benrinote api github](https://github.com/levipaulk/benrinote-api)
  + [Benrinote app github](https://github.com/levipaulk/benrinote-app)
  + [Live](https://levi-benrinote-app.now.sh/)

## Summary

+ BenriNote is a note management application, that is currently in alpha. 
  + In its current build...
    + A user can select from a list of *Publications* and add them to their *Dashboard*.  
      + BenriNote creates a set of blank notes after the user adds the *Publication* to their *Dashboard*.
      + BenriNote creates an individual note for each *Section* of a given *Publication* in order to avoid 'spaghetti notes™'.
    + From the *Dashboard*, the user can...
      + Read and take notes on a *Publication*.
      + Remove a *Publication* from their *Dashboard*.
        + Doing so will DELETE all of their notes associated with said *Publication*.
      + View/Edit all of their notes for each *Publication*.
  + Primary Features include:
    + Organizing notes through direct correlation with the source material ( *Publications* ).
    + Organizing a user's list of *Publications* by date-added.
    + Allowing a user to take notes as they read, all on the same screen.
    + Saving notes to the database periodically (onBlur)
    + Saving a backup of the last edited note in local storage, in case the onBlur method fails to save the note to the database for whatever reason.
    

## Features

After registration and login, the user can:

1. Browse from a list of available **Publications**
<img src="./src/images/Publications-screenshot.png" width="134" height="200" alt="Screenshot of the Publications Page">
2. View their list of **Publications** on their **Dashboard**
<img src="./src/images/Dashboard-screenshot.png" width="134" height="200" alt="Screenshot of a user's Dashboard Page">

3. Read any of their **Publications** 
  + **Publications** are divided into **Sections**
<img src="./src/images/Publication-screenshot.png" width="134" height="200" alt="Screenshot of a specific Publication's Page">

4. Take **Notes** on individual **Sections**
  + Each **Section** has an associated section of **Notes**
  + **Notes** are generated in the database when a User adds a **Publication** to their **Dashboard**
  + **Notes** are saved to the database through an onBlur event
  + As a failsafe, the User's last-edited **Note** is saved in Local Memory
    + When either the **Publication** or **Compiled Notes** are about to be mounted,
    + The application will check for any unsaved note, saving it to the database if found
<img src="./src/images/CompiledNotes-screenshot.png" width="134" height="200" alt="Screenshot of a specific Publication's notes Page">

5. View their **Notes**, grouped by **Publication**
<img src="./src/images/Delete-Dashboard-screenshot.png" width="134" height="200" alt="Screenshot of a user's Dahsboard Page with the Confirm Delete Message on display">

## Test User

+ Username: dunder
+ Password: password

## Set Up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone https://github.com/levipaulk/benrinote-api.git NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "benrinote-api",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Automatically re-run test `npm t -- --watch`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

# Thingful Server

## Set Up
+ Install dependencies: `npm install`
+ Create development and test databases: `createdb benrinote`, `createdb benrinotetest`
+ Create database user: `createuser <username>`
+ Grant privileges to new user in psql:
  + `GRANT ALL PRIVILEGES ON DATABASE benrinote TO <username>`
  + `GRANT ALL PRIVILEGES ON DATABASE benrinotetest TO <username>`
+ Prepare environment file: `cp example.env .env`
  + Replace values in .env with your custom values if necessary.
+ Bootstrap development database: `MIGRATION_DB_NAME=benrinote npm run migrate`
  + To revert: `MIGRATION_DB_NAME=benrinote npm run migrate -- 0`
+ Bootstrap test database: `MIGRATION_DB_NAME=benrinotetest npm run migrate`
  + To revert: `MIGRATION_DB_NAME=benrinotetest npm run migrate -- 0`

# Seeds
+ Add dummy data to main database
  + In command line `psql -U <username> -d benrinote -f ./path-to-benrinote-api/seeds/seed.benrinote_tables.sql`
  + From inside the database: `\i ./path-to-benrinote-api/seeds/seed.benrinote_tables.sql`

+ Remove data from main database
  + In command line `psql -U <username> -d benrinote -f ./path-to-benrinote-api/seeds/trunc.benrinote_tables.sql`
  + From inside the database: `\i ./path-to-benrinote-api/seeds/trunc.benrinote_tables.sql`

# Configuring Postgres
+ For tests involving time to run properly, your Postgres database must be configured to run in the UTC timezone.
  + Locate the postgresql.conf file for your Postgres installation.
    +OS X, Homebrew: /usr/local/var/postgres/postgresql.conf
  + Uncomment the timezone line and set it to UTC as follows:

# - Locale and Formatting -

datestyle = 'iso, mdy'

#intervalstyle = 'postgres'

timezone = 'UTC'

#timezone_abbreviations = 'Default'     # Select the set of available time zone

# Technologies

+ This is a Express project, built using Nodejs

+ Node Modules used for this project:
  + bcryptjs
  + cors
  + dotenv
  + express
  + helmet
  + jsonwebtoken
  + knex
  + morgan
  + pg
  + treeize
  + winston
  + xss
  + chai
  + mocha
  + nodemon
  + postgrator-cli
  + supertest

# F.A.Q
+ "What does 'benrinote' mean?"
  + benri, a.k.a. べんり or 便利, roughly translates to 'convenient'
  + benri is more-or-less pronounced as 'ben-ree'