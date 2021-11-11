import React from 'react';
import { Grid, Avatar, Card, CardHeader } from '@mui/material';

function stringToColor(string) {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
};

const People = ({ user, fullWidth }) => {

  return (
    <Grid item xs={11} sm={fullWidth ? 11 : 5.5} sx={{ margin: "auto"}}>
      <Card sx={{display: "flex"}}>
        <CardHeader 
          avatar={<Avatar sx={{
            bgcolor: stringToColor(user.name)
          }}>{user.name.charAt(0)}</Avatar>}
          title={user.name}
          subheader={user?.balance}
        />
      </Card>
    </Grid>
  )
}

export default People
