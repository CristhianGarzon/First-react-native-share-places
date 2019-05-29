/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import FetchLocation from './components/FetchLocation';
import UsersMap from './components/UsersMap';

interface Props {}
export default class App extends Component<Props> {
  constructor(props:any){
    super(props);
    this.handleGetUserPlaces = this.handleGetUserPlaces.bind(this);
  }
  state = {
    userLocation: null,
    usersPlacesArray: []
  }
  getUserLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('my position', position);
      this.setState({
        userLocation:{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
      });
      fetch('https://woven-nimbus-242100.firebaseio.com/places.json',{
        method: 'POST',
        body: JSON.stringify({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    },
    err => {
      console.log(err);
    });
  }

  handleGetUserPlaces(){
    fetch('https://woven-nimbus-242100.firebaseio.com/places.json')
      .then(res => res.json())
      .then(parsedRes => {
        const placesArray = [];
        for (const key in parsedRes){
            placesArray.push({
              latitude: parsedRes[key].latitude,
              longitude: parsedRes[key].longitude,
              id: key
            });
        }
        this.setState({
          usersPlacesArray: placesArray
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Button title='Get User Places' onPress={this.handleGetUserPlaces}/>
        </View>
        <FetchLocation onGetLocation={this.getUserLocationHandler}/>
        <UsersMap
          userLocation = {this.state.userLocation}
          usersPlaces = {this.state.usersPlacesArray}
        ></UsersMap>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});