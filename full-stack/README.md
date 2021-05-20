# Full-Stack Developer Recruitment Task

Thank you for taking the time to solve this assignment! We're excited to see what you will build and hope you'll have some fun along the way!

If you didn't have a chance before, have a look at our [website](http://gyfted.me/) to get a deeper understanding of what we're building at Gyfted.


## Introduction
Your task is to implement a MERN stack app where users can solve personality tests and get feedback on their answers.

We don't expect you to spend more than `4 hours` on both parts of this assignment. We expect the basic functionality to be there within
this time frame.

If you'd like to challenge yourself and spend more time to polish the app go for it!
We'll be happy to evaluate and give feedback on the whole project once you're done.

### Github setup

Please create a private Github repository and add us as collaborators (work@humanexponent.com) once you're ready to share.
If you encounter any issues with the submission please email us.

### App setup

* Clone current repository and use it as the starter.
* Run `npm install` in main folder and client folder to install dependencies.
* Run `npm run dev` to run the app locally.

## Task [First part]

### Psychometric test

Your task is to build a simple psychometric quiz.
A test consists of multiple questions and each question has a set of possible answers.

There's no one correct answer to a personality test question.
Each possible answer has a corresponding value, e.g. 'Strongly disagree' has a value of `0` and 'Strongly Agree' has a value of `4`.
Let's also assume that each personality score is calculated as the average of all the answers related to it.

Notice that displaying the same questions in the same order may encourage some users to game the system and pick the answers that lead to their desired score values.
To make it difficult to cheat we have a bigger set of questions for each score that we sample from. E.g. for the example test we have 24 possible questions but only 10 are required. 

Your task is to generate a personality quiz with randomly picked questions in each index.
Once you pick the questions in the index you should also randomly shuffle quiz questions and pass them to the front end.

The way you structure the quiz object (sent as a response) is up to you, but make it a single object that holds basic quiz data and both questions and answers.

Send quiz data as a response and display it in front end (inside Test component) as a set of questions and possible answers that user can answer.

## Task [Second part]

After user completes the test, send it to the backend. Again, the structure of this post request is up to you.
Calculate personality scores in the backend given `quizTraits` that describe how to calculate them.
Then, on the frontend, display these scores on a new results page in a simple `trait:numericalScore` format.

For example - if a user answers 'Disagree' and 'Neither' to questions measuring Openness - he should see "Openness: 25%" on the result page.
Why 25%? The average of his answers (0 and 1) is 0.5 which is 25% out of the highest possible score, which is 2.

Example data is available in `mockedData.js`, please use it as a mocked database.

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
