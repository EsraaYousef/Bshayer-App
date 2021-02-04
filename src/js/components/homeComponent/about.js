import React, { Component } from 'react';
import Social from './socialLinks';
import axios from 'axios';
import Loader from './../loader';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        axios.get('http://taha.rmal.com.sa/bash/api/home')
        .then(res => {
            this.setState({
                isLoaded: true,
                items: res.data,
            })
        });

    }
    render() {
        var{ isLoaded, items } = this.state;
        if(!isLoaded){
            return <Loader />
        }
        else{
            return (
                <div className="about-section">
                    <div className="flx">
                        <img src={items.image} alt="about"/>
                        <p>{items.bio}</p>
                    </div>
                    <div className="bottom-link">
                        <a href="Bashair.sindi@gmail.com" className="more">المزيد</a>
                    </div>
                    <Social />
                </div>
            );
        }
    }
        
}
export default About;