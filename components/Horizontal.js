import React, { Component } from 'react';
import { 
  Stylesheet, 
  Text, 
  View, 
  ScrollView, 
  Dimensions 
} from 'react-native';


export default class Horizontal extends Component {
  render () {
    return (
      <ScrollView 
        horizontal={true} 
        pagingEnabled={true} 
        style={styles.container}
        >
        <View style={styles.twitter}>
          <Text style={styles.innerText}>Twitter</Text>
        </View>
        <View style={[styles.twitter, styles.linkedin]}>
          <Text style={styles.innerText}>LinkedIn</Text>
        </View>
        <View style={[styles.twitter, styles.facebook]}>
          <Text style={styles.innerText}>FaceBook</Text>
        </View>
      </ScrollView>
    );
  }
}

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = {
  container: {

  },
  twitter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aced',
    width: deviceX,
    height: deviceY,
  },
  linkedin: {
    backgroundColor: '#007bb6',
  },
  facebook: {
    backgroundColor: '#3b5998',
  },
  innerText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold'
  },
};