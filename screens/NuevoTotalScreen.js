import React from 'react';
import { Provider } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';
import Controles from '../components/Controles';
import ContadorContainer from '../components/ContadorContainer';
import store from '../state/store';

class NuevoTotalScreen extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
					<Text style={ styles.title }>Nuevo total</Text>

          <Controles />
          <ScrollView style={styles.scrollViewContainer}>
            <ContadorContainer />
          </ScrollView>

					<Button
            title="Guardar"
            color="grey"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },

  title: {
    color: '#2c3e50',
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },

  scrollViewContainer: {
    flex: 1,
  },
});

export default NuevoTotalScreen;