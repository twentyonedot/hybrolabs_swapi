# Hybrowlabs Assignment

This project display starwars characters fetched from [SWAPI](https://swapi.dev/) Api

## Tech Stack

React, TailwindCSS, React-Query

## Demo

https://swapi-prac.netlify.app/

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Screenshots

![App Screenshot](https://i.postimg.cc/VkMPzwXS/Clean-Shot-2021-07-24-at-12-17-29-2x.png)

![App Screenshot](https://i.postimg.cc/qRJPcCSn/Clean-Shot-2021-07-24-at-12-17-37-2x.png)

## Features

- Glassmorphism
- Pagination
- Search Feature
- Individual Route for each character

## Optimizations

- Optimised the search feature using Debouncing Technique

## Appendix

Debouncing Snippet

```javascript
const debounce = function (fn, d) {
  let timerId;
  return function () {
    const context = this,
      args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      fn.apply(context, args);
    }, d);
  };
};
```
