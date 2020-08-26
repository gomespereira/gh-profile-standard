# GitHub Profile (Standard)

An attempt to improve GitHub profile page

[![Netlify Status](https://api.netlify.com/api/v1/badges/0467c0a0-1f5e-4ba4-9dd8-d4fc1144a941/deploy-status)](https://app.netlify.com/sites/dazzling-easley-2e15f5/deploys)

## About

This is a side project created for learning purposes and the premise is simple: fetch and display some data

It is far from the ideal as it uses too many dependencies for such a simple task

The idea is to overcomplicate to introduce new constraints, with new constraints new problems, with new problems new abstractions

The project will be updated and improved whenever necessary, with corrections, new techniques and concepts

I encourage you to contribute, teach and criticize this work

## Concepts

- Fetch data from an external API
- Conditionally render some elements
- Use of environment variables

## Modules

The most popular packages were used according to [NPM Trends](https://www.npmtrends.com/)

- [`create-react-app`](https://create-react-app.dev/)
- [`react-router-dom`](https://reacttraining.com/react-router/)
- [`react-query`](https://react-query.tanstack.com/)
- [`react-query-devtools`](https://github.com/tannerlinsley/react-query-devtools)
- [`axios`](https://github.com/axios/axios)
- [`date-fns`](https://date-fns.org/)
- [`tailwindcss`](https://tailwindcss.com/)

## Color Palete

The color palette was randomly generated using [Coolors](https://coolors.co/), then the closest match in Tailwind's color palette was used

- Background: #FED7D7 (Red 200)
- Links: #2C7A7B (Teal 700)
- Cards: #F0FFF4 (Green 100)

## Source Map

![Source Map](/docs/source_map.png)

## Todo

- [ ] route-based code splitting
- [ ] use `memo` on some simpler components
- [ ] use `suspense` on data fetching components
- [ ] make skeleton loaders
- [ ] abstract repos into a separate component
- [ ] extract and inline css using `critical`
- [ ] pre-render static html using `react-snap`
- [ ] prefetch links `quicklink`
- [ ] handle form using `formik`
- [ ] validate user input
- [ ] animate using `react-spring`
- [ ] write tests