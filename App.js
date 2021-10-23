import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View styles= {styles.container}>
      <View style={styles.textBox}>
      <Text style= {styles.mainText}>SHOP SOMETHING SPECIAL!</Text>
      </View>
      <View style={styles.input}>
      <TextInput
          style={styles.username}
          placeholder="Username"
        />

        <View style={styles.password} >
          <TextInput
          secureTextEntry={true}
          onChangeText={(
            e
          )=> {
            console.log(e)
          }}
          style={{
            padding: 15,
            borderRadius: 3,
            borderWidth: 0.7,
            paddingHorizontal: 60,
            alignItems: 'center',
          }}
          placeholder="Password"
        />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    padding: 15,
    borderRadius: 3,
    borderWidth: 0.7,
    paddingHorizontal: 60,
    margin: 'auto',
    width: 'auto',
  },
  textBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 400,
  },
password: {
    margin: 'auto',
    width: 'auto',
    alignContent: 'center'
  },
  mainText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 50,
  },
  input: {
    display: 'flex',
    flexDirection: 'column',
    padding: 50,

  }

});
