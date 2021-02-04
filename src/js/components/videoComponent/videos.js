import React, { Component } from 'react';
import Header from '../homeComponent/header';
import Footer from '../homeComponent/footer';
import Social from '../homeComponent/socialLinks';
import axios from 'axios';
import YoutubeEmbedVideo from "youtube-embed-video";

class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: []
        }
    }

    componentDidMount(){

        axios.get('http://taha.rmal.com.sa/bash/api/video')
        .then(res => {
            this.setState({
                videos: res.data
            })
        });

    }

    
    render() {
        var{ videos } = this.state;
        return (
            <div className="gallery-section">
               <Header />
               <div className="main-content">
                    <div className="container mt">
                        <h3 className="title">الفيديوهات</h3>
                        <div className="row">
                        {videos.map((item) => (
                            <div className="col-md-4" key={item.id}>
                                <div className="vd-card">
                                    <YoutubeEmbedVideo
                                        poster= {item.img}
                                        videoId={item.source} 
                                    >
                                    </YoutubeEmbedVideo>
                                </div>
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

export default Video;