import React, { Component } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';
import han from 'assets/images/people/han_solo.png';
import { divIcon } from 'leaflet';
import './SimpleMap.css';

const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';

const icon = divIcon({
    iconSize:     [38, 42], // size of the icon
    iconAnchor:   [18, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [-6, -36],
});

const SingleMarker = ({ popup, position }) => (
    <Marker position={position} icon={icon}>
      <Popup>
        <span>{popup}</span>
      </Popup>
    </Marker>
);

const MarkersList = ({ markers }) => (
    <div style={{display: 'none'}}>
        {markers.map(({ id, ...props }) => (
            <SingleMarker key={id} {...props} />
        ))}
    </div>
)
 
export default class SimpleMap extends Component {
    static PropTypes = {
        markersArray: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }
    state = {
        // lat: 52.00,
        // lng: 20.005,
        lat: 0,
        lng: 0,
        zoom: 1,
    }
    render() {

        const position = [this.state.lat, this.state.lng];
        const center = [this.state.lat, this.state.lng];     
        const {zoom} = this.state;
        const {markersArray} = this.props;
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
                    <MarkersList markers={markersArray} />
                </Map>
            </div>
        );
    }
}
