# Brewery vendors list

## Description

This project provides a list view of Breweries vendor base on [Open brewery data set](https://www.openbrewerydb.org/), which is a public API provided free for use.

Here is some key feature provided by the project:

1. A list of breweries view
1. Load more breweries
1. Search breweries by keywords
1. View breweries detail view

## Prerequisite

1. Node.js
1. Yarn

Using yarn for the package manager, why yarn?

-   yarn is faster than npm
-   yarn.lock file was more stable than package-lock.json file

## Installation

Install dependencies by using yarn

```sh
yarn
```

Run the project locally for development

```sh
yarn start
```

Run tests

```sh
yarn test
yarn test --coverage # show test coverage for the codebase
```

Pack a production build

```sh
yarn build
```

## Project structure

```sh
src
├── APIs - API calls & config file
├── components - share components
├── store - redux reducers & actions
└── views
    ├── App - App entrance
    ├── BreweryDetails - Brewery detail view page
    └── HomePage - Breweries list view page
```

## Technical decisions

-   Add styled-components dependence, using CSS in js was more flexible, and we don't need to worry about the global CSS pollution issues also.
-   Use @reduxjs/toolkit to create reducers & actions, this toolkit allows us to write less code the finish complicated tasks.
-   Rename all js files to JSX, for it will more easy for people to know about which file contain React components.
-   Refactor all class components to function components, which is lighter and more efficient.
-   Using hooks for function components, which can isolate different logic and make the code more readable and easier for future maintenance
-   Write small components which may reuse in the future, also small chunks of code make it easy for debugging and code review
-   Add test for a few reducers, with test cover will make the code more robust

## TODO

1. Add typescript support, which is great for team cooperation
1. Add filters & sort support
1. Add more tests for components & util functions
