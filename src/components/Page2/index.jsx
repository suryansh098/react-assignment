import { Paper, Typography, Container } from '@mui/material';
import React, { useState } from 'react'

import { getPeople } from '../../utils';
import PeopleList from '../PeopleList';

const Page = () => {
  const [users] = useState(getPeople());

  return (
    <div className="container">
      <h2>List of Friends</h2>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {
        users.map((user) => (
          <Paper 
            className="paper"
            variant="outlined" 
            key={user.email} 
            sx={{ bgcolor: "rgba(255, 255, 255, .15)", backdropFilter: "blur(10px)", padding: "2vmin", margin: "auto", marginBlock: "2vmin" }}
          >
            <Typography variant="h6" color="#f1abab" sx={{ textAlign: "center", borderBottom: "2px solid white" }}>{user.name.split(" ")[0]}'s Friends</Typography>
            <PeopleList users={user.friends} halfWidth />
          </Paper>
        ))
      }
      </Container>
    </div>
  )
}

export default Page;
