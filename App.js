import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StackNav from './Navegaciones/StackNav';
import  NavigationContainer  from '@react-navigation/native';
import CarritoProvider from './Context/ProductosContext';



export default function App() {
  return (
    <CarritoProvider>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </CarritoProvider>
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
