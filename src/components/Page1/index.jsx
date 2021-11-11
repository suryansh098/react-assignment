import React, {useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';

import { getPeopleWithBalanceUpto } from '../../utils';
import Slider from '../RangeSlider';
import PeopleList from '../PeopleList';

const Page = () => {
  const [value, setValue] = useState(1100);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchedData = getPeopleWithBalanceUpto(value);
    setUsers(fetchedData);
  }, [value]);

  return (
    <div className="container">
      <h2>Select the Balance</h2>
      <Slider value={value} setValue={setValue} />
      <Stack  direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 7}} marginTop={2} justifyContent="center">
        <Typography color="white" variant="p"><b>Selected Value : </b>{`$${value}`}</Typography>
        <Typography color="white" variant="p"><b>Number Of People : </b>{users.length}</Typography>
      </Stack>
      <PeopleList users={users} />
    </div>
  )
}

export default Page
