import { Text, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerPramList } from '../types/navigation';

type Navigation = DrawerNavigationProp<MainDrawerPramList>;

const DrawerButton = () => {
  const navigation = useNavigation<Navigation>();

  return (
    <Pressable onPress={() => navigation.openDrawer()}>
      <Text style={{ fontSize: 16 }}>서랍</Text>
    </Pressable>
  );
};

export default DrawerButton;
