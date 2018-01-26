import React, { Component } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';
import han from 'assets/images/people/han_solo.png';
import { divIcon } from 'leaflet';
import './SimpleMap.css';

// const tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = 'http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png';
// const tiles = 'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png';
// const tiles = 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png';
const attr = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';

const icon = divIcon({
    iconSize:     [38, 42], // size of the icon
    iconAnchor:   [18, 36], // point of the icon which will correspond to marker's location
    popupAnchor:  [-6, -36],
});

const SingleMarker = ({ popup, position, centerMapHandler }) => (
    <Marker position={position} icon={icon} onClick ={() =>centerMapHandler(position[0], position[1])}>
      <Popup>
        <span>{popup}</span>
      </Popup>
    </Marker>
);

const MarkersList = ({ markers, centerMapHandler }) =>  (
    <div style={{display: 'none'}}>
        {markers.map(({ id, ...props }) => (
            <SingleMarker 
            key={id} 
            {...props}
            centerMapHandler={centerMapHandler}
            />
        ))}
    </div>
);

MarkersList.propTypes = { markers: PropTypes.array.isRequired }


export default class SimpleMap extends Component {
    static propTypes = {
        markersArray: PropTypes.arrayOf(
            PropTypes.object.isRequired
        ).isRequired,
    }
    state = {
        lat: 0,
        lng: 0,
        zoom: 1,
    }

    centerMapHandler = (lat, lng) => {
        this.setState({lat, lng, zoom:7});
    };

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
                        attribution={attr}
                        url={tiles}
                    />
                    <MarkersList 
                    markers={markersArray}
                    centerMapHandler={this.centerMapHandler}
                    />
                </Map>
            </div>
        );
    }
}
