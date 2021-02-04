import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import Location from '../../../assets/img/location.png'

class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        };
     
        onMarkerClick = (props, marker, e) =>
            this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
     
        onMapClicked = (props) => {
            if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    render() {
        return (
            <Map className={'map'}
                google={this.props.google}
                zoom={13}
                onClick={this.onMapClicked}
                initialCenter = {{lat: 31.0413814, lng: 31.3478201}}>

                <Marker 
                    onClick={this.onMarkerClick}
                    name={'مكان العيادة '}
                    position={{lat: 31.0413814, lng: 31.3478201}}
                />
        
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h3>{this.state.selectedPlace.name}</h3>
                    </div>
                </InfoWindow>

                
            </Map>
        )
    }
}
export default GoogleApiWrapper({
    // apiKey: ('AIzaSyDx--BILIM2LjZBxVMjGYVb8YqrY-Vk_Yk&callback=initMap')
})(MapContainer)