import './css/style.css';
import {Route} from 'react-router-dom';

import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

import Visual from './components/main/Visual.js';
import Info from './components/main/Info.js';


import Department  from './components/sub/Department.js';
import Community  from './components/sub/Community.js';
import Gallery  from './components/sub/Gallery.js';
import Youtube  from './components/sub/Youtube.js';
import Location  from './components/sub/Location.js';
import Join  from './components/sub/Join.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Visual />
        <Info />
      </Route>      

      <Route exact path="/department" component={Department}></Route>
      <Route exact path="/community" component={Community}></Route>
      <Route exact path="/gallery" component={Gallery}></Route>
      <Route exact path="/youtube" component={Youtube}></Route>
      <Route exact path="/location" component={Location}></Route>
      <Route exact path="/join" component={Join}></Route>      

      <Footer />
    </div>
  );
}

export default App;
