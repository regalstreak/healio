import React from 'react';
import Sidebar from './component/Sidebar';
import ResearchList from './component/ResearchList';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
        <Route path='/app' component={ResearchList} />
      </Switch>
    </div>
  );
}

export default App;
