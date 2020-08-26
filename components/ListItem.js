import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
    return (
        <TouchableOpacity
            style={styles.list_items}>
            <View style={styles.items_sidetoside}>
                <Image
                    style={{width: 250, height: 250}}
                    source={{uri: props.singleMedia.thumbnails.w160}}
                />
                <View>
                    <Text
                        style={{fontSize: 20}}>{props.singleMedia.title}</Text>
                    <Text
                        style={{textAlign: 'left'}}>{props.singleMedia.description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    list_items: {
        backgroundColor: 'lightgrey',
        padding: 15,
        margin: 3,
    },
    items_sidetoside: {
        flexDirection: 'row'
    }
});

ListItem.propTypes = {
    singleMedia: PropTypes.object,
}

export default ListItem;