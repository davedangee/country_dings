import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Homescreen from "./Homescreen";
import CountryDashboard from "./CountryDashboard";


const BottomTabBar: React.FC = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName={"Home"}>

            <Tab.Screen name={"Home"} component={Homescreen} options={{tabBarLabel: 'Home'}}/>
            <Tab.Screen name={"Countries"} component={CountryDashboard} options={{tabBarLabel: 'Countries'}}/>

        </Tab.Navigator>
    );
};

export default BottomTabBar;