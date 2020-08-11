import Tabs from '../SendMessageTabFunc'
import Avatar from '@material-ui/core/Avatar'
import InboxIcon from '@material-ui/icons/Inbox'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import React from 'react'

import {styles} from "../styles";
import {UserMessage} from "./userMessage";
import MessageBox from "./MessageBox";

const TabList = ({ children }) => <div className="TabList">{children}</div>;

const Tab = ({ _onClick, _isActive, children }) => (
  <span className={`Tab  ${_isActive ? "is-active" : ""}`} onClick={_onClick}>
    {children}
  </span>
);

const TabPanel = ({ _isActive, children }) => (
  <div className={`TabPanel  ${_isActive ? "is-active" : ""}`}>{children}</div>
);

const Button = ({ children }) => <button className="Button">{children}</button>;


export const Root = () => (
  <Tabs selected={0}>
    <TabList style={styles.shadow}>
      <div className="userIcon">
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
      </div>
      <Tab>
        <Button>
          <InboxIcon />
        </Button>
      </Tab>
      <Tab>
        <Button>Bar</Button>
      </Tab>
      <Tab>
        <Button>Baz</Button>
      </Tab>
    </TabList>

    <TabPanel>
      {/*<Grid container spacing={3} >*/}
      {/*  <Grid item xs={12} md={3}>*/}
      {/*    <UserMessage />*/}
      {/*  </Grid>*/}
      {/*  <Grid item xs={12} md={9}>*/}
      {/*    <MessageBox/>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}

      <Grid container spacing={3}>
        <Grid item xs={12} >
          <MessageBox/>
        </Grid>
      </Grid>
    </TabPanel>

    <TabPanel>Related to bar</TabPanel>

    <TabPanel>Related to baz</TabPanel>
  </Tabs>
);