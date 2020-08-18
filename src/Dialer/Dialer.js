import React, {Component} from "react";
import Modal from 'react-modal';
import './dialer.css';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';

export default class Dialer extends Component {
    constructor(props){
        super(props);

        this.state ={
            dialValue: '',
            buttons: [1,2,3,4,5,6,7,8,9,0,'#','*'],
            buttonStyle:{
                button:'',
                style:'outlined',
            },
            showModal:true,
            clear: {
                variant:'outlined',
                disabled: 'disabled'
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleCall = this.handleCall.bind(this);
        this.updateButtons = this.updateButtons.bind(this);

        const list = this.state.buttons;
        for(let i = 0; i < list.length; i++){
            // let btn = 'button'+list[i];
            this[`${i}_button`] = React.createRef()
        }


    }

    updateButtons(list){
        return this.setState({buttons: list});
    }

    handleChange(event) {
        const val = event.target.value;
        const letter = val.charAt(val.length-1);
        const numbers = /^[0-9]+$/;
        if(val.match(numbers) || val.includes("#") || val.includes('*') || val.includes(' ') || val.includes('+')){
            const ref = this[`${letter}_button`];
            this.setState({
               buttonStyle:{
                   button: `${letter}_button`,
                   style: 'outlined'
               }
            });
            if(val.length > 0){
                this.setState(
                    {
                        clear:{
                            variant:'contained',
                            disabled:''
                        }
                    }
                );
            }else{
                alert('this should fire');
                this.setState({
                    dialValue: ''
                });
            }
            this.setState({dialValue: event.target.value});
        }
    }

    handleClear(){
        this.setState({
            dialValue:'',
            clear:{
                variant:'outlined',
                disabled:'disabled'
            }
        });
    }

    handleCall(){
        console.log(this.state);
    }

    render(){
        let list = [];
        for (let i = 1; i <= 9; i++) {
            list.push(i);
        }
        list.push('*', 0, '#');
        const ButtonGroup = list.map((value, ind) =>
          <Button key={"Button-" + ind} ref={this[`${value}_button`]} variant={this.state.buttonStyle.button === `${value}_button` ? this.state.buttonStyle.style : ''}>{value}</Button>
        );
        return (
                <Grid container className="dialerModal">
                    <div className="dialerBox">
                        <header>
                            <Grid container justify="space-between">
                                <Typography style={{fontWeight:"bold"}}>
                                    Dialer
                                </Typography>
                                <CloseIcon onClick={this.handleModal}/>
                            </Grid>
                            <TextField
                                placeholder="Enter or Paste number"
                                style={{width:"100%", color:"white", fontWeight:"bold"}}
                                value={this.state.dialValue}
                                onChange={this.handleChange}
                            />
                        </header>
                        <main>
                            <Grid container justify="space-between" className="dialerButtons">
                                {ButtonGroup}
                            </Grid>
                            <Grid container justify="space-between">
                                <Button
                                    color="primary"
                                    variant="contained"
                                    style={{width:"45%", fontSize:"20px"}}
                                    onClick={this.handleCall}
                                >Call</Button>
                                <Button
                                    {...this.state.clear}
                                    color='secondary'
                                    style={{width:"45%", fontSize:"20px"}}
                                    onClick={this.handleClear}
                                >Clear</Button>
                            </Grid>
                        </main>
                    </div>
                </Grid>
        )
    }
}