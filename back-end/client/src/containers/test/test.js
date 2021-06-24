import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

import Link from "../../components/link";

import { useStyles } from "./styles.js";

import {
  getTest as getTestAction,
  submitAnswers as submitAnswersAction
} from "../../actions/index";

const Test = ({test, getTest, match, submitAnswers, loading}) => {
  const classes = useStyles();

  const [userAnswers, setUserAnswers] = useState([])

  useEffect(() => {
    getTest(match.params.id);
  }, [getTest, match]);

  if (loading || !test) {
    return (
      <div className={classes.progress}>
        <CircularProgress size={60} thickness={5} />
      </div>
    )
  }

  const handleSelect = (questionId, answerId) => () => {
    const answerAlreadySelected = userAnswers.find(
      userAnswer => userAnswer.questionId === questionId
    )

    if (answerAlreadySelected) {
      setUserAnswers(userAnswers.map(
        ans => ans.questionId === questionId ? {questionId, answerId} : ans
      ))
    } else {
      setUserAnswers([...userAnswers, {questionId, answerId}])
    }
  }

  const disabled = userAnswers.length < test.quizQuestions.length

  return (
    <div className={classes.root}>
      <div className={classes.title}>{test.title}</div>

      {test.quizQuestions.map(question => {
        return (
          <div key={question._id} className={classes.question}>
            <div className={classes.questionLabel}>{question.label}</div>

            {question.answers.map(({value, _id, label}) => {
              return (
                <div key={question._id + _id} className={classes.answer}>
                  <input
                    type="radio"
                    name={question.label}
                    onClick={handleSelect(question._id, _id)}
                    value={value}
                  ></input>
                  <label className={classes.answerLabel}>{label}</label>
                </div>
              )
            })}

          </div>
        )
      })}

      {disabled ? (
        <button
          disabled
          onClick={() => submitAnswers({quizId: test._id, userAnswers})}
        >
          Submit
        </button>
      ) : (
        <Link to={`/personality-test/${test._id}/results`}>
          <button onClick={() => submitAnswers({quizId: test._id, userAnswers})}>
            Submit
          </button>
        </Link>
      )}

    </div>
  );
};

const mapStateToProps = (state) => ({
  test: state.test.test,
  loading: state.test.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getTest: (id) => dispatch(getTestAction(id)),
  submitAnswers: (data) => dispatch(submitAnswersAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
