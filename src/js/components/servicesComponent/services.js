import React, { Component } from 'react';
import axios from 'axios';
import Loader from '../loader';
import Header from '../homeComponent/header';
import Footer from '../homeComponent/footer';
import Social from '../homeComponent/socialLinks';

// import {Link} from 'react-router-dom';

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        axios.get('http://taha.rmal.com.sa/bash/api/service')
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
                <div className="services-section">
                    <Header />
                    <div className="main-content">
                        <div className="container mt">
                            <h3 className="title">خدماتنا</h3>
                            <div className="servives-categ">
                                {items.map((item) => (
                                    <div className="card" key={item.id} >
                                        <h5>
                                            {item.title}
                                        </h5>
                                    </div>
                                ))}
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

export default Services;