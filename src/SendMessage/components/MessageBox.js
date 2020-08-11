import React from 'react';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import {styles} from '../styles'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'

import PhoneIcon from '@material-ui/icons/Phone';
import VideocamIcon from '@material-ui/icons/Videocam';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SendIcon from '@material-ui/icons/Send';
import {MessageBoxMessage} from './MessageBoxMessage';

import {sample_data} from './SampleMessageData';
import {Send} from "@material-ui/icons";

const badge = {
  color: 'primary',
  typography: 'Online'
}

const Online = (props) => {
  switch(props.status) {
    case 'online':
      badge.color = 'success';
      break;

    case 'offline':
      badge.color = 'secondary';
      badge.typography = 'Offline';
      break;

  }
  return(
    <Badge
      variant="dot"
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Typography>{badge.typography}</Typography>
    </Badge>
  );
};

export default class MessageBox extends React.Component {

  render(){

    const status = {
      online: 'true',
      platform: 'default'
    };

    return (
      <Paper style={{width:"100%"}}>
        <Grid
          container
          spacing={3}
          style={styles.messageBox.base}
          alignItems="center"

        >
          <Grid item xs={12} md={5}>
            <Typography variant="h4">Jessica Carol</Typography>
            <p style={{margin:"0", opacity:"0.6"}}>Last seen 8 hours ago</p>
          </Grid>

          <Grid item xs={12} md={3}>
            {status.online ? <Online status="online" /> : <Online status="offline" />}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            style={{display:"flex", justifyContent:"flex-end"}}
          >
            <Button style={{opacity:0.6}}>
              <PhoneIcon />
            </Button >
            <Button style={{opacity:0.6}} >
              <VideocamIcon/>
            </Button>
            <Button style={{opacity:0.6}}>
              <MoreHorizIcon/>
            </Button>
          </Grid>
        </Grid>
        <hr style={{background:"#d2d2d2", height:"0.5px", border:"none"}}/>
        <Grid container style={Object.assign(styles.messageBox.chatArea, styles.messageBox.base)}>
          {sample_data.map((message) => (
            <MessageBoxMessage sender={message.sender} message={message.message} time={message.time} social={message.social}/>
          ))}

        </Grid>
        <hr style={{background:"#d2d2d2", height:"0.5px", border:"none", marginBottom:"0"}}/>
        <Grid container alignItems="center">
            <Grid item xs={12} md={11}>
                <input placeholder="Enter Message here" style={{
                    padding:"15px",
                    marginTop:"5px",
                    height:"100%",
                    width:"100%",
                    boxSizing:"border-box",
                    border:"none",
                    fontSize:"18px"
                }}/>
            </Grid>
            <Grid item xs={12} md={1}>
                <Button>
                    <SendIcon style={{color:"#1976d2"}}/>
                </Button>
            </Grid>
        </Grid>
      </Paper>
    );
  }
}