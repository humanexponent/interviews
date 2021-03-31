import React, { useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from "./styles.js";

import {
  getTest as getTestAction,
} from "../../actions/index";

const Test = ({test, getTest, match, loading}) => {
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

  console.log("Here's how the test object looks like:", test)

  return (
    <div className={classes.root}>
      Please display questions and answers here
    </div>
  );
};

const mapStateToProps = (state) => ({
  test: state.test.test,
  loading: state.test.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getTest: (id) => dispatch(getTestAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
