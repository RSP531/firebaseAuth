import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBd2msrB5F_X3M2jxSt4Fmac0sI3AG713k",
      authDomain: "authproj-59b59.firebaseapp.com",
      databaseURL: "https://authproj-59b59.firebaseio.com",
      projectId: "authproj-59b59",
      storageBucket: "authproj-59b59.appspot.com",
      messagingSenderId: "659708013331",
      appId: "1:659708013331:web:04014a4976c035a0af08e6",
      measurementId: "G-VHSF5ZYQYQ"
    })
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  }
}

export default App