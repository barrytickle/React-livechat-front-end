import React from 'react';
import Grid from "@material-ui/core/Grid";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import {styles} from './styles';
import Button from '@material-ui/core/Button';
import WhatsApp from '@material-ui/icons/WhatsApp';
import NoteIcon from '@material-ui/icons/Note';
import {Email, Sms} from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import SendIcon from "@material-ui/icons/Send";
import './style.css';
import Modal from 'react-modal';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

export default class SendMessageSimple extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: true,
            type: this.props.type
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

    showStatus(media){
        if(media.status){
            return(
                <Grid item xs={12}>
                    <Select
                        native
                        value={''}
                        inputProps={{
                            name: 'age',
                            id: 'note-status',
                        }}
                    >
                        <option aria-label="None" value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                </Grid>
            )
        }
    }


    showHeader(media){
        const type= this.props.type;
        const col = styles.icons[type].background;
        const bg = {
            backgroundColor: col
        }
        let icon = media.icon;
        icon = <icon />;
        return(
            <div className="paperHeader flex flexAlignCenter" style={bg}>
                <icon className="icon"/>
                <span style={{color:"white", fontSize:"24px"}}>{media.status? 'Make note' : 'Send Message'}</span>
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
                    icon:'WhatsApp',
                    subject: false,
                    attachment: false
                }
                break;
            case 'email':
                media ={
                    icon:'Email',
                    subject: true,
                    attachment:true
                }
                break;
            case 'sms':
                media ={
                    icon:'Sms',
                    subject: true,
                    attachment:true
                }
                break;
            case 'note':
                media = {
                    icon:'NoteIcon',
                    subject:false,
                    status:true,
                    attachment:false
                }
                break;
        }

        return media;
    }

    render () {
        let media;
        media = this.type();
        console.log('current media');
        console.log(media);
        return (
            <div>
                <Modal media={media} type={this.state.type} isOpen={this.state.showModal} className="modal">
                    <Paper className="containerDefault">
                        {this.showHeader(media)}
                        <Grid container justify="space-between">
                            <Grid item xs={12} className="flex marginBot flexAlignCenter flexJustifyStart">
                                <div className="reply">
                                    <span>Reply to: Barry Tickle</span>
                                </div>
                            </Grid>
                            {this.showStatus(media)}
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