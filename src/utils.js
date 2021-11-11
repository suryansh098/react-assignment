import data from './data.json';

export const getPeopleWithBalanceUpto = (endValue)  => 
  data.filter(person => Number(person.balance.replace(/[$,]/g, '')) <= endValue);

export const getPeople = () => 
  data.filter(person => !person.isActive && Number(person.balance.replace(/[$,]/g, '')) <= 2000);