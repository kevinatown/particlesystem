A small SPA to play around with particles and canvas, built in React. A live demo of the project can be seen [here](https://kevinatown.github.io/particlesystem/).

## Table of Contents

- [Overview](#overview)
- [Running Locally](#running-locally)
- [Testing the App](#testing-the-app)
- [Components](#components)
  + [BackgroundContainer](#backgroundcontainer)
    * [Sky](#sky)
    * [City](#city)
    * [Building](#building)
  + [FormContainer](#formcontainer)
  + [PartilceContainer](#partilcecontainer)

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and uses [react-konva](https://github.com/lavrton/react-konva), [material-ui](http://www.material-ui.com/), and [react-particles-js](https://github.com/Wufe/react-particles-js).

## Running Locally

- This project requires node and npm.
- Clone the repo: `git clone https://github.com/kevinatown/particlesystem.git`
- Enter the directory: `cd particlesystem`
- Install the dependencies: `npm install`
- Runn the app: `npm start`
- That's it!

## Testing the App

Testing the app is simple. In the project directory run: `npm test`. To get coverage statistics and generate an HTML coverage report run: `npm test -- --watch --coverage`.

## Components

### BackgroundContainer

Renders the background. Contains all konva objects and has Event Listener on window resizes.

Takes no props, but renders [Sky](#sky) and [City](#city) child components.


### Sky

A child component of BackgroundContainer. Renders a konva canvas element. Currently only renders a night sky, i.e. black background.

**Props:**

| Name      | Type                        |  Desciption
|----------|-----------------------------|--------------
| height    | **number** *isRequired*     |  Height of outside component
| width     | **number** *isRequired*     |  Width of outside component


### City

A child component of BackgroundContainer. Renders a konva canvas element of procedural gernated [Building](#building) components and the ground.

**Props:**

| Name      | Type                        |  Desciption
|----------|-----------------------------|--------------
| height    | **number** *isRequired*     |  Height of outside component
| width     | **number** *isRequired*     |  Width of outside component


### Building

A child component of BackgroundContainer and City. Renders a konva Rect element.

**Props:**

| Name      | Type                        |  Desciption
|----------|-----------------------------|--------------
| height    | **number** *isRequired*     |  Height of desidered Building component
| width     | **number** *isRequired*     |  Width of desidered Building component
| x         | **number** *isRequired*     |  X location of desidered Building component
| y         | **number** *isRequired*     |  Y location of desidered Building component


### FormContainer

Renders the toggable drawer and contains the form items for choosing weather, wind, precipitation rate, playing the animation, and creating a new procedural generated [BackgroundContainer](#backgroundcontainer).

**Props:**

| Name      | Type                        |  Desciption
|----------|-----------------------------|--------------
| values    | **object** *isRequired*     |  An object containing the values of: `['wind', 'weather', 'speed', 'play']`
| createNewBackground  | **func** *isRequired*     |  Function to create a new background
| handleChange         | **func** *isRequired*     |  Function to the value props


### PartilceContainer

Renders the partilce canvas.

**Props**

| Name      | Type                        |  Desciption
|----------|-----------------------------|--------------
| params    | **object** *isRequired*     |  An object containing the parameters for the particle canvas
| style     | **object** *isRequired*     |  An object containing additonal styles for the outer `<div/>` of the canvas
| play      | **bool** *isRequired*       |  Should the partilces be moving?
| weather   | **string** *isRequired*     |  The weather element to display, one of: `['rain', 'snow']`
| speed     | **number** *isRequired*     |  The speed of the particles
| wind      | **string** *isRequired*     |  The direction of the particles, one of: `['bottom', 'bottom-right', 'bottom-left']`




