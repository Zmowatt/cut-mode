# Cut Mode

## Overview
Cut Mode is a simple nutrition tracking app I built to help track calories and macros without all the noise you get from most apps. 

The idea was to create something clean where you can:
- search foods
- log what you eat
- see where you're at for the day
- adjust your targets
- and get quick suggestions on what you're missing

---

## The Problem
Tracking nutrition can be inconsistent and honestly kind of annoying.

A lot of apps are: 
- cluttered
- overcomplicated
- or just not built for how people actually eat day-to-day

I wanted something that:
- gives quick answers
- keeps things simple
- and actually helps make decisions in the moment

---

## The User
This is for:
- people trying to lose weight (cutting)
- people tracking macros
- anyone who wants a simple way to stay on top of what they're eating

---

## The Solution
Cut Mode lets you:
- search real food data using an API
- add foods to your daily log
- track total calories, protein, carbs and fat
- set your own targets
- and see what you still need (or what've gone over)

---

## Features
- Food search (USDA API)
- Add/remove foods from your daily log
- Dashboard with macro totals
- Summary bar showing consumed vs target + remaining
- Settings page to update your targets
- Suggestions based on what you're missing

---

## Routes
- `/` --> Home (search + add foods)
- `/dashboard` --> View totals + logged foods
- `/suggestions` --> Get recommendations
- `/settings` --> Update targets

---

## Tech Stack
- React
- React Router
- JavaScript
- Vite 
- Inline CSS

---

## API Used
USDA FoodData Central API

---

# Setup Instructions
1. Clone the repo

2. Install dependencies
npm install

3. Create a `.env` file:
VITE_USDA_API_KEY=your_api_key_here

4. Start the app:
npm run dev

---

## Challenges
- Managing state across multiple ages
- Passing data between components cleanly
- Working with API data and pulling out the right nutrients
- Debugging props and making sure everything updates correctly

---

## Future Improvements
- Save data with localStorage
- Adding serving sizes
- Add visual progress bar
- Improve suggestion logic
- Make it more mobile-friendly