import React from 'react';
import Grid from '@material-ui/core/Grid';
import {customer_data} from './SampleMessageData';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import {social} from './SampleMessageData';

export const MessageBoxMessage = (props) => {

    const just = (props.sender === 'user') ? 'flex-end' : 'flex-start';
    const img = (props.sender === 'user');

    let det;
    let styles;


    if(props.sender === 'user'){
        det = {
            name: 'You'
        }
        styles = {
            align:"right",
            color:"#eeeeee",
            font: "#000"
        }
    }else{
        let col = props.social;
        const colour = social[col];
        det = {
            name: customer_data.name,
            avatar: customer_data.avatar

        }
        styles = {
            align: "left",
            color: colour,
            font: "#ffffff"
        }
    }

    return (
        <Grid
            container
            direction="row"
            justify={just}
            style={{marginBottom:"10px"}}
            spacing={3}
        >
            <Grid item xs={12} md={6} style={{display:"flex", justifyContent:just}}>
                {det.avatar ? <Avatar style={{marginRight:"10px"}} alt={det.name} src={det.avatar} /> : ''}
                <div style={{display:"flex", flexDirection:"column"}}>
                    <small style={{textAlign: styles.align}}>{det.name}</small>
                    <Paper style={{padding:"10px 20px", background:styles.color, boxShadow:styles.shadow}}>
                        <p style={{margin:"0", textAlign:styles.align, color:styles.font}}>{props.message}</p>
                    </Paper>
                    <small style={{textAlign: styles.align, opacity:"0.7", fontStyle:"italic", marginTop:"5px"}}>{props.time}</small>
                </div>


            </Grid>
        </Grid>
    );
}