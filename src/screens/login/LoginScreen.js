import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import CustomActivityIndicator from '../../components/CustomActivityIndicator';
import useLogin from './useLogin';
import colors from '../../theme/colors';
import theme from '../../theme';
import assets from '../../constants/assets';

export default function LoginScreen() {
  
  const {
    username,
    password,
    loading,
    handleLogin,
    setUsername,
    setPassword,
} = useLogin();

  return (
    <View style={styles.container}>
      <Image source={assets.wishlist_bcg_image} resizeMode={'contain'} style={styles.img} />

      <Text style={styles.title}>Login</Text>

      <CustomTextInput
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />

      <CustomTextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {loading ? (
        <CustomActivityIndicator />
      ) : (
        <CustomButton title="Login" onPress={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
    ...theme.justifyCenter,
  },
  img: {
    ...theme.alignSelfCenter,
    marginBottom:20,
  },
  title: {
    marginBottom: 40,
    ...theme.alignSelfCenter,
    ...theme.textMedium23,
    color: colors.black,
  },
});
