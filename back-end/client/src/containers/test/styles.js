import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    width: 800,
    paddingBottom: '50px'
  },
  progress: {
    display: "flex",
    alignItems: "center",
    height: "calc(100vh - 40px)"
  },
  question: {
    display: "flex",
    flexDirection: 'column',
    paddingBottom: '30px'
  },
  answer: {
    paddingBottom: '5px'
  },
  questionLabel:  {
    paddingBottom: '8px'
  },
  answerLabel:  {
    paddingLeft: '3px'
  },
  title: {
    paddingBottom: '40px',
    width: '100%',
    fontSize: '25px',
    textAlign: 'center'
  }
});
