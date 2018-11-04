import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import counterActions from '../state/actions';

class Controls extends React.Component {
  render() {
    const { agregarContador, removerContador } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={{padding: 15, backgroundColor: '#3fb710'}} onPress={agregarContador} >
          <Text style={styles.text}> + </Text>
        </TouchableOpacity>

        <TouchableOpacity style={{padding: 15, backgroundColor: '#ef1541'}} onPress={removerContador} >
          <Text style={styles.text}> - </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  button: {
    backgroundColor: '#2c3e50',
    
  },

  text: {
    color: '#fff',
    fontWeight: '700',
  },
});

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  agregarContador: counterActions.agregarContador,
  removerContador: counterActions.removerContador,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Controls);
