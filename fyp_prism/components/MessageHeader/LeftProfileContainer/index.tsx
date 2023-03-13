import React from "react";
import { View } from "react-native";
import { UserType } from "../../../types";
import ProfilePicture from "../../ProfilePicture";

export type LeftProfileContainerProps = {
    // user: UserType

}

const LeftProfileContainer =( {}: LeftProfileContainerProps) => (

    <View>
        <ProfilePicture image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtLSq8bKPeKUXmGXml1M_6gq0ZrfK7o1VFVxaWRd5e0AvZEdInuEel6PjEUnM4gK5cf0&usqp=CAU'} size={55}/>
    </View>

)

export default LeftProfileContainer;