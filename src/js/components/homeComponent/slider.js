import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import axios from 'axios';
import Loader from '../loader';
class SliderContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/photos')
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
                <Slider>
                    {items.map((item) => (
                        <div id="home"
                            key={item.id}
                            style={
                                { background: `url('${item.url}') no-repeat center center` }
                            }
                        >
                        </div>
                    ))}
                </Slider>
                
            );
        }
    }
}
export default SliderContainer;
