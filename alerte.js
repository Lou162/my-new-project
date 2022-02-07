import React, { Component } from "react";
export default class App extends Component {
    render() {
      return (
        <View>
          <Button title='2 buttons alert' onPress={this.openAlert}/>
        </View>
      );
    }
  };