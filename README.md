# node_web_service_test

A RESTful API built with [Node](https://nodejs.org/en/), [Express](http://expressjs.com/), [Knex](http://knexjs.org/), [Postgres](https://www.postgresql.org/) and [Standard](http://standardjs.com/) using [TDD](https://en.wikipedia.org/wiki/Test-driven_development).

## Install
Create two postgres databases, one called **node_web_service_test_development** for development and other one called **node_web_service_test_testing** for testing.
```
npm install pg knex mocha standard -g
npm install
knex migrate:latest --env development
knex seed:run --env development
```

## Test
```
npm test
```

## Run
```
npm start
```

## Usage
With the app running in development mode:

* **curl http://localhost:3000/api/v1/messages/** - Gets all the messages in the database.
* **curl http://localhost:3000/api/v1/messages/id** - Replace the id field by a message number id, example: 'curl http://localhost:3000/api/v1/messages/1'.
* **curl http://localhost:3000/api/v1/messages -d "message='this is a message'"** - Adds a message with the content of the message field.
