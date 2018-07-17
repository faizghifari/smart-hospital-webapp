# Smart Hospital Server

A Node.js apps to provide all of the functionalities from Smart Hospital Webapp. Developed by ELife Solutions Plt.

## Prerequisites

1. Node.js v8.10 or later, along with npm v5.6 or later. You  can download the LTS [here](https://nodejs.org/en/download/)
2. Postgresql v10 or later, recommended to install with pgadmin 4 for management tools. Download [here](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)

### Installation Notes

- Run postgresql on port 5432. Please create a postgresql user first other than postgres super-user.
You can refer to this guide to create a new postgresql user directly from CLI, [here](https://www.postgresql.org/docs/10/static/app-createuser.html).
Or you can login first into psql using superuser (postgres / Admin) and create new user from there, you can follow this guide [here](https://www.postgresql.org/docs/10/static/sql-createuser.html).
- Create the database that will be used for development, test, and production. The db names are:

  - DEVELOPMENT: `smart-hospital-dev`
  - TEST: `smart-hospital-test`
  - PRODUCTION: `smart-hospital`
- Open `server/config/config.json` then:

  - Edit the `database` based on the db names
  - Edit the `dialect` to `postgres`
  - Add `port` with value 5432
  - Edit the `username` and `password` using the new postgres account

## Running using npm for Development

NOTES : Make sure all the prerequisites are already installed and running.

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to download all the dependencies.
4. Run `npm run start:dev` to start the application.
5. Access Apps on port 3001, make sure to get the welcome message and the Apps running properly

- The Apps using Nodemon module that enable auto-restart when detecting changes on code. So don't worry about starting the Apps after adding some features.
- If there's additional node modules at package.json when pulling from the repository, just run `npm install` again to match all dependencies.

### Setting up for Production

TBD

## Directory structure

- `bin`: Application entry.
- `server`: source code for server.
- `server/models`: model files - define data schema and queries.
- `server/config`: configuration files - use for database authentication, JWT seeds, and so on.
- `server/test`: test setup files - main configuration to run test code.
- `server/<FEATURE_NAME>`: specific feature files - all files that related to a feature.

## Development guide

1. Ensure you are on the `master` branch (`git checkout master`). Create a new branch (`git checkout -b <BRANCH_NAME>`). Branch name for a table must be equal to the feature that developed on the branch followed by `features-` (e.g. `features-auth`).
2. Stage (`git add --all`), commit (`git commit -m <COMMIT_MESSAGE>`, and push changes to Git (`git push -u origin <BRANCH_NAME>`).
3. If you already finished the feature, then make a new pull request to `master` on GitHub.

### How to make a new feature

1. Create a new folder on `server`, name the folder as the feature name.
2. Add a new file `index.js` inside the feature folder `server/<FEATURE_NAME>`, this file will be used to export our feature.
3. Make your function (usually the controllers and routes) inside the feature folder. Don't forget to export it to `index.js`.

### How to use Sequelize to manage database

1. To make a new table go to the root project directory, then run `sequelize model:create --name <TABLE_NAME> --attributes <ATTRIBUTE_NAME_1>:<ATTRIBUTE_TYPE>,<ATTRIBUTE_NAME_2>:<ATTRIBUTE_TYPE>` to generate a table with its attributes. You can add many attributes as you want.
2. You can access the generated code file of the table at `server/models/<TABLE_NAME>.js` and the migrations file at `server/migrations/<DATE_CREATED>-create-<TABLE_NAME>.js`.
3. Next thing you need to do are refactoring the generated code file and migrations file into JavaScript ES6. You can refer to the existing table for refactoring. To add options for table attributes, you can read the [Sequelize Documentation](http://docs.sequelizejs.com/manual/tutorial/migrations.html)
4. Before do database migrations, please ensure that your code is free from errors (and warnings if necessary).
5. Do database migrations by running `sequelize db:migrate`.
6. If there is any changes on the database either tables or attributes, run `sequelize db:migrate:undo:all` first to revert the existing database and then run `sequelize db:migrate`

Notes:
- If there's any problem occured while creating table or migrating database, you can read the [Sequelize Documentation](http://docs.sequelizejs.com/manual/tutorial/migrations.html) to see additional command like Undo, etc.

### Linting

TBD

### Tests

TBD
