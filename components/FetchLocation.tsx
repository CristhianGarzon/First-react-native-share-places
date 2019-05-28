import React from 'react';
import { AppRegistry, Button } from 'react-native';

interface Props {
    onGetLocation: () => void;
}

export default class FetchLocation extends React.Component<Props> {

    render() {
        return (
            <Button title="Get Location" onPress={this.props.onGetLocation} />
        );
    };
}