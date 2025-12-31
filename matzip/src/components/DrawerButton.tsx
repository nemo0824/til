import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerPramList } from '@/types/navigation';
import Ionicons from '@react-native-vector-icons/ionicons';
import { colors } from '@/constants/colors';

type Navigation = DrawerNavigationProp<MainDrawerPramList>;

const DrawerButton = ({ color = colors.BLACK }) => {
  const navigation = useNavigation<Navigation>();

  return (
    <Pressable onPress={() => navigation.openDrawer()} style={styles.container}>
      <Ionicons name="menu" size={25} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },
});

export default DrawerButton;
