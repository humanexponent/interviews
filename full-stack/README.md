# Full-Stack Developer Recruitment Task

Thank you for taking time to solve this assignment! We're excited to see what you will build and hope you'll have some fun along the way!

## Introduction
Your task is to implement a MERN stack app where users can solve personality tests and get feedback on their answers.

We don't expect you to spend more than `4 hours` on this assignment. We expect the basic functionality to be there within
this time frame.

If you'd like to challenge yourself and spend more time to polish the app go for it!
We'll be happy to evaluate and give feedback on the whole project once you're done.

### Github setup

Please create a private Github repository and add us as collaborators (work@humanexponent.com) once you're ready to share.
If you encounter any issues with the submission please email us.

### App setup

* Clone current repository and use it as the starter.
* Run "npm install" in main folder and client folder to install dependencies
* Run "npm run dev" to run the app locally

## Task

### Psychometric test

Consider having a standard psychometric test.
Test consists of multiple questions and each question has a set of possible answers.
Tests such as Big-5 (measuring personality scores, such as: Extraversion or Agreeableness) do not have a correct answer and each answer has some associated value e.g. answer representing option 'Strongly disagree' has value 1 and option 'Strongly Agree' has value 5.
For simplicity let's assume that each score (extraversion, agreeableness, etc.) is calculated as the average of answers used for calculating this score.
Obviously, if we always display the same questions some users would try to game the test and get scores which would satisfy them.
To make their cheating more difficult we have a bigger set of questions than it's required by test. For example for the example test, which requires only 10 questions, we have 24 possible questions.
Additional feature would be to randomly shuffle quiz questions.

Your task is to generate a whole quiz with randomly picked questions in each index and then randomly shuffle quiz questions and pass them to front end. The way you structure quiz object (sent as a response) is up to you, but make it a single object that holds both questions and answers

After user completes the test, send it to backend. Again, structure of this post request is up to you. Then calculate scores in the backend given information from quizTraits about which questions are needed to calculate numerical scores. Then, on the frontend, display these scores on a new results page in a simple trait:numericalScore format.

For example - if user answers 'Disagree' and 'Neither' to questions measuring Openness - he should see "Openness: 25%" on the result page. Why 25%? The average of his answers (0 and 1) is 0.5 which is 25% out of the highest possible score, which is 2.

An example data is available in mockedData.js, please use it as a mocked database.


## Good to have

1. Clean code (linters, prettier)
2. UI kit for styles (or styled-components)
3. Tests
4. Exception handling
5. Usage of modern js functionality (ES6+)
6. Deployed app

## What will we be paying attention to:
* Can we run your code?
* Can we understand your code?
* How you architected your app, e.g. how you split the code into components.
* If / how did you make your components reusable.
* How and where you put your business logic.

## What we'll be paying less attention to:
* For this assignment we're less interested in how pretty the app looks, but rather how functional and reliable it is.
