import React, { Component } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';
import han from 'assets/images/people/han_solo.png';
import { divIcon } from 'leaflet';
import './SimpleMap.css';

const icon = divIcon({
    iconSize:     [38, 42], // size of the icon
    iconAnchor:   [18, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [-6, -36],
});

const kurde = (callback) => (
    <div>
    <button onClick={callback}>
        kurde kurde 
    </button>
     </div>   
)




const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';
export default class SimpleMap extends Component {
    state = {
        lng: 20.000,
        lat: 50.000,
        zoom: 17,
    }
    handleMarker = () => {
        this.setState({lng: this.state.lng + 0.03})
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        const center = [this.state.lat, this.state.lng];     
        const {zoom} = this.state;
        return (
            <div className='simple-map'>
            <button onClick={this.handleMarker}>kurde button</button>
                <Map
                    center={center}
                    zoom={zoom}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                    <Marker
                     position={position}
                     draggable={true}
                     icon={icon}
                    >
                        <Popup>
                            {kurde(this.handleMarker)}
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}