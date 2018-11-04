import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import counterActions from '../state/actions';
import Dimensions from 'Dimensions';

const ANCHO_PANTALLA = Dimensions.get('window').width;

class ContadorContainer extends React.Component {
  renderCounter() {
    const { counter, aumentarContador, disminuirContador } = this.props;

    return counter.items.map((item, index) => (
      <View key={index} style={styles.contador}>
        <Button title="<" onPress={() => disminuirContador(index)}/>
        <Text style={{fontSize: 30}}>{item}</Text>
        <Button title=">" onPress={() => aumentarContador(index)}/>
      </View>
      ));
  }

  render() {
    return (
      <View>
        {this.renderCounter()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contador: {
		backgroundColor: 'lightblue',
    	alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
		width: ANCHO_PANTALLA - 40,
		margin: 10,
		height: 50
	}
});

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = {
  aumentarContador: counterActions.aumentarContador,
  disminuirContador: counterActions.disminuirContador,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContadorContainer);
