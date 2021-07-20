import React from 'react';
import { View, Image, ImageProps } from 'react-native';

import { styles } from './styles';

export function Avatar({ ...rest }: ImageProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode="cover"
        {...rest}
      />
    </View>
  );
}