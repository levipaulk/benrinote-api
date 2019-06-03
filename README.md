# Express Boilerplate!

This is a boilerplate project used for starting new projects!

## Set up

Complete the following steps to start a new project (NEW-PROJECT-NAME):

1. Clone this repository to your local machine `git clone BOILERPLATE-URL NEW-PROJECTS-NAME`
2. `cd` into the cloned repository
3. Make a fresh start of the git history for this project with `rm -rf .git && git init`
4. Install the node dependencies `npm install`
5. Move the example Environment file to `.env` that will be ignored by git and read by the express server `mv example.env .env`
6. Edit the contents of the `package.json` to use NEW-PROJECT-NAME instead of `"name": "express-boilerplate",`

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`

Automatically re-run test `npm t -- --watch`

## Deploying

When your new project is ready for deployment, add a new Heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

## Thingful Server
# Setting Up
-Install dependencies: npm install
-Create development and test databases: createdb thingful, createdb thingful-test
-Create database user: createuser thingful
-Grant privileges to new user in psql:
--GRANT ALL PRIVILEGES ON DATABASE thingful TO thingful
--GRANT ALL PRIVILEGES ON DATABASE "thingful-test" TO thingful
-Prepare environment file: cp example.env .env
--Replace values in .env with your custom values if necessary.
-Bootstrap development database: MIGRATION_DB_NAME=thingful npm run migrate
-Bootstrap test database: MIGRATION_DB_NAME=thingful-test npm run migrate
--To revert: MIGRATION_DB_NAME=thingful-test npm run migrate -- 0
# Seeds
-In command line psql -U <username> -d thingful -f ./path/to/blogful-api-auth/seeds/seed.thingful_tables.sql a. seed for main db
# Note for Windows users
-Migration files have columns with TIMESTAMP WITH TIME ZONE instead of TIMESTAMP
--This should hopefully allow you to pass tests involving TIMESTAMP columns
# Configuring Postgres
-For tests involving time to run properly, your Postgres database must be configured to run in the UTC timezone.
--Locate the postgresql.conf file for your Postgres installation.
---OS X, Homebrew: /usr/local/var/postgres/postgresql.conf
--Uncomment the timezone line and set it to UTC as follows:

# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone

# Sample Data
-To seed the database for development: psql -U thingful -d thingful -a -f seeds/seed.thingful_tables.sql
-To clear seed data: psql -U thingful -d thingful -a -f seeds/trunc.thingful_tables.sql

# Scripts
-Start application for development: npm run dev
-Run tests: npm test