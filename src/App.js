import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import './App.scss'
import Contactus from './Pages/Contactus';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contactus" exact component={Contactus} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
