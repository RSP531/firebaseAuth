import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then()
      .catch(err => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch(err => {
            this.setState({ loading: false })
            this.setState({ error: 'Authenication Failed.' })
          })
      })
  }

  renderButton() {

    if (this.state.loading) {
      return <Spinner />
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
    )
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
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    )
  }
}

export default LoginForm;

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}