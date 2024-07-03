# React Results App

[Video of react results app](https://drive.google.com/file/d/1dS7c7h5rCek-sDJ_mkDt4ts0ycbbZ4cA/view?usp=sharing)

Simple and responsive football match result app with match detail and statistics built using React and TypeScript. It includes one page with two tabs. On the detail tab, you can see match details like goals, and minutes. On the statistic tab, you can see the whole statistics of the game like yellow cards, shoots on target, and possession.

## Quick Start

Make sure you have the following installed on your computer:

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

Clone the repository

```bash
git clone https://github.com/Roko03/react-results-app.git
cd react-results-app
```

Installation

```bash
npm i
#or
npm install
```

Running the Project

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project

## Summary

For this project, I utilized a React template that I created, incorporating a well-organized SCSS structure where each component has its folder.

**Design and Styling**

Firstly, I defined style, including typography, colors, and fonts. Each component is styled using a dedicated SCSS file with CSS modules for better folder structure.

**TypeScript Integration**

I created TypeScript types for the data used in the components.

**Challenges and Solutions**

One of the most challenging aspects of this project was designing objects for teams and implementing functions to set statistics and game results. I am very proud of a function I designed, where you just need to invoke four arguments:

- **Functionality** - what function will do(addition or removal)
- **Team** - the team for which the functionality will be applied
- **TeamName** - name of the team
- **Variant** - which object value will be affected

## Time Spent

I need 15-20 hours of work to make this project.

## Project Structure

- **Folders and Files:** The project follows modular structure for folder with components, pages and utilities
- **Technologies Used:** React.js, SCSS, TypeScript
- **Considerations:** The main focus is on creating clean and reusable components, understanding what types of data will be displayed, and how to organize the project

## Live demo

You can view the live demo of the project [here](https://react-result-app.netlify.app/).
