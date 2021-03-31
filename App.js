import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, DarkTheme } from “@react-navigation/native”;
import {AppearanceProvider} from 'react-native-appearance';

export default function App() {
  return (
        <AppearanceProvider>
      <ThemeProvider>
    <View style={styles.container}>
      <Text>Airband</Text>
      <StatusBar style="auto" />
    </View>
      </ThemeProvider>
       </AppearanceProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
