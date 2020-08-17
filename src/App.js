import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null }

  componentDidMount() {
    if (!firebase.apps.length) {
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

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View >
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App