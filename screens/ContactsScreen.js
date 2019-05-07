import React from 'react';
import {
    StyleSheet,
    Platform,
    StatusBar,
} from 'react-native';
import {
    Subtitle,
    Left,
    Header,
    Button,
    Icon,
    Right,
    Body,
    Title,
} from 'native-base'

export default class ContactScreen extends React.Component {

    render() {
        return (
            <React.Fragment>
                {/* {this.renderHeader()} */}
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#128c7e",
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })
    }
});
