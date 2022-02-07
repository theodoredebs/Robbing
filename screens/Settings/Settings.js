import React from 'react'
import {View,Text} from 'react-native'

const Settings = ({navigation}) =>{
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text onPress={()=>navigation.navigate("settingsDetailed")}>Settings Page</Text>
        </View>
    )
}

export default Settings