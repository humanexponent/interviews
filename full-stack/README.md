# Full-Stack Developer Recruitment Task

Thank you for taking time to solve this assignment! We're excited to see what you will build and hope you'll have some fun along the way!

## Introduction
Your task is to implement a MERN stack app where users can solve personality tests and get feedback on their answers.

We don't expect you to spend more than `2 hours` on this assignment. We expect the basic functionality to be there within
this time frame.

If you'd like to challenge yourself and spend more time to polish the app go for it!
We'll be happy to evaluate and give feedback on the whole project once you're done.

## Setup and submission

### Github setup

Please create a private Github repository and add us as collaborators (work@humanexponent.com) once you're ready to share.
If you encounter any issues with the submission please email us.

### App setup

* Clone current repository and use it as the starter.
* Please include any extra instructions how to run your app in a `README.md` file if necessary

## Task

### Psychometric test

Consider having a standard psychometric test.
Test consists of multiple questions and each question has a set of possible answers.
Tests such as Big-5 (measuring personality scores, such as: Extraversion or Agreeableness) do not have a correct answer and each answer has some associated value e.g. answer representing option 'Strongly disagree' has value 1 and option 'Strongly Agree' has value 5.
For simplicity let's assume that each score (extraversion, agreeableness, etc.) is calculated as the average of answers used for calculating this score. 
Obviously, if we always display the same questions some users would try to game the test and get scores which would satisfy them. 
To make their cheating more difficult we have a bigger set of question than it's required by test. For example for the example test, which requires only 10 questions, we have 24 possible questions. 
Additional feature would be to randomly shuffle quiz questions. 

Your task is to generate a whole quiz with randomly picked questions in each index and then randomly shuffle quiz questions and pass them to front end.
After user fills the test, calculate scores given information from quizTraits about which questions are needed to calculates scores and display results in a new page in a simple 'score': 'result' format.

An example data is available in mockedData.js, please us it as a mocked database.


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
* For this assignment we're less interested in how pretty the app looks like, but rather how functional and reliable it is.





