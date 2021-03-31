import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 250,
    height: 250,
    margin: 50,
    display: "inline-flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0px 0px 10px #bbb",
  },
  actions: {
    paddingBottom: "25px",
  },
  button: {
    textTransform: "capitalize",
  },
  label: {
    display: "flex",
    fontWeight: "bold",
    paddingTop: "15px",
  },
});
