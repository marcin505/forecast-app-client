import React, { Component } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';

import './SimpleMap.css';
const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';
export default class SimpleMap extends Component {
    state = {
        lat: 51.505,
        lng: -0.09,
        zoom: 13,
    }
    render() {
        const position = [this.state.lat, this.state.lng];
        const center = [this.state.lat, this.state.lng];     
        const zoom = 12;
        console.log(Marker);
        return (
            <div className='simple-map'>
                <Map
                    center={center}
                    zoom={zoom}
                >
                    <TileLayer
                        attribution={stamenTonerAttr}
                        url={stamenTonerTiles}
                    />
                    <Marker position={position}>
                        <Popup>
                            <span>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </span>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}