import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Listado from '../Pantallas/Inicio';
import Carrito from '../Pantallas/Carrito';

const Stack = createStackNavigator();

export default function StackNav() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Inicio"
                component={Listado}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Carrito"
                component={Carrito}
            />

        </Stack.Navigator>
    )
}