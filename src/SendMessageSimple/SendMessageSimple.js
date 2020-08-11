import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {WhatsApp, Sms, Email} from "@material-ui/icons";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const styles = {
    default:{
      flex:{
          display:"flex",
          justify:{
              end:{
                  justifyContent:"flex-end"
              },
              start:{
                  justifyContent:"flex-start"
              }
          },
          align:{
              center:{
                  alignItems:"center"
              }
          }
      }
    },
    icons:{
        default:{
            marginRight:"30px",
            height:"50px",
            width:"50px"
        },
        whatsapp:{
            color:"#00e676"
        },
        email:{
            color:"#0099FF"
        },
        sms:{
            color:"#F56A6A"
        }
    },
    container:{
        default:{
            boxShadow:"0px 30px 60px rgba(0,0,0,0.16)",
            padding:"20px 50px",
            maxWidth:"50%",
            margin:"0 auto",
            boxSizing:"border-box"
        },
        reply:{
            padding:"10px",
            background:"rgba(0,0,0,0.05)",
            borderRadius:"5px",
            text:{
                color:"#1C3F7B",
                opacity: "0.7"
            }
        },
        textarea:{
          width:"100%",
          margin:"20px auto"
        }
    }
}

export default class SendMessageSimple extends React.Component {
    state (){
        let type = this.props.type;
        type = type.toLowerCase();
        let media;
        switch(type){
            case 'whatsapp':
                media = {
                    icon:<WhatsApp style={Object.assign(styles.icons.whatsapp, styles.icons.default)} />,
                    subject: false,
                    attachment: false
                }
                break;
            case 'email':
                media ={
                    icon:<Email style={Object.assign(styles.icons.email, styles.icons.default)} />,
                    subject: true,
                    attachment:true
                }
                break;
            case 'sms':
                media ={
                    icon:<Sms style={Object.assign(styles.icons.sms, styles.icons.default)} />,
                    subject: true,
                    attachment:true
                }
        }

        return media;
    }

    showSubject(media){
        if(media.subject){
            return (
                <Grid item xs={12} md={5}>
                    <TextField id="outlined-basic" label="Subject" variant="outlined" style={{width:"100%"}}/>
                </Grid>
            );
        }
    }

    showAttachment(media){
        if(media.attachment){
            return (
                <Button>
                    Add Attachment <AttachFileIcon/>
                </Button>
            );
        }
    }

    render(){

        const media = this.state();
        // const icon = this.components[media.icon];
        return (
            <Paper style={Object.assign(styles.container.default)}>
                <Grid container justify="space-between">
                    <Grid item xs={12} md={4} style={Object.assign(styles.default.flex, styles.default.flex.align.center, styles.default.flex.justify.start)}>
                        {media.icon}
                        <div style={styles.container.reply}>
                            <span style={styles.container.reply.text}>Reply to: Barry Tickle</span>
                        </div>
                    </Grid>
                    {this.showSubject(media)}
                </Grid>
                    <Grid container>
                        <TextField
                            required
                            id="standard-required"
                            label="Enter Message"
                            variant="outlined"
                            style={styles.container.textarea}
                            multiline
                            rows={10}
                        />
                    </Grid>
                    <Grid
                        container
                        justify="space-between"
                    >
                        <Grid item sm={12} md={5}>
                            {this.showAttachment(media)}
                        </Grid>
                        <Grid item sm={12} md={5} style={Object.assign(styles.default.flex, styles.default.flex.justify.end)}>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Send <SendIcon style={{color:"white", marginLeft:"10px"}}/>
                            </Button>
                        </Grid>

                    </Grid>
            </Paper>
        );
    }
}