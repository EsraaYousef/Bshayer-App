import React, { Component } from 'react';
import Header from './header';
import SliderContainer from './slider';
import About from "./about";
import MapContainer from './map';
import Footer from './footer';

class Home extends Component {
    render() {
        return (
            <div className="home-body">
                <Header />
                <SliderContainer />
                <About />
               <MapContainer/>
               <Footer />
            </div>
        );
    }
}
export default Home;


