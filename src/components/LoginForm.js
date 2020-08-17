import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onButtonPress = () => {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            value={this.state.email}
            placeholder='user@gmail.com'
            onChangeText={email => this.setState({ email })}
          />

          <Text>{this.state.text}</Text>
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            value={this.state.password}
            placeholder="password"
            onChangeText={password => this.setState({ password })}
            secureTextEntry={true}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Log in</Button>
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;