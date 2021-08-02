import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { Icon } from 'leaflet'

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultPosition: [53.80127, -1.548567], // UK position
      crossLocations: [
        {
          title: "leeds",
          position: [53.80127, -1.548567]
        },
        {
          title: "kirkstall",
          position: [53.84127, -1.528567]
        },
      ],
      marker: null,
    }
  }

  getData = () => fetch("https://crowdedcross.com/crossings/crossingList")
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      else return res.json();
    })
    .then(data => {
      this.setState({ marker: data }, () => {
      });
    })
    .catch(error => {
      if (error) {
        console.log(error);
        //perform the redirection to the network request slow page or set state to show error
        // Alert.alert(
        //     'Sorry, something went wrong. Please try again',
        //     error.message,
        //     [
        //         {
        //             text: 'Cancel',
        //         },
        //         {
        //             text: 'Try Again',
        //             onPress: this.getData,
        //         },
        //     ]
        // );
      }
    });

  componentWillMount() {
    this.getData();
  }

  render() {

    if (this.state.marker == null) {
      return (
        <h1> Loading </h1>
      );
    }
    const points = this.state.marker;

    return (
      <MapContainer
        center={this.state.defaultPosition}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {points.map((crossLocation) => (
          <Marker
            key={crossLocation.locationName}
            position={[crossLocation.latitude, crossLocation.longitude]}
            icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
          >
            <Tooltip>{crossLocation.locationName}</Tooltip>
          </Marker>
        ))}
      </MapContainer>

    );
  }
}

export default Map;
