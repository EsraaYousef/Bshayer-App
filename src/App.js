import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

// components
import Home from './js/components/homeComponent/home';
import Services from './js/components/servicesComponent/services';
import AboutPage from "./js/components/aboutComponent/aboutPage";
import Gallery from './js/components/galleryComponent/gallery';
import Video from './js/components/videoComponent/videos';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path='/' component={Home}/>
          <Route exact path='/Services' component={Services}/>
          <Route exact path='/about' component={AboutPage}/>
          <Route exact path='/Gallery' component={Gallery}/>
          <Route exact path='/Video' component={Video}/>

        </div>
      </Router>
    );
  }
}

export default App;
