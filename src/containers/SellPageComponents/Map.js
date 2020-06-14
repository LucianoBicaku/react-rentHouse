import React, { Component } from "react";
import { Map, TileLayer, Popup, Marker } from "react-leaflet";

const MyMarker = (props) => {
  const initMarker = (ref) => {
    if (ref) {
      ref.leafletElement.openPopup();
    }
  };

  return <Marker ref={initMarker} {...props} />;
};

class Mapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPos: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ currentPos: e.latlng });
    localStorage.setItem("location", e.latlng);
    console.log(e.latlng);
  }

  render() {
    return (
      <div id="map" className="map-stepone">
        <Map
          center={this.props.center}
          zoom={this.props.zoom}
          onClick={this.handleClick}
        >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.state.currentPos && (
            <MyMarker position={this.state.currentPos}>
              <Popup position={this.state.currentPos}>
                Current location:{" "}
                <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
              </Popup>
            </MyMarker>
          )}
        </Map>
      </div>
    );
  }
}

export default Mapp;
