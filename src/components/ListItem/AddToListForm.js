import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

class AddToListForm extends Component {
    state = {
        placeName: '',
    };

    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        })
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.props.onPlaceAdded(this.state.placeName);
        this.setState({
            placeName: '',
        })
    };

    render = () => (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                value={this.state.placeName}
                placeholder="This is awesome"
                onChangeText={this.placeNameChangedHandler}
            />
            <Button title="Add" onPress={this.placeSubmitHandler} style={styles.buttonStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    inputStyle: {
        width: '70%',
        borderColor: '#aaa',
        borderBottomWidth: 1,
        padding: 5,
    },
    buttonStyle: {
        width: '30%',
    },
});

export default AddToListForm;