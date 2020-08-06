import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    maxWidth: 1200,
  },
  progress: {
    display: "flex",
    alignItems: "center",
    height: "calc(100vh - 40px)"
  }
});
