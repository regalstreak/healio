import React from 'react';
import Sidebar from './component/Sidebar';
import { Switch } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Switch>
      </Switch>
    </div>
  );
}

export default App;
