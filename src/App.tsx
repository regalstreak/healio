import React from 'react';
import Sidebar from './component/Sidebar';
import ResearchList from './component/ResearchList';
import { Switch, Route } from 'react-router-dom';
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Sidebar />
      <Switch>
        <Route path='/app' component={ResearchList} />
      </Switch> */}
      <Home />
    </div>
  );
}

export default App;
