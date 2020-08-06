import React from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import { useStyles } from "./styles.js";

import Link from "../link";

const Tile = ({_id, quizTitle}) => {
  const classes = useStyles();

  return (
    <Card
      key={`personality test ${_id}`}
      className={classes.root}
    >
      <CardContent>
        <div className={classes.label}>{quizTitle}</div>
      </CardContent>
      <CardActions className={classes.actions}>
        <Link to={`/personality-test/${_id}`}>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="small"
          >
            Start
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Tile;
