import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PhoneBookContainer from '../PhoneBook/PhoneBookContainer';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={PhoneBookContainer} />
      </Switch>
    </>
  );
}
