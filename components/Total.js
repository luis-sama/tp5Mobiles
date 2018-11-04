import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Dimensions from 'Dimensions';

const ANCHO_PANTALLA = Dimensions.get('window').width;

class Total extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text style={{fontSize: 30}}>0</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'yellow',
    alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: ANCHO_PANTALLA - 40,
		margin: 10,
		height: 50
	}
})

export default Total;