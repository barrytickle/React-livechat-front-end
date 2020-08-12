import React from 'react';
import Grid from "@material-ui/core/Grid";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {styles} from './styles';
import Button from '@material-ui/core/Button';
import {Email, Sms, WhatsApp} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import SendIcon from "@material-ui/icons/Send";
import './style.css';
import Modal from 'react-modal';

export default class SendMessageSimple extends React.Component {
    constructor () {
        super();
        this.state = {
            showModal: false,
            type: 'sms'
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
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
            <div className="paperHeader flex flexAlignCenter" style={bg}>
                {media.icon}
                <span style={{color:"white", fontSize:"24px"}}>Send Message</span>
            </div>
        );
    }

    type (){
        let type = this.state.type;
        type = type.toLowerCase();
        let media;
        switch(type){
            case 'whatsapp':
                media = {
                    icon:<WhatsApp className="icon" />,
                    subject: false,
                    attachment: false
                }
                break;
            case 'email':
                media ={
                    icon:<Email className="icon" />,
                    subject: true,
                    attachment:true
                }
                break;
            case 'sms':
                media ={
                    icon:<Sms className="icon" />,
                    subject: true,
                    attachment:true
                }
        }

        return media;
    }

    render () {
        let media;
        media = this.type();
        console.log(media);
        return (
            <div>
                <button onClick={this.handleOpenModal}>Trigger Modal</button>
                <Modal media={media} type={this.state.type} isOpen={this.state.showModal} className="modal">
                    <Paper className="containerDefault">
                        {this.showHeader(media)}
                        <Grid container justify="space-between">
                            <Grid item xs={12} className="flex marginBot flexAlignCenter flexJustifyStart">
                                <div className="reply">
                                    <span>Reply to: Barry Tickle</span>
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
                                style={styles.textarea}
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
                            <Grid item justify="flex-end" sm={12} md={5} className="flex">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={this.handleCloseModal}
                                    style={{marginRight: "10px"}}
                                >
                                    Cancel
                                </Button>

                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Send <SendIcon style={{color:"white", marginLeft:"10px"}}/>
                                </Button>
                            </Grid>

                        </Grid>
                    </Paper>
                </Modal>
            </div>
        );
    }

}