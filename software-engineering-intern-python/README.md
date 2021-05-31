# Software engineering intern Recrutiment Task

Thank you for taking the time to solve this assignment! We're excited to see what you will build and hope you'll have some fun along the way!

If you didn't have a chance before, have a look at our [website](https://gyfted.me/) to get a deeper understanding of what we're building at Gyfted.


## Introduction
Your task is to implement a small script, which will allow our psychometricians to see how quizzes are built in the system (what questions are in the quiz etc).

### Let us introduce one word, which will make the task easier to understand.
Trait - psychological measure, may be directly or indirectly calculated from the questions.
E.g. to calculate "a big trait" such as 'openness to experience' we need 'smaller' traits such as 'positive thinking' or 'sociability'. 

To be precise let's call 'opennes to experience' - (parent) trait, and 'positive thinking' & 'sociability' subtraits.

In each subtrait object we hold the information about its parent trait. From the example above 'positive thinking' will hold id of the 'openness to experiences' trait in parentTraitId.
 

Each quiz contains a few parent traits and subtraits.
Traits can directly or indirectly be calculated from the questions.
For simplicity let's assume that each question (unique by id) may appear only in one quiz.
Each question object will hold an information about the subtrait it's related to and an id of a quiz it appears in.

## Task
Build a script, which will create a list of descriptions of a quiz in a similar form to: `Quiz title - parent trait label - subtrait label - question label` for all questions in all quizzes.
To test your solution use `mockData.json`.

### Example
Big 5 - openness to experience - positive thinking - question # 1
Big 5 - openness to experience - positive thinking - question # 2
Big 5 - openness to experience - sociability - question # 3
Big 5 20-item - openness to experience - sociability - question # 4

## Bonus Task #1
If you're up for more challenges, there's a bonus task as well. Our psychometricians would benefit from being able to search and sort the data. Implement a set of functions that one could use to alphanumerically sort along a chosen 'dimension': quiz, trait, subtrait or question id. 

## Bonus Task #2
Implement a back-end interface to keep track of all the quizzes and allow for adding or removing quizzes. 

## Feedback
We'll be happy to evaluate and give feedback on the whole project once you're done. What we care about the most in this assignment is correctness of the solution and whether the code is easy to read and understand. Bonus tasks are bonus tasks, don't feel pressured to spend too much time on them if you decide to attempt them.

### Github setup

Please create a private Github repository and add us as collaborators (work@humanexponent.com) once you're ready to share.
If you encounter any issues with the submission please email us (work@humanexponent.com or adam@gyfted.me)

