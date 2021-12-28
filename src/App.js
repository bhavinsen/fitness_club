import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home';
import './App.scss'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
