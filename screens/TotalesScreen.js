import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'

import { Provider } from 'react-redux';
import store from '../state/store';

class TotalesScreen extends Component {
  render() {
    return (
			<Provider store={store}>
				<View style={styles.container}>
					<Text style={ styles.title }>Totales</Text>
					
					<ScrollView style={styles.scrollViewContainer}></ScrollView>

					<Button 
						title="Agregar"
						color="grey"
						onPress={() => this.props.navigation.navigate('NuevoTotal')}
					/>
				</View>
			</Provider>
    )
  }
};

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

export default TotalesScreen;