import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import IllustrationSvg from '../../assets/illustration.svg';

export function SignInContent() {
  return (
    <View style={styles.container}>
      <IllustrationSvg height={300} />

      <View style={styles.content}>
        <Text style={styles.title}>
          Partiu?
        </Text>

        <Text style={styles.subtitle}>
          Entre com sua conta Google para {'\n'}
          ser mais rápido e vamos decolar.
        </Text>

        <Text style={styles.description}>
          Compreendendo os conceitos e implementando na prática
          a estratégia de login social utilizando o padrão OAuth.
        </Text>
      </View>
    </View>
  );
}