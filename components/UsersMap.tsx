import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

interface Props {
    userLocation: any;
    usersPlaces: any;
}

export default class UsersMap extends React.Component<Props>{
    render() {
        let userLocationMarker = null;
        if (this.props.userLocation) {
            userLocationMarker = <Marker coordinate={this.props.userLocation} />;
        }
        let usersMarkers = null;
        if (this.props.usersPlaces) {
            usersMarkers = this.props.usersPlaces.map((userPlace:any) => <Marker coordinate={userPlace} key={userPlace.id} />
            );
        }
        console.log("userPlace",usersMarkers);
        return (
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}

                    initialRegion={{
                        latitude: 35.78825,
                        longitude: -121.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    region = {this.props.userLocation}
                >
                    {userLocationMarker}
                    {usersMarkers}
                </MapView>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200,
        marginTop: 20
    },
    map: {
        width: '100%',
        height: '100%'
    }
});
