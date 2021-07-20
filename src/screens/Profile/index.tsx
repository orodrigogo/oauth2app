import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { ProfileHeader } from '../../components/ProfileHeader';
import { Avatar } from '../../components/Avatar';
import { Button } from '../../components/Button';

import { styles } from './styles';
import { theme } from '../../styles/theme';

export function Profile() {
  const navigation = useNavigation();

  async function handleLogout() {
    navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <ProfileHeader />

      <View style={styles.content}>
        <View style={styles.profile}>
          <Avatar
            source={{ uri: 'https://github.com/rodrigorgtic.png' }}
          />

          <Text style={styles.name}>
            Rodrigo Gonçalves
          </Text>

          <View style={styles.email}>
            <Feather name="mail" color={theme.colors.secondary} size={18} />
            <Text style={styles.emailText}>
              rodrigo.goncalves@rocketseat.team
            </Text>
          </View>
        </View>

        <View style={styles.about}>
          <View style={styles.info}>
            <Feather
              name="user"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              Nome
            </Text>
            <Text style={styles.text}>
              Rodrigo
            </Text>
          </View>

          <View style={styles.info}>
            <Feather
              name="heart"
              size={34}
              color={theme.colors.note}
            />
            <Text style={styles.label}>
              Sobrenome
            </Text>
            <Text style={styles.text}>
              Gonçalves
            </Text>
          </View>
        </View>

        <View style={styles.locale}>
          <Feather
            name="map-pin"
            size={18}
            color={theme.colors.note}
          />

          <Text style={styles.localeText}>
            Localidade do perfil do usuário: pt-BR
          </Text>
        </View>

        <Button
          title="Desconectar"
          icon="power"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}