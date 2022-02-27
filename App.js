import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Root from "./root";
import { store } from './src/store';
import { Provider } from 'react-redux';

export default function Navigation() {
  return ( 
      <NavigationContainer>
        <Provider store={store}>
        <Root />
        </Provider>
      </NavigationContainer>

  );
}
