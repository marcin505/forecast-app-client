import React, { Component } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';
import PropTypes from 'prop-types';
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

const MyPopupMarker = ({ children2, position }) => (
    <Marker position={position} icon={icon}>
      <Popup>
        <span>{children2}</span>
      </Popup>
    </Marker>
  )

  const MyMarkersList = ({ markers }) => {
    const items = markers.map(({ key, ...props }) =>{ 
    console.log(props);
    return (
      <MyPopupMarker key={key} {...props} />
    )})
    return <div style={{ display: 'none' }}>{items}</div>
  }
  
const stamenTonerTiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const stamenTonerAttr = '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors';
export default class SimpleMap extends Component {
    state = {
        lat: 51.505,
    lng: -0.09,
    zoom: 13,
    }
    
    handleMarker = () => {
        this.setState({lng: this.state.lng + 0.03})
    }
    render() {
        const markers = [
            { key: 'marker1', position: [51.5, -0.1], children2: 'My first popup' },
            { key: 'marker2', position: [51.51, -0.1], children2: 'My second popup' },
            { key: 'marker3', position: [51.49, -0.05], children2: 'My third popup' },
          ]
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
                    <MyMarkersList markers={markers} />
                </Map>
            </div>
        );
    }
}