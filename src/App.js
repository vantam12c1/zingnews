import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Paths from './paths/paths.js';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeFeature from './features/Home';
import BookFeature from './features/Book';
import SportFeature from './features/Sport';

function App() {
  return (
    <div className="App">     
      <Header />
      <div className="body-content">
        <div className="container">
        <Switch>
          <Route path={Paths.sport} component={SportFeature} />
          <Route path={Paths.book} component={BookFeature} />
          <Route path='/' component={HomeFeature} />
        </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
