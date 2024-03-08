import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import axios from "axios";
import CountryCard from "./country-card/CountryCard";


const CountryDashboard: React.FC = () => {
    const [countries, setCountries] = useState<ICountry[]>([])
    const [visitedCountries, setVisitedCountries] = useState<ICountry[]>([])

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all?fields=name,currencies,capital,region,subregion,area,population,flags,capitalInfo,timezones")
            .then((response) => setCountries(response.data))
    }, [])

    return (
        <View>
            <Text style={text.name}>Country List</Text>
            <SafeAreaView>
                <ScrollView>
                    {countries.map(value => (
                        <CountryCard countryProp={value} key={value.name.common}/>
                    ))}
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

const text = StyleSheet.create({name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center', // Aligns text horizontally to center
        flex: 1, // Allows the text component to expand
        justifyContent: 'center', // Aligns content vertically to center (used with flexDirection)
        alignSelf: 'center', // Centers the text component itself
        marginHorizontal: 10, // Adds horizontal margin for better spacing
    },})

export default CountryDashboard;