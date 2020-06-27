import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  Alert,
  ImageBackground,
  SearchBar
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';
import { db } from '../config';

const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 22.481649;
const LONGITUDE = 88.357147;

class MapServiceProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: [],
      latitude: LATITUDE,
      longitude: LONGITUDE
    };
  }

  componentDidMount() {   
    // let itemsRef = db.ref('/coordinates'); 
    // itemsRef.on('value', snapshot => {
    //     let data = snapshot.val();
    //     let coordinates = Object.values(data);
    //     let lastKey = coordinates.length - 1;
    //     console.log(coordinates[lastKey].latitude);
    //     this.setState({
    //         latitude: coordinates[lastKey].latitude,
    //         longitude: coordinates[lastKey].longitude
    //     })
    // });
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showUserLocation
          followUserLocation
          loadingEnabled
          region={this.getMapRegion()}
        >
          {/* <Polyline coordinates={this.state.routeCoordinates} strokeWidth={5} /> */}
          {/* <Marker.Animated
            ref={marker => {
              this.marker = marker;
            }}
            coordinate={this.state.coordinate}
          >
            <Image
              source={require("./images/car.png")}
              style={{ height: 35, width: 35 }}
            />
          </Marker.Animated> */}
          <MapView.Marker
            coordinate={{latitude: this.state.latitude,
            longitude: this.state.longitude}}
            title={"title"}
            description={"description"}
          >
              <Animated.View style={[styles.markerWrap]}>
                <Animated.View style={[styles.ring]} />
                <View style={styles.marker}>
                  <Image
                    source={require("./images/car.png")}
                    style={{ height: 35, width: 35 }}
                  />
                </View>
              </Animated.View>
            
          </MapView.Marker>
          
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  bubble: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20
  },
  latlng: {
    width: 200,
    alignItems: "stretch"
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: "center",
    marginHorizontal: 10
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 20,
    backgroundColor: "transparent"
  }
});

export default MapServiceProvider;