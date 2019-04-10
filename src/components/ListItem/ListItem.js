import React from 'react';
import {View, Text, Button, Image, StyleSheet, TouchableHighlight} from 'react-native';

const ListItem = (props) => (
    <TouchableHighlight onPress={props.onItemSelected}>
        <View style={styles.listItem}>
            <Image source={props.placeImage} resizeMode='contain' style={styles.image} />
            <Text>{props.placeName} ({props.placeKey})</Text>
        </View>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        padding: 10,
        backgroundColor: '#eee',
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    }
});

export default ListItem;