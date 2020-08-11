import { styles } from '../styles'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import InboxIcon from '@material-ui/icons/Inbox'
import TextField from '@material-ui/core/TextField'
import {UserMessageComponent} from './UserMessagePaper';
const sample_data = [
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    name: "Emily Jane",
    subject: "People",
    message:
      "Welcome to People, your company’s powerful workforce management system.",
    favourite: false
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    name: "Emily Jane",
    subject: "People",
    message:
      "Welcome to People, your company’s powerful workforce management system.",
    favourite: true
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    name: "Emily Jane",
    subject: "People",
    message:
      "Welcome to People, your company’s powerful workforce management system.",
    favourite: true
  },
  {
    avatar: "https://material-ui.com/static/images/avatar/1.jpg",
    name: "Emily Jane",
    subject: "People",
    message:
      "Welcome to People, your company’s powerful workforce management system.",
    favourite: true
  }
];

export const UserMessage = () => {
  return (
    <div className="col userSearch">
      <Paper style={Object.assign(
        styles.textContainer.search,
        styles.shadow
      )}>
        <Grid container spacing={1} alignItems="flex-end" >
          <Grid item>
            <InboxIcon />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="With a grid" />
          </Grid>
        </Grid>
      </Paper>
      <div className="thin-scroll scrollable">
        {sample_data.map((user) => (
          <UserMessageComponent name={user.name} avatar={user.avatar} favourite={user.favourite} subject={user.subject} message={user.message} />
        ))}
      </div>
    </div>

  );
}