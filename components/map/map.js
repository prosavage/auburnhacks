import React, { Component, createRef } from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  MapControl,
  withLeaflet,
} from 'react-leaflet';

export default class MyMap extends Component {
  state = {
    center: {
      lat: 32.605387,
      lng: -85.48561,
    },
    marker: {
      lat: 32.605387,
      lng: -85.48561,
    },
    zoom: 16,
    draggable: true,
  };

  refmarker = createRef(this.state.marker);

  toggleDraggable = () => {
    this.setState({ draggable: !this.state.draggable });
  };

  updateMarker = (e) => {
    // const marker = e.marker;
    this.setState({
      marker: e.marker.getLatLng(),
    });
    console.log(e.marker.getLatLng());
  };

  updatePosition = () => {
    const marker = this.refmarker.current;
    if (marker != null) {
      this.setState({
        marker: marker.leafletElement.getLatLng(),
      });
    }
    console.log(marker.leafletElement.getLatLng());
  };

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];

    return (
      <div className='map-root'>
        <Map
          center={position}
          zoom={this.state.zoom}
          style={{
            height: '100%',
            width: '100%',
          }}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker
            draggable={false}
            onDragend={this.updatePosition}
            position={markerPosition}
            animate={true}
            ref={this.refmarker}>
            <Popup minWidth={90}>{'Brown-Kopel'}</Popup>
          </Marker>
        </Map>
        <style jsx>
          {`
            .map-root {
              height: 100%;
            }
            .leaflet-container {
              height: 100%;
              width: 100%;
              margin: 0 auto;
            }
          `}
        </style>
      </div>
    );
  }
}
