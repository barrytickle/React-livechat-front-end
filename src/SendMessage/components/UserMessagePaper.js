import Paper from '@material-ui/core/Paper'
import { styles } from '../styles'
import Avatar from '@material-ui/core/Avatar'
import React from 'react'
import Grid from '@material-ui/core/Grid'

export const UserMessageComponent = (user) => {
  return (
    <Paper style={styles.shadow} className="paper">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <div className="userIcon">
            <Avatar alt={user.name} src={user.avatar} />
          </div>
          <p>{user.favourite ? "true" : "false"}</p>
        </Grid>
        <Grid item xs={7}>
          <Grid container spacing={3}>
            <Grid item xs={7}>
              <h2>{user.name}</h2>
            </Grid>
            <Grid item xs={3}>
              time
            </Grid>
          </Grid>
          <span>{user.subject}</span>
          <p>{user.message}</p>
        </Grid>
      </Grid>
    </Paper>
  )
}