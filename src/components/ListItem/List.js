import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import ListItem from './ListItem';

const List = (props) => {
    return (
        <FlatList
            style={styles.container}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    placeKey={info.item.key}
                    onItemSelected={() => props.onItemSelected(info.item.key)}
                />
            )}
        >
        </FlatList>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
});

export default List;