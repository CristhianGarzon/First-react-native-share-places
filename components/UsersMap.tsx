import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

interface Props {

}


export default class UsersMap extends React.Component<Props>{
    render() {
        return (
            <View style = {styles.mapContainer}>
                <MapView  
                style = {styles.map}
                provider={PROVIDER_GOOGLE}
                />
            </View>

        );
    }

}

const styles = StyleSheet.create({
    mapContainer: {
        width: '100%',
        height: 200
    },
    map: {
        width: '100%',
        height: '100%'
    }
});
