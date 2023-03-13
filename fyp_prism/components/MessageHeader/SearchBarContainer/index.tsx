import React from "react";
import { View } from "react-native";
import { UserType } from "../../../types";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";




export default function SearchBarContainer(){

   const [search, setSearch] = useState("");

    return(
        <View>
            <SearchBar
            placeholder="Search Here..."
            onChangeText={(val)=> {setSearch(val)}}
            value={search}
            platform='ios'
            containerStyle={{backgroundColor: '#f8f8f8'}}
            
            />

        </View>

    )
};
