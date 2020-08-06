import React, { useEffect } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStyles } from "./styles.js";
import Tile from "../../components/tile/tile";
import { getTests as getTestsAction } from "../../actions/index";

const Home = ({ tests, getTests }) => {
  const classes = useStyles();

  useEffect(() => {
    getTests();
  }, [getTests]);

  if (!tests) {
    return (
      <div className={classes.progress}>
        <CircularProgress size={60} thickness={5} />
      </div>
    )
  }

  return (
    <div className={classes.root}>
      {tests.length === 0
        ? <div>No available tests</div>
        : tests.map((test) => (<Tile {...test} key={test.id} />))
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  tests: state.tests.tests,
});

const mapDispatchToProps = (dispatch) => ({
  getTests: () => dispatch(getTestsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
