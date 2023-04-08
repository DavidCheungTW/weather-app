# Weather App

## Project Brief

After learning how to build React App in Command Shift lecture, we need to create an application to practice the knowledge.

This application uses to search a 5 day weather forecast for a city entered by a user.
Then application need to fetch forecast data from an external API.

When forecast data is found, application needs to show city and country name, and 5 day weather forecast summary. And a button should add to each forecast summary to let user to see further details. Application default shows forecast details of first day of summary.

If the city is not found, error message will be shown.

Besides, application needs to have a full test suite for each components including asynchronous components.

## Screenshots of app

- desktop screen (day mode) to show all images

  <img src="screen\screen-desktop.jpeg" height="200">

- desktop screen (night mode) to show all images

  <img src="screen\screen-desktop-night.jpeg" height="200">

- mobile screen to show images

  <img src="screen\screen-mobile.jpeg" height="200">

## Testing utilities used (Jest, React Testing Library)

| Utilities | From                     | Usage                                                          |
| --------- | ------------------------ | -------------------------------------------------------------- |
| renderer  | "react-test-renderer"    | to generate component snapshots to catch unanticipated changes |
| render    | "@testing-library/react" | to create the virtual test environment                         |
| fireEvent | "@testing-library/react" | to simulate event trigger on component                         |
| waitFor   | "@testing-library/react" | await for a group of actions                                   |
| spyOn     | "jest"                   | to mock response from axios API calls                          |

## Technologies

- [React](https://react.dev/learn): create a React app project template
- [Axios API](https://axios-http.com/docs/intro): promise-based HTTP Client for node.js and the browser
- [React weather icons](https://www.npmjs.com/package/react-icons-weather): convert icon id into graphic
- [Prop types](https://www.npmjs.com/package/prop-types): runtime type checking for React props and similar objects

## Instructions

- Clone the repo:

```
git clone https://github.com/DavidCheungTW/weather-app.git
```

- Move into the directory and install:

```
cd weather-app
npm install
```

- To start and run on port 3000:

```
npm start
```

- To run the tests:

```
npm test
```

## Extra features

- add css animation to components
- add mobile screen handle
- add day/night mode button
- add digital clock

## Author

[David Cheung](https://www.linkedin.com/in/david-cheung-473597199/)
