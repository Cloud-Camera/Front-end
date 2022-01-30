import { RNCamera } from 'react-native-camera';
import React from 'react';
import { Text, View } from 'react-native';

const Camera = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <RNCamera/>
      <Text>This is camera</Text>
    </View>
  );
}

export default Camera;