# API Testing With [Cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

[![Node][node-image]][node-url] [![Dependencies][dependencies-image]][dependencies-url] [![DependenciesDev][dependencies-dev-image]][dependencies-dev-url] [![Commit][last-commit-image]][last-commit-url] [![Contributors][contributors-image]][contributors-url]

Didactic example of how to implement and organize automated API tests using Cypress. For this, the Fake Rest API provided by Azure was used.

- [Fake Rest API](https://fakerestapi.azurewebsites.net/)
- [Swagger](https://fakerestapi.azurewebsites.net/swagger/ui/index#/Activities)

## Prerequisites
- [Node 12.16.1+](https://nodejs.org/en/download/)

## Observation
The purpose of this repository is just to show a way on how to use Cypress to automate API tests and how to structure your project in a simple and organized way. For this reason, a faker API was used.

Testing the API of a real application requires knowledge of testing strategies.

## Installation and Execution
#### 1. Install dependencies
```sh  
$ npm install    
```
 
#### 2. Opens the Cypress Test Runner
```sh  
$ npm run cypress:open
```

#### 3. Run Cypress tests
```sh  
$ npm run cypress:run
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

#### Step 1

- **Option 1**
    - :fork_and_knife: Fork this repo!

- **Option 2**
    - :dancers: Clone this repo to your local machine!

#### Step 2
- **HACK AWAY!** :hammer:

#### Step 3
- :arrows_clockwise: Create a new pull request!

[//]: # (These are reference links used in the body of this note.)
[node-image]: https://img.shields.io/badge/node-%3E%3D%2012.16.1-brightgreen.svg
[node-url]: https://nodejs.org
[dependencies-image]: https://david-dm.org/Thairam/API-Testing-With-Cypress.svg
[dependencies-url]: https://david-dm.org/Thairam/API-Testing-With-Cypress
[dependencies-dev-image]: https://david-dm.org/Thairam/API-Testing-With-Cypress/dev-status.svg
[dependencies-dev-url]: https://david-dm.org/Thairam/API-Testing-With-Cypress?type=dev
[contributors-image]: https://img.shields.io/github/contributors/Thairam/API-Testing-With-Cypress.svg
[contributors-url]: https://github.com/Thairam/API-Testing-With-Cypress/graphs/contributors
[last-commit-image]: https://img.shields.io/github/last-commit/Thairam/API-Testing-With-Cypress.svg
[last-commit-url]: https://github.com/Thairam/API-Testing-With-Cypress/commits