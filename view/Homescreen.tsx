import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Homescreen = () => {
    return (
        <View style={text.name}>
            <Text>Visited Countries Application</Text>
        </View>
    );
};

const text = StyleSheet.create({name: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center', // Aligns text horizontally to center
        flex: 1, // Allows the text component to expand
        justifyContent: 'center', // Aligns content vertically to center (used with flexDirection)
        alignSelf: 'center', // Centers the text component itself
        marginHorizontal: 10, // Adds horizontal margin for better spacing
    },})

export default Homescreen;