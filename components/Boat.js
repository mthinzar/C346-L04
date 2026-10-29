import React from 'react';
import {View, Text, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import AllBoats from "../App";

const Boat = ({title, icon_name, description, icon_color, poster}) => {
    return (
        <View>
            <Text></Text>
            <Text>
                <Ionicons name={icon_name} size={30} color={icon_color} />
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                    {title}
                </Text>
            </Text>

            <Text> {description} </Text>

            <Image source={poster}
                   style={{width:400, height:500}} />

        </View>
    );
};
export default Boat;