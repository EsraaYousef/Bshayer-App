import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import Header from '../homeComponent/header';
import Footer from '../homeComponent/footer';
import Social from '../homeComponent/socialLinks';
import axios from 'axios';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            isLoaded: false,
        }
    }
    componentDidMount(){
        axios.get('http://taha.rmal.com.sa/bash/api/gallary')
        .then(res => {
          this.setState({
              isLoaded: true,
              images: res.data,
          })
        });
      }
    render() {
        var{ images } = this.state;
        const options = {
            items: 1,
            showNav: false,
            margin: 10,
            autoplay: true,
            lazyLoad: false,
            showThumbnails: true,
            showPlayButton: false
        };
        return (
            <div className="gallery-section">
               <Header />
               <div className="main-content">
                    <div className="container mt">
                        <h3 className="title">معرض الصور</h3>
                        <div className="row">
                            <div className="col-md-12">
                                <ImageGallery {...options} items={images}/>
                            </div>
                        </div>
                    </div>
               </div>
               <Social />
               <Footer />
            </div>
        );
    }
}

export default Gallery;