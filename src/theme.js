import { createTheme } from "@mui/material/styles";
import {  makeStyles } from "@mui/styles";
import { red } from "@material-ui/core/colors";

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#F5F5F5',
            darker: '#053e85',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        },
});

export const useStyles = makeStyles((theme) => ({
  cardHeaderRoot: {
    backgroundColor: theme.palette.grey[400]
  },
  cardHeaderAction: {
    margin: "auto",
    alignContent: "center"
  },
  root: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardHeaderTitleRoot: {
    color: theme.palette.error.main,
    textAlign: "center"
  },
  cardHeaderSubTitleRoot: {
    color: theme.palette.error.main,
    textAlign: "center"
  }
}));