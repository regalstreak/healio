import React from 'react';
import Sidebar from './component/Sidebar';
import ResearchList from './component/ResearchList';
import InfoSearch from './component/InfoSearch';
import TestTest from './screens/TestTest';
import { Switch, Route } from 'react-router-dom';
import MainForm from './component/MainForm';
import Home from './screens/Home/Home';
import Dash from './screens/Dash/Dash';
import Login from './screens/Login';

const App: React.FC = () => {
  return (
    <div className="App">

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/app' component={ResearchList} />
        <Route path='/info' component={InfoSearch} />
        <Route path='/form' component={MainForm} />
        <Route path='/testtest' component={TestTest} />
        <Route path='/dash' component={Dash} />
        <Route path='/login' component={Login} />
      </Switch>
    </div >
  );
}

export default App;
