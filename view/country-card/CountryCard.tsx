import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import AntDesign from 'react-native-vector-icons/AntDesign';

export interface CountryCardProps {
    countryProp: ICountry;
}

const CountryCard: React.FC<CountryCardProps> = ({countryProp}) => {

    return (
        <View style={styles.card}>
            <Text style={text.name}>
                {countryProp?.name.official}
            </Text>
            <Image
                src={countryProp?.flags.png}
                style={styles.image}
            />
            <View style={divider.divider} />
            <AntDesign name="checkcircleo" size={30} color="#000" style={{color: 'black'}} />

        </View>
    );
};

const styles = StyleSheet.create({ card: { flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10, padding: 10, backgroundColor: '#fff', borderRadius: 10, shadowColor: '#000', shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.8, shadowRadius: 2, elevation: 5, }, name: { fontSize: 20, fontWeight: 'bold', }, image: { width: 350, height: 200, resizeMode: 'stretch', margin: 10, } });
const text = StyleSheet.create({name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', // Aligns text horizontally to center
        flex: 1, // Allows the text component to expand
        justifyContent: 'center', // Aligns content vertically to center (used with flexDirection)
        alignSelf: 'center', // Centers the text component itself
        marginHorizontal: 10, // Adds horizontal margin for better spacing
    },})

const divider = StyleSheet.create({divider: {
        height: 1,
        width: "80%",
        backgroundColor: "#A9A9A9",
        alignSelf: "center",
        marginVertical: 10, // Adds vertical space above and below the divider
    },
})
export default CountryCard;