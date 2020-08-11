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
          display:"flex"
      },
      flexJustify:{
              flexStart:{
                  justifyContent:"flex-start"
              },
              flexEnd:{
                  // justifyContent:"flex-end"
                  justifyContent:"flex-end"
                  // color:"blue"
              }
      },
      flexAlign:{
              center:{
                  alignItems:"center"
              }
      }
    },
    icons:{
        default:{
            marginRight:"30px",
            height:"50px",
            width:"50px",
            color:"white",
        },
        whatsapp:{
            background:"#00e676"
        },
        email:{
            background:"#0099FF"
        },
        sms:{
            background:"#F56A6A"
        }
    },
    container:{
        default:{
            boxShadow:"0px 30px 60px rgba(0,0,0,0.16)",
            padding:"20px 50px",
            borderRadius: "10px",
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            paddingTop:"0",
            maxWidth:"50%",
            width:"100%",
            margin:"0 auto",
            boxSizing:"border-box",
            paperHeader:{
              marginBottom:"20px",
              padding:"20px 50px",
              margin:"0 -50px 20px -50px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius:"10px"
            },
            marginBot:{
                marginBottom:"20px"
            }
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
                <Grid item xs={12}>
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

    showHeader(media){
        let type= this.props.type;
        let col = styles.icons[type].background;
        let bg = {
            backgroundColor: col
        }
        return(
            <div className="PaperHeader" style={Object.assign(styles.container.default.paperHeader, bg, styles.default.flex, styles.default.flexAlign.center)}>
                {media.icon}
                <span style={{color:"white", fontSize:"24px"}}>Send Message</span>
            </div>
        );
    }

    render(){

        const media = this.state();
        return (

            <Paper style={Object.assign(styles.container.default)}>
                {this.showHeader(media)}
                <Grid container justify="space-between">
                    <Grid item xs={12} style={Object.assign(styles.default.flex, styles.container.default.marginBot, styles.default.flexAlign.center, styles.default.flexJustify.start)}>
                        <div style={styles.container.reply}>
                            <span style={styles.container.reply.text}>Reply to: Barry Tickle</span>
                        </div>
                    </Grid>
                </Grid>
                <Grid container style={{width:"100%"}}>
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
                        <Grid item justify="flex-end" sm={12} md={5} style={Object.assign(styles.default.flex)}>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Send <SendIcon style={{color:"white", marginLeft:"10px",}}/>
                            </Button>
                        </Grid>

                    </Grid>
            </Paper>
        );
    }
}