import React, { useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from "./styles.js";

import {
  getTest as getTestAction,
} from "../../actions/index";

const Test = ({test, getTest, match}) => {
  const classes = useStyles();

  useEffect(() => {
    getTest(match.params.id);
  }, [getTest, match]);

  if (!test) {
    return (
      <div className={classes.progress}>
        <CircularProgress size={60} thickness={5} />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <div>Render questions and answers here</div>
      <div>based on test object</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  test: state.test.test,
});

const mapDispatchToProps = (dispatch) => ({
  getTest: (id) => dispatch(getTestAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
