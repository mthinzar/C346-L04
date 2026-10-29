
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Boat from './components/Boat';

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text></Text>
                <Text>GetABoat - For Sale</Text>

                <Boat icon_name={"boat-outline"} title={"Sea Ray 500 Sundancer"}
                    description={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away"}
                    icon_color={"grey"} poster={require("./img/sea_ray.jpg")}/>

                <Boat icon_name={"boat"} title={"Four Winns Horizon 180"}
                    description={"A sporty look and refined details truly set the Horizon 180 above all others"}
                    icon_color={"grey"} poster={require("./img/four_winns.jpg")}/>

                <Boat icon_name={"boat"} title={"Flipper 640 ST"}
                    description={"A modern take on the classic, traditional hardtop and perfect for a family picnic"}
                    icon_color={"grey"} poster={require("./img/flipper.jpg")}/>

                <Boat icon_name={"boat-outline"} title={"Princess V48"}
                    description={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                    icon_color={"grey"} poster={require("./img/princess.jpg")}/>

                <Boat icon_name={"boat-outliner"} title={"Bayliner 175 Bowrider"}
                    description={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                    icon_color={"grey"} poster={require("./img/bayliner.jpg")}/>

                <Boat icon_name={"boat-sharp"} title={"Fairline Targa 47"}
                    description={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit"}
                    icon_color={"grey"} poster={require("./img/fairline.jpg")}/>

            </ScrollView>
        );
    }
}

export default AllBoats;
