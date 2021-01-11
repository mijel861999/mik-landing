import './App.css';

//React
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//Pages
import Landing from './pages/Landing';
import Dev from './pages/Dev';
import Music from './pages/Music';

//Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/dev" component={Dev}/>
          <Route exact path="/music" component={Music}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
