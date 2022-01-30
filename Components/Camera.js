import { RNCamera } from 'react-native-camera';
import React from 'react';
import { Text, View } from 'react-native';

const Camera = () => {
  const cameraPermission = await Camera.getCameraPermissionStatus();
  const newCameraPermission = await Camera.requestCameraPermission()
  const devices = useCameraDevices()
  const device = devices.back

  if (device == null) return <LoadingView />
  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
    />
  )
}

export default Camera;