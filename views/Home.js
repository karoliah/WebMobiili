import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import List from '../components/List';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <List />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 20,
    },
    list_items: {
        backgroundColor: 'lightgrey',
        padding: 15,
        margin: 3,
    },
    items_sidetoside: {
        flexDirection: 'row',
    },
    /* header_text: {
        fontSize: 20,
        color: '#fff',
        position: 'absolute',
        top: 20,
        left: 20,
      },*/
});

export default Home;

/*
<View>
        <Image
          style={{width: 380, height: 200}}
          resizeMode='contain'
          source={{uri: 'http://placekitten.com/400/201'}}
        />
        <Text style={styles.header_text}>
          Homeless cats
        </Text>
      </View>
      <StatusBar style={{backgroundColor: 'lightgreen'}}></StatusBar>
*/
