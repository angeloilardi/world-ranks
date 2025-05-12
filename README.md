<h1 align="center">WORLD RANKS | devChallenges</h1>

<div align="center">
   Solution for a challenge <a href="https://devchallenges.io/challenge/country-page" target="_blank">Country Page - WorldRanks
</a> from <a href="http://devchallenges.io" target="_blank">devChallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://world-ranks-rouge.vercel.app/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenge/country-page">
      Challenge
    </a>
  </h3>
</div>

## Table of Contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Built with](#built-with)
- [Features](#features)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## Overview

![screenshot](./public/images/Screenshot%202025-05-12%20at%2017.26.47.png)

Web app with insightful data abot every single country in the world. What's the most populous country? What language do they speak? What currency do they use?

### What I learned

The biggest learning was how to best approach sorting and filtering of data. I used plain JS for this purpose but I might look for a library that does that in the future.
Another fun part was mastering TypeScript to make sure the app has a rock solid type safety in place.

### Useful resources

- [Formik documenttion](https://www.formik.org) - This made the form handling so much easier
- [NextJS Data Fetching](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching) - Making use of their native server-side data fetch

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [Formik](https://formik.org)

## Features

- By default, users can see a list of all countries sorted by population.
- Users can choose to sort by name alphabetical order or population or area (km²).
- Users can choose to filter by multiple regions, the regions can be Americas, Antarctic, Africa, Asia, Europe, or Oceania.
- Users can choose to filter countries that are members of the United Nations.
- Users can choose to filter countries that are independent.
- Users can filter/search for countries by their names, regions or subregions.
- Users can see the total number of countries.
  Users can select a country and see more details on a country page.
- On the country page, users can see info like population, area, capital,....
- On the country page, users can see the neighboring countries.
- On the country page, when users select a neighboring country, it should redirect to the according country page.

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges-dashboard) challenge.

## Contact

- Website [https://angelo-ilardi.vercel.app/](https://angelo-ilardi.vercel.app/})
- GitHub [@angeloilardi](https://github.com/angeloilardi})

## Acknowledgements

- [REST Countries](https://restcountries.com/) for the precious data
