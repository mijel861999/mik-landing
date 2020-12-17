import './App.css';

//React
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Pages
import Landing from './pages/Landing';

//Components
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/landing" component={Landing}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
