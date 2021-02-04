import React, { Component } from 'react';
import Header from '../homeComponent/header';
import Footer from '../homeComponent/footer';
import Social from '../homeComponent/socialLinks';
import axios from 'axios';
import Loader from './../loader';

class AboutPage extends Component {
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
                <div className="about-section no-p">
                    <Header />
                    <div className="main-content">
                        <div className="mt">
                            <h3 className="title">نبذة عننا</h3>
                            <div className="flx">
                                <img src={items.image} alt="main"/>
                                <p>{items.bio}</p>
                            </div>
                        </div>
                    </div>
                    <Social />
                    <Footer />
                </div>
            );
        }
    }
        
}
export default AboutPage;