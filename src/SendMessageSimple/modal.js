import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import Paper from "@material-ui/core/Paper";
import {styles} from './styles';
import AttachFileIcon from "@material-ui/icons/AttachFile";


export default class Modal extends React.Component{


    render(){
        let media = this.props.media;
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
        )
    }
}
