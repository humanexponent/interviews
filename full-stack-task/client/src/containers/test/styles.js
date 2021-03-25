import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 800,
  },
  progress: {
    display: "flex",
    alignItems: "center",
    height: "calc(100vh - 40px)"
  }
});
