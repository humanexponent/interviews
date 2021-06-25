import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';

import Link from "../../components/link";
import { useStyles } from "./styles.js";

const Results = ({ loading, test, results, match }) => {
  const classes = useStyles();

  if (!results) {
    return (
      <div>
        <div>No results found. Go {' '}
        <Link to={`/personality-test/${match.params.id}`}>
          <button>here</button>
        </Link>
        {' '} to take the test first.</div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className={classes.progress}>
        <CircularProgress size={60} thickness={5} />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>{test.title} test results</div>
      <div className={classes.scores}>
      {results.map(({name, score}) => {
        return (
          <div key={name} className={classes.score}>
            <div>{`${name}: `}</div>
            <div>{`${score}%`}</div>
          </div>
        )
      })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  test: state.test.test,
  results: state.test.results,
  loading: state.test.loading,
});


export default connect(mapStateToProps)(Results);
