import React from 'react';
import { Grid, Alert } from '@mui/material';
import People from './People';

const PeopleList = ({ users, halfWidth }) => {
  return (
    <Grid container spacing={2} className="scrollbar" sx={{ marginBlock: 2, maxHeight: "60vh", overflowY: "auto" }}>
      {
        users.length ? (
          users.map((user) => 
            <People key={user?.email || user.id} user={user} fullWidth={halfWidth} />
        )) : (
          <Grid item sm={10} sx={{ margin: "auto"}}>
            <Alert severity="info">INFO : No User Found. Please select a different range.</Alert>
          </Grid>
      )}
    </Grid>
  )
}

export default PeopleList
