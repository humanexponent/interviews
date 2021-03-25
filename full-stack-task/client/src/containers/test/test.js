import React, { useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import TestPageHeader from '../../components/TestPageHeader';
import TestQuestions from '../../components/TestQuestions';

import { useStyles } from "./styles.js";

import {
  getTest as getTestAction,
} from "../../actions/index";

const Test = ({test, getTest, match, loading, loaded}) => {
  const classes = useStyles();

  useEffect(() => {
    getTest(match.params.id);
  }, [getTest, match]);

  if (loading) {
    return (
      <div className={classes.progress}>
        <CircularProgress size={60} thickness={5} />
      </div>
    )
  }

  if (!test) return <div className={classes.root}>
    Failed to load a test
  </div>

  return (
    <div className={classes.root}>
      <TestPageHeader quizData={test.quizData} />
      <div className='row'>
        <div className='col'>
          {test.quizData.description}
        </div>
      </div>
      <TestQuestions testData={test} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  test: state.test.test,
  loading: state.test.loading,
  loaded: state.test.loaded,
});

const mapDispatchToProps = (dispatch) => ({
  getTest: (id) => dispatch(getTestAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
