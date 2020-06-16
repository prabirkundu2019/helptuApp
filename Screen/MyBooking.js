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
  Alert
} from "react-native";
import MapView, {
  Marker,
  AnimatedRegion,
  Polyline,
  PROVIDER_GOOGLE
} from "react-native-maps";
import Geolocation from '@react-native-community/geolocation';

import { db } from '../config';

// const LATITUDE = 29.95539;
// const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;
const LATITUDE = 22.481649;
const LONGITUDE = 88.357147;

class MyBooking extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
    //   coordinate: new AnimatedRegion({
    //     latitude: LATITUDE,
    //     longitude: LONGITUDE,
    //     latitudeDelta: 0,
    //     longitudeDelta: 0
    //   })
    };
  }

  componentDidMount() {   
    let itemsRef = db.ref('/coordinates'); 
    itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let items = Object.values(data);
        console.log(items);
    });
    // this.requestCameraPermission();
    Geolocation.getCurrentPosition(
        
      position => {
        //Add Data
        db.ref('/coordinates').push({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
    );
    const { coordinate } = this.state;
    this.watchID = Geolocation.watchPosition(
        position => {
            //Add Data
            db.ref('/coordinates').push({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
            alert(position.coords.latitude);
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                error: null
            });
        },
        // position => {
        //     const { routeCoordinates, distanceTravelled } = this.state;
        //     const { latitude, longitude } = position.coords;
        //     alert(latitude);
        //     const newCoordinate = {
        //         latitude,
        //         longitude
        //     };
        //     console.log({ newCoordinate });

        //     if (Platform.OS === "android") {
        //         if (this.marker) {
        //             this.marker._component.animateMarkerToCoordinate(
        //             newCoordinate,
        //             500
        //             );
        //         }
        //     } else {
        //         coordinate.timing(newCoordinate).start();
        //     }

        //     this.setState({
        //         latitude,
        //         longitude,
        //         routeCoordinates: routeCoordinates.concat([newCoordinate]),
        //         prevLatLng: newCoordinate
        //     });
        // },
        error => console.log(error),
        {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 1000,
            distanceFilter: 10
        }
    );
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.watchID);
  }

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Location Access Permission",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

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
                <View style={styles.marker}><Image
              source={require("./images/car.png")}
              style={{ height: 35, width: 35 }}
            /></View>
              </Animated.View>
            
          </MapView.Marker>
        </MapView>
        {/* <View style={styles.buttonContainer}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(this.state.distanceTravelled).toFixed(2)} km
          </Text>
        </View> */}
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

export default MyBooking;