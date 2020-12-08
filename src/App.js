import './App.css';
import { useContext, useState } from 'react';
import HeadPage from './Components/HeadPage';
import { Switch, Route } from "react-router-dom";
import Document from './Components/Document'
import { ProductContext } from './context.js'
function App() {
  const { documents } = useContext(ProductContext);
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact render={() => <HeadPage documents={documents} />} />
        <Route path='/:doc' component={Document} />
      </Switch>


    </div>
  );
}

export default App;
