import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux'

import List from './src/components/ListItem/List';
import AddToListForm from './src/components/ListItem/AddToListForm';
import PlaceDetail from './src/components/ListItem/Detail';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index';

type Props = {};
class App extends Component {

  placeSelectedHandler = key => {
    console.log('Clicked on '+key);
    this.props.onSelectPlace(key);
  };

  placeAddedHandler = (name) => {
    this.props.onAddPlace(name);
  };

  closeModal = () => {
    this.props.onDeselectPlace();
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  };

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>My{"\n"}TEST{"\n"}app</Text>
          <AddToListForm onPlaceAdded={this.placeAddedHandler} />
          <PlaceDetail
              onItemDeleted={this.placeDeletedHandler}
              onCloseDetail={this.closeModal}
              selectedPlace={this.props.selectedPlace}
          />
          <List
              places={this.props.places}
              onItemDeleted={this.placeDeletedHandler}
              onItemSelected={this.placeSelectedHandler}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#042A2B',
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#212121',
    fontSize: 35,
    textAlign: 'center',
  },
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);