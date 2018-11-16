/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from "./src/Home";
import AppNavigation from "./src/AppNavigation";
type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props)
  }

  render() {
    return (
      <AppNavigation/>
    );
  }
}


