# demo-forum-frontend

This demo is supposed to give you a quick overview in the way modern frontend development can be done. This example is bit simplified and does not use some more advanced concepts with React such as Redux/Flow -patterns. We will not be bundling the frontend with the backend either.

There are different branches for each step.

Frontend code for this lab is written in EcmaScript 2015 (JavaScript ES6) and it uses webpack to bundle things.

# Prerequisites

1. Install Chrome or Firefox
2. Install [React Developer Tools](https://github.com/facebook/react-devtools)

Things will be demoed on Google Chrome, but Mozilla Firefox or Microsoft Edge should be fine too. Edge does not yet have the [React Developer Tools](https://github.com/facebook/react-devtools).

1. Install lightweight texteditor, such as [Atom](https://atom.io/)
2. Install React (.jsx) support for Atom [https://atom.io/packages/react](https://atom.io/packages/react)

# Setup

Important things first, to get things running you will have to have [node](https://nodejs.org/en/) installed, preferrably version 6 (current version, not LTS).

1. Verify that was installed by running the following command `node --version` returns the node version number `v6.2.0`.

2. After node has been installed, we have to install our dependencies with `npm`, node package manager, with the command `npm install`.

3. Lastly we run the actual application with the command `npm start` which starts local node server that hosts our frontend application.

# Testing

For component testing we are using AVA test runn  er in conjuction with [Enzyme](http://airbnb.io/enzyme/) to test React components.

Tests can be run with `npm run test`, tests can be found under the `./test/` -folder. AVA searches this folder automatically.

# Additional resources
[http://jeffcarp.github.io/frontend-hyperpolyglot/](http://jeffcarp.github.io/frontend-hyperpolyglot/)

# Where to continue from here?
- Elm
- React + Redux (time-travel)
- Cycle.js

# Steps

High level overview what each step contains

## stage-0
  ForumContainer component
  main, boostrapping application to dom

## stage-1
  SingleTopic component
  ForumContainer, mapping items to components

## stage-2
  moment.js timehandling library
  Message component
  SingleTopic, map messages to Message component

## stage-3
  axios http-promise library, communication with backend using GET
    ForumContainer
    SingleTopic

## stage-4
  SendText re-usable component

## stage-5
  Communication with backend using axios by using POST
    ForumContainer
    SingleTopic

## Final

Same as master
