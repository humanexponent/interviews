# Full-Stack Developer Recruitment Task

Thank you for taking the time to solve this assignment! We're excited to see what you will build and hope you'll have some fun along the way!

If you didn't have a chance before, have a look at our [website](http://gyfted.me/) to get a deeper understanding of what we're building at Gyfted.


## Introduction
Your task is to implement backend portion of a MERN stack app where users can solve personality tests and get feedback on their answers.
There is no database set up. All you need is in `mockedData.js` file from which you can import the necessary data into `routes/api/quizzes.js`.
Frontend part is already done & you should not change anything in the client folder.

We don't expect you to spend more than `2.5 hours` on this assignment.
We'll be happy to evaluate and give feedback on the whole project once you're done.

### Github setup

Please create a private Github repository and add us as collaborators (work@humanexponent.com) once you're ready to share.
If you encounter any issues with the submission please email us.

### App setup

* Clone current repository and use it as the starter.
* Run `npm install` in main folder and client folder to install dependencies.
* Run `npm run dev` to run the app locally.
* You should see a working version of the app, with fake/example data returned from backend.

## Task [First part]

### Psychometric test

Your first task is to build a simple psychometric quiz. The test should be fetched using `/api/tests/:id` (in `routes/api/quizzes.js`), which is executed after user clicks on a test tile. 
A test consists of multiple questions and each question has a set of possible answers. Have a look at mocked data in `mockedData.js` file.

There's no correct answer to a personality test question.
Each possible answer has a corresponding value, e.g. 'Strongly disagree' has a value of `0` and 'Strongly Agree' has a value of `4`.

Notice that displaying the same questions in the same order may encourage some users to game the system and pick the answers that lead to their desired score values.
To make it difficult to cheat we have a bigger set of questions for each score that we sample from. E.g. we have 27 possible quiz questions in `mockedData.js` but only 10 are required.

Your task is to *generate a personality quiz with randomly picked questions in each index.
Once you pick the questions in the index you should also randomly shuffle quiz questions and pass them to the front end.
Additionally, return all the answer objects for each quiz question in the `answers` key.*
You can find a correctly formatted response in `routes/api/quizzes.js`.

## Task [Second part]

After user completes the test, it is sent to backend.

*Calculate personality scores in the backend* given `quizTraits` that describe which questions you need for which trait. Eech personality score is calculated as the average of all the answers related to it.

For example - if a user answers 'Neither' (value: 2 out of 4 possible answers) and 'Agree' (value: 2 out of 2 possible answers) to questions measuring Extraversion - he should see "Extraversion: 75%" on the result page. Why 75%? First answer gives him 50% and the second answer 100%. The average of the two is 75%.
Again, you can find a correctly formatted response in `routes/api/quizzes.js`.

## What will we be paying attention to:
* Can we run your code?
* Do the endpoints return correct data?
* Can we understand your code?
