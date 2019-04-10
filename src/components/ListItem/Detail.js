import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const placeDetail = props => {
    let modalContent = null;
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Text style={styles.title}>{props.selectedPlace.name}</Text>
                <Image style={styles.image} resizeMode='contain' source={props.selectedPlace.image} />
                <Text>{props.selectedPlace.text}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onCloseDetail} visible={props.selectedPlace !== null} animationType='slide'>
            <View style={styles.modal}>
                {modalContent}
                <View style={styles.actions}>
                    <Button title='Close' onPress={props.onCloseDetail} />
                    <Button title='Delete' color='red' onPress={props.onItemDeleted} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        margin: 22,
        marginTop: 60,
        backgroundColor: '#eee',
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 150,
        height: 150,

    }
});

export default placeDetail