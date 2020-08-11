import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import "./css/tabs.css";
import "./css/scroll.css";
import "./css/usersearch.css";

import {styles} from "./styles";
import MessageBox from './components/MessageBox';

export default class SendMessageAlt extends React.Component {
  state() {}

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Typography
          component="div"
          style={Object.assign(
            styles.modal.base,
            styles.flexDefault,
            styles.flexCentered
          )}
        >
          <Paper
            elevation={3}
            style={Object.assign(styles.flexDefault, styles.textContainer.base)}
          >
            <MessageBox />
          </Paper>
        </Typography>
      </React.Fragment>
    );
  }
}
