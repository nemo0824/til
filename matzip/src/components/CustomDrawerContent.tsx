import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={{ gap: 5, marginTop: 30 }}
      >
        <Pressable style={styles.profileContainer}>
          <View style={styles.userImageContainer}>
            <Image
              source={require('../assets/default-user.png')}
              style={styles.userImage}
            />
          </View>
          <Text style={styles.nickName}>사용자 이름</Text>
        </Pressable>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.menuText}>설정</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
    gap: 5,
  },
  userImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  nickName: {
    fontSize: 14,
  },
  userImage: {
    width: '100%',
    height: '100%',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY_200,
  },
  menuText: {
    fontSize: 15,
  },
});
export default CustomDrawerContent;
