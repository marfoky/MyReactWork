import 'react-native-gesture-handler';
import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

export default function Login(params) {
  const navigation = params.navigation;
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{
          borderRadius: 80,
          marginBottom: 60,
          width: 200,
          height: 200,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHN1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        }}
      />
      <Text style={{ fontSize: 25, color: "blue", fontWeight: 'bold'}}>Welcome to</Text>
      <Text style={{ fontSize: 35, fontWeight: "bold" }}>Suit Shop</Text>
      <View style={{}}>
        <TextInput
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            marginTop: 10,
          }}
          placeholder="Enter your username"
        />
      </View> 
       <View style={{ marginTop: 10,}}>
        <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 10,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            
          }}
          placeholder="Enter your password"
        />
      </View> 
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          padding: 15,
          paddingHorizontal: 80,
          marginTop: 10,
          alignItems: "center",
          borderRadius: 10,
          flexDirection: "row",
          backgroundColor: "blue",
        }}
      >
        <Text style={{ paddingLeft: 5, color: "white" }}>Login</Text>
      </TouchableOpacity>
      <View style={{marginTop: 10, fontSize: 10, fontWeight: 'bold'}}>
      <Text>Don't have an account? <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://google.com')}>
  Sign Up
</Text></Text>
      </View>
    </View>
  );
}