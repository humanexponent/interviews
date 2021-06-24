import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  progress: {
    display: "flex",
    alignItems: "center",
    height: "calc(100vh - 40px)"
  },
  container: {
    display: "flex",
    flexDirection: 'column'
  },
  title: {
    display: "flex",
    fontSize: "25px",
    paddingBottom: "20px"
  },
  scores: {
    display: "flex",
    paddingTop: "5px",
    flexDirection: 'column'
  },
  score: {
    display: "flex",
    paddingBottom: "5px",
    justifyContent: "space-between"
  },
});
