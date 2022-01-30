import useCameraDevices from 'react-native-vision-camera'
import React from 'react';
import { Text, View } from 'react-native';

const Camera = () => {
  
  
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) return <LoadingView />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
    />
  )
}

export default Camera;